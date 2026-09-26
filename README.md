# Form — product catalog

A minimal, single-page product catalog for a fictional collection of everyday objects. It is a static site hosted by GitHub Pages.

## Open the site

Visit **[tomqwu.github.io/product_catalog_demo](https://tomqwu.github.io/product_catalog_demo/)** in a browser. GitHub Pages publishes the `main` branch from the repository root.

To read this README and browse the source files, visit the [GitHub repository](https://github.com/tomqwu/product_catalog_demo). GitHub displays this README below the file list.

## Run locally

Clone the repository and start a simple web server:

```sh
git clone https://github.com/tomqwu/product_catalog_demo.git
cd product_catalog_demo
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`.

## What's included

- `index.html` contains the page content and four sample product cards.
- `styles.css` provides the responsive layout and CSS product illustrations.
- `script.js` filters products by All, Wear, Listen, and Live.

This is a design demo. The product links and bag are placeholders, and the contact link uses an example email address. There is no checkout or product detail page.
