GitHub Pages Deployment
=======================

This repository is configured to auto-deploy the `charity-site` folder to GitHub Pages using GitHub Actions.

What the workflow does:
- On push to `main`, the `.github/workflows/deploy.yml` action checks out the repo and publishes the `charity-site` folder to the `gh-pages` branch.

After the first successful run:
- Go to your repository Settings → Pages.
- Ensure the Source is set to the `gh-pages` branch and the root folder (`/`). GitHub will show the published site URL.

Notes:
- The workflow uses the automatically provided `GITHUB_TOKEN`, no extra secrets are required.
- If you'd prefer the site published from a different folder, update `publish_dir` in the workflow.
