"""Check production HTTP routes; server and requests share the same process network."""
import json, os, subprocess, tempfile, time
from pathlib import Path
from urllib.request import urlopen
from urllib.error import HTTPError, URLError

root = Path(__file__).resolve().parents[1]
manifest = json.loads((root / '.next/prerender-manifest.json').read_text())
routes = [r for r in manifest['routes'] if r != '/_not-found']
with tempfile.TemporaryFile() as logs:
    server = subprocess.Popen(['npm', 'run', 'start', '--', '--hostname', '127.0.0.1', '--port', '3100'], cwd=root,
                              stdout=logs, stderr=logs, start_new_session=True)
    try:
        for attempt in range(100):
            try:
                with urlopen('http://127.0.0.1:3100', timeout=2) as response:
                    if response.status == 200: break
            except URLError:
                if server.poll() is not None:
                    logs.seek(0)
                    raise RuntimeError('Server exited during startup: ' + logs.read().decode())
                time.sleep(.1)
        else: raise RuntimeError('Server did not become ready')
        errors = []
        for route in routes:
            with urlopen('http://127.0.0.1:3100' + route, timeout=10) as response:
                if response.status != 200: errors.append([route, response.status])
        for route in ['/plumbers/does-not-exist', '/electricians/does-not-exist',
                      '/reviews/does-not-exist', '/plumbers/workflows/does-not-exist',
                      '/hvac/does-not-exist', '/hvac/workflows/does-not-exist',
                      '/home-inspectors/does-not-exist', '/home-inspectors/workflows/does-not-exist']:
            try:
                with urlopen('http://127.0.0.1:3100' + route, timeout=10) as response:
                    errors.append([route, 'Expected 404', response.status])
            except HTTPError as error:
                if error.code != 404: errors.append([route, error.code])
        print(json.dumps({'productionRoutesChecked':len(routes), 'invalidRoutesChecked':8,
                          'errors':errors}, indent=2))
        if errors: raise SystemExit(1)
    finally:
        import signal
        try: os.killpg(server.pid, signal.SIGTERM)
        except ProcessLookupError: pass
        server.wait(timeout=10)
