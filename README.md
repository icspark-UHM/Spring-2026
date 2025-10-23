### Class Website

This is for the Spring 2026 Class Website for ICSpark Web Development Program

## Notes: shared header/footer includes

This project uses simple client-side includes so the header and footer are stored in
`partials/header.html` and `partials/footer.html`. Each page contains a placeholder
element like:

	<div data-include="partials/header.html"></div>

The `script.js` loader fetches those partials on page load and injects them before
initializing the navigation and footer year. To test pages locally, serve the
directory with a static server (browsers block fetches when opening HTML via
`file://`). Example (Python 3):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser. If you prefer server-side includes
or a build step, we can migrate these partials to a templating system (EJS, Jekyll, etc.).
