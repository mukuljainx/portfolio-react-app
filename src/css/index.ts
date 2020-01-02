import { css } from "lit-element";

const getDefaultStyle = () => css`
  :host {
    display: flex;
    flex-direction: column;
    height: 100vh;

    --app-drawer-width: 256px;

    --app-primary-color: #e91e63;
    --app-secondary-color: #293237;
    --app-dark-text-color: var(--app-secondary-color);
    --app-light-text-color: white;
    --app-section-even-color: #f7f7f7;
    --app-section-odd-color: white;

    --app-header-background-color: white;
    --app-header-text-color: var(--app-dark-text-color);
    --app-header-selected-color: var(--app-primary-color);

    --app-drawer-background-color: var(--app-secondary-color);
    --app-drawer-text-color: var(--app-light-text-color);
    --app-drawer-selected-color: #78909c;
  }

  mx-app {
  }

  main {
    flex-grow: 2;
    width: 100%;
    display: block;
  }

  img.clouds {
    position: fixed;
    left: calc(50% - 421px);
    top: 110px;
    z-index: -1;
  }

  .main-content {
    padding-top: 32px;
  }

  .page {
    display: none;
  }

  .page[active] {
    display: block;
  }

  footer {
    z-index: -1;
    display: flex;
  }
  footer > img {
    width: 100%;
  }

  /* Wide layout: when the viewport width is bigger than 460px, layout
        changes to a wide layout */
  @media (min-width: 460px) {
    .main-content {
      padding-top: 64px;
    }
  }
`;

export default getDefaultStyle;
