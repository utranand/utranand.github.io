# Story 6.1: Configure for GitHub Pages & Deploy

Status: drafted

## Story

As a developer,
I want to configure the project for GitHub Pages and set up automatic deployment,
so that the site is easily accessible to the public and updates automatically upon code changes.

## Acceptance Criteria

1. [ ] `base` path in `vite.config.js` (or `.ts`) configured to match the repository name (e.g., `/utranand.github.io/`).
2. [ ] GitHub Actions workflow file (`.github/workflows/deploy.yml`) created for automated deployment.
3. [ ] Workflow configured to trigger on pushes to the `main` branch.
4. [ ] Workflow successfully builds the project and deploys the `dist` folder to GitHub Pages.
5. [ ] Project is accessible via the GitHub Pages URL after deployment.
6. [ ] Documentation updated with the live site link.

## Tasks / Subtasks

- [ ] Vite Configuration (AC: 1)
  - [ ] Update `vite.config.js` with the correct `base` path
- [ ] CI/CD Setup (AC: 2, 3, 4)
  - [ ] Create `.github/workflows/deploy.yml`
  - [ ] Implement build and deploy steps using standard GitHub Actions
- [ ] Deployment (AC: 5)
  - [ ] Push changes to GitHub and monitor the Actions tab
- [ ] Verification (AC: 6)
  - [ ] Verify the live site link and document it in the PRD or README

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

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Antigravity (Bob persona)

### Debug Log References

### Completion Notes List

### File List
