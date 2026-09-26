# Form Workspace — product catalog

A single-page editorial catalog for four workspace concepts and ten individual office products. The supplied office photography shapes the site's visual direction: architectural images, restrained typography, and a charcoal and stone palette. It is a static site hosted by GitHub Pages.

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

- `index.html` contains the page structure and four workspace scenes.
- `styles.css` provides the responsive layout and visual design.
- `script.js` contains fourteen concept products with descriptions, specifications and illustrative CAD prices. It powers search, category filtering, sorting, product details and a local planning list that can be downloaded as CSV.
- `images/` contains the four supplied workspace photographs and ten generated product images.

This is a concept catalog. Product names, specifications and prices are illustrative rather than verified listings. The planning list is saved in the current browser's local storage; there is no checkout or ordering service. Totals exclude taxes, delivery and installation.
