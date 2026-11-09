# Paradise Landscaping — Admin update for GitHub Pages

Upload `admin.html` and `assets/admin-link.css`, and replace the five existing HTML pages with the matching versions in this package. Keep existing files and the assets folder layout.

This adds a tiny admin link on all pages. The admin.html page links to GitHub's authenticated edit, asset upload and deployment pages. It does **not** implement a secure password form in the publicly visible HTML. GitHub account permissions protect writes; anyone can see the directory of edit links but cannot commit without permission.

For future image/content editing directly on the site, use a server-side authenticated CMS or OAuth-capable backend; never place the previous preview password or a GitHub token in front-end source code.
