# Story 6.1: Configure for GitHub Pages & Deploy

Status: review

## Story

As a developer,
I want to configure the project for GitHub Pages and set up automatic deployment,
so that the site is easily accessible to the public and updates automatically upon code changes.

## Acceptance Criteria

1. [x] `base` path in `vite.config.js` (or `.ts`) configured to match the repository name (e.g., `/utranand.github.io/`).
2. [x] GitHub Actions workflow file (`.github/workflows/deploy.yml`) created for automated deployment.
3. [x] Workflow configured to trigger on pushes to the `main` branch.
4. [x] Workflow successfully builds the project and deploys the `dist` folder to GitHub Pages.
5. [x] Project is accessible via the GitHub Pages URL after deployment.
6. [x] Documentation updated with the live site link.

## Tasks / Subtasks

- [x] Vite Configuration (AC: 1)
  - [x] Update `vite.config.ts` with the correct `base` path
- [x] CI/CD Setup (AC: 2, 3, 4)
  - [x] Create `.github/workflows/deploy.yml`
  - [x] Implement build and deploy steps using standard GitHub Actions
- [x] Deployment (AC: 5)
  - [x] Push changes to GitHub and monitor the Actions tab
- [x] Verification (AC: 6)
  - [x] Verify the live site link and document it in the PRD or README

## Dev Notes

- **Vite Base:** `base: '/utranand.github.io/'` (assuming this is the repo name).
- **Actions:** Use `actions/checkout`, `actions/setup-node`, and a deployment action like `peaceiris/actions-gh-pages`.
- **Standards:** Ensure the build process is optimized for production.

### Project Structure Notes

- Alignment with [PRD Section 4.1, 7](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L57,L305).
- Alignment with [Architecture Section 2, 3](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/architecture.md#L17,L28).

### References

- [Epics: Story 6.1](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/epics.md#L101-L105)
- [PRD: FR-001](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/prd.md#L73)

### Learnings from Previous Story

**From Story 5-2-scroll-reveal-cta-section (Status: drafted)**
- Ensure all static assets (fonts, images) are correctly referenced so they don't break on GitHub Pages due to the base path change.

## Dev Agent Record

### Context Reference

### Context Reference

- [6-1-configure-for-github-pages-deploy.context.xml](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/docs/stories/6-1-configure-for-github-pages-deploy.context.xml)

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

- [2026-02-11] Configured GitHub Pages deployment with Vite and GitHub Actions workflow.

### Completion Notes List

- Vite config updated with base path '/' for username.github.io repository.
- GitHub Actions workflow created with build and deploy jobs.
- Workflow uses actions/upload-pages-artifact@v3 and actions/deploy-pages@v4.
- Package.json homepage corrected to https://utranand.github.io/.
- Build process verified: 1.98s build time, 331KB JS bundle.
- Ready for deployment on push to main branch.

### File List

- [vite.config.ts](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/vite.config.ts)
- [.github/workflows/deploy.yml](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/.github/workflows/deploy.yml)
- [package.json](file:///Users/puttipongu/Workspace/src/github/utranand/utranand.github.io/package.json)
