import { LitElement, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import sdcStyles from "../../../components/umd-libraries-list/umd-libraries-list.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

let listCount = 0;

export class UmdList extends LitElement {
  static styles = [umdStaticStyles, unsafeCSS(sdcStyles)];

  @property({ attribute: "heading-level" }) headingLevel = "h2";
  @property({ attribute: "list-url" }) listUrl = "";
  @property({ attribute: "image-url" }) imageUrl = "";
  @property({ attribute: "image-alt" }) imageAlt = "";
  @property({ attribute: "list-date" }) listDate = "";
  @property() componentid = "";

  constructor() {
    super();
    this.listId = `list-${++listCount}`;
  }

  render() {
    return html`
      <div class="umd-lib list s-margin-general-medium" id=${this.componentid} role="article" aria-labelledby=${this.listId}>
        <div class="list--title-section s-stack-small">
          <div class="list--eyebrow t-eyebrow c-content-primary"><slot name="eyebrow"></slot></div>
          <div class="list--title">${this.renderHeading()}</div>
        </div>
        <div class="list--details">
          <div class="list--information">
            <div class="list--content">
              <div class="list--description t-body-small wysiwyg-editor"><slot name="description"></slot></div>
              ${this.listDate ? html`<div class="list--date t-label c-content-tertiary">${this.listDate}</div>` : ""}
            </div>
          </div>
          ${this.imageUrl ? html`<div class="list--image"><img alt=${this.imageAlt} src=${this.imageUrl} loading="lazy"></div>` : ""}
        </div>
      </div>
    `;
  }

  renderHeading() {
    const content = html`<a href=${this.listUrl}><slot name="title"></slot></a>`;
    switch (this.headingLevel) {
      case "h3": return html`<h3 class="t-title-medium c-content-primary" id=${this.listId}>${content}</h3>`;
      case "h4": return html`<h4 class="t-title-medium c-content-primary" id=${this.listId}>${content}</h4>`;
      case "h5": return html`<h5 class="t-title-medium c-content-primary" id=${this.listId}>${content}</h5>`;
      case "h6": return html`<h6 class="t-title-medium c-content-primary" id=${this.listId}>${content}</h6>`;
      default: return html`<h2 class="t-title-medium c-content-primary" id=${this.listId}>${content}</h2>`;
    }
  }
}

customElements.define("umd-list", UmdList);
