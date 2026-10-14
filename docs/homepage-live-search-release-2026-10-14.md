# Homepage live search release

Production commit: 30621b2614c747e2e8f2148ecb44cc55f5cad625
Deployment: dpl_fLr1qKvm2FMVUowRpo3ggJcXnjQP — READY, production.

Subtle 44px search field below homepage buttons. Client-side matching across all five trade catalogues, with 333 unique products representing 401 trade entries. Minimal props; no catalogue dependencies imported into client runtime. Results appear only for typed queries, show up to six tool links and trade labels; Clear and Escape restore quiet state. Keyboard focus styles and labelled search landmark included. Repeated models across trades appear once.

Tests, lint (0 errors, 8 existing image warnings), production build and diff checks passed. Live checks: Fluke 117, RIDGID K-400, Fieldpiece SM482V, FLIR, Estwing claw hammer returned expected trade tools. Missing query returned empty-state message. Clear and Escape worked. Estwing result navigated to its correct standalone review. No desktop document overflow. Screenshot captures resting homepage view. No separate mobile browser viewport available.
