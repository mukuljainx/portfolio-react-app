import { css } from "lit-element";

const SharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  .flex {
    display: flex;
  }

  .flex.h-center {
    justify-content: center;
  }

  .flex.v-center {
    align-items: center;
  }
`;

export default SharedStyles;
