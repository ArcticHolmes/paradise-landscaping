# Paradise Landscaping — Visual Owner Studio

## What's included
- `.pages.yml` sets up a form-based editor for the welcome page, Florida, and Michigan.
- `content/welcome.json`, `content/florida.json`, `content/michigan.json` are the editable values.
- `assets/cms-content.js` displays changes from those files on the live pages.
- `assets/uploads/` stores images uploaded with Pages CMS.
- The small public `admin` link opens `admin.html`, which directs the owner to secure GitHub login at Pages CMS.

## Install (keep the folder structure!)
1. Download and extract the ZIP, then upload all extracted files and folders to the ROOT of `ArcticHolmes/paradise-landscaping` on GitHub (branch `main`). **Do not upload ZIP itself.** Upload the `assets` and `content` folders as folders, not their contents to repository root.
2. Verify `.pages.yml` appears at repository root (Windows may hide dotfiles). GitHub can create it by filename if needed. This file is essential.
3. Visit https://app.pagescms.org and sign in with GitHub as ArcticHolmes.
4. Install/authorize the Pages CMS GitHub App for **only the `paradise-landscaping` repository** when prompted.
5. In Pages CMS select that repository and branch `main`. Choose the **Welcome**, **Florida**, or **Michigan** editor, or **Media** to upload photos.
6. Save a small change; Pages CMS commits it. GitHub Pages deploys it automatically. Refresh the public site to view it.

## Manage pictures
- The photo field has a media picker. Upload photos in Pages CMS and select them in each page's field. Use compressed JPG/WebP photos, generally under 1 MB for best speed.
- In Florida, "Christmas Lights image" overrides Gallery Photo 3; if blank, Christmas Lights automatically uses Gallery Photo 3.
- Blank image fields leave the existing artwork untouched.

## Security and limits
- Never put any admin password in this public repository. GitHub permissions control who can edit via the CMS.
- No direct browser editing of the published pages is enabled (that would require separate authentication infrastructure).
- Existing estimate email form is still not a backend submission service. Reviews do not automatically synchronize Google ratings.
- Prices are examples until official prices are supplied and updated in CMS.
- Public website is `https://paradiselandscapingmichigan.com/`.
