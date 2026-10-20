# Social Tree

My links page: portfolio, design system, projects and contact, in one place.

**Live:** https://hemerson-git.github.io/social-tree/

<p>
  <img src="./.github/preview-dark.png" alt="The links page in the dark theme on a phone" width="32%" />
  <img src="./.github/preview-light.png" alt="The links page in the light theme on a phone" width="32%" />
</p>

<img src="./.github/preview-desktop.png" alt="The links page on a desktop screen" width="80%" />

## How it's built

- A static page in [`docs/`](docs), served by GitHub Pages. No build step.
- Styled with [`@hemerson/design-system`](https://www.npmjs.com/package/@hemerson/design-system), loaded from jsDelivr: the tokens, the dark and light themes, and the liquid-glass toolbar, cards, buttons and toast all come from the package. [`docs/assets/styles.css`](docs/assets/styles.css) only lays the page out.
- Follows the system's dark or light setting, with a toggle that remembers your choice.
- **Share** opens the phone's share sheet, or copies the link on desktop.

## Run it locally

Open `docs/index.html` in a browser, or serve the folder:

```bash
npx serve docs
```
