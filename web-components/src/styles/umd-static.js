import { css } from "lit";

export const umdStaticStyles = css`
  :host {
    display: block;
  }

  .s-margin-general-medium {
    margin-bottom: var(--space-md);
  }

  .t-body-small {
    font-size: 1rem;
    line-height: 1.375rem;
  }

  .t-italic {
    font-style: italic;
  }

  .c-bg-secondary {
    background-color: var(--lightest-gray);
  }

  .s-box-medium-h {
    padding-inline: var(--space-md);
  }

  .s-box-medium-v {
    padding-block: var(--space-md);
  }

  .wysiwyg-editor ::slotted(*) {
    margin-block: 0 var(--space-sm);
  }

  .wysiwyg-editor ::slotted(*:last-child) {
    margin-bottom: 0;
  }
`;
