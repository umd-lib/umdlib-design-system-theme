import { LitElement, html, unsafeCSS } from "lit";
import sdcStyles from "../../../components/umd-libraries-navigation/umd-libraries-navigation.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

export class UmdNavigation extends LitElement {
  static styles = [...umdStaticStyles, unsafeCSS(sdcStyles)];

  static properties = {
    logoUrl: { attribute: "logo-url" },
    open: { state: true },
    links: { state: true },
  };

  constructor() {
    super();
    this.logoUrl = "https://www.lib.umd.edu/themes/contrib/umdlib-design-system-theme/logo.svg";
    this.open = false;
    this.links = [];
  }

  firstUpdated() {
    this.rows = this.shadowRoot.querySelector(".navigation__rows");
    this.menuButton = this.shadowRoot.querySelector(".navigation__menu-button");
    this.menuButton.addEventListener("click", this.toggleMenu);
    this.addEventListener("keydown", this.handleKeydown);
  }

  disconnectedCallback() {
    this.menuButton?.removeEventListener("click", this.toggleMenu);
    this.removeEventListener("keydown", this.handleKeydown);
    document.body.style.overflow = "";
    super.disconnectedCallback();
  }

  toggleMenu = () => {
    this.open = !this.open;
    this.menuButton.classList.toggle("is-active", this.open);
    this.menuButton.setAttribute("aria-expanded", String(this.open));
    this.rows.classList.toggle("is-open", this.open);
    document.body.style.overflow = this.open ? "hidden" : "";
  };

  handleKeydown = (event) => {
    if (event.key === "Escape" && this.open) this.toggleMenu();
  };

  handleMainSlotChange = (event) => {
    this.links = event.target.assignedElements()
      .filter((element) => element.localName === "a")
      .map((link) => {
        const clone = link.cloneNode(true);
        clone.removeAttribute("slot");
        clone.classList.add("navigation__menu-link");
        return clone;
      });
  };

  render() {
    return html`
      <div class="umd-lib navigation" id="umdlib-navigation">
        <div class="navigation__content s-box-page-medium-h s-box-page-small-v s-center">
          <div class="navigation__header">
            <div class="navigation__logo">
              <a href="/" title="University Libraries Home" class="navigation__logo-link" aria-label="University Libraries Home">
                <img alt="University Libraries" loading="lazy" width="270" height="81" src=${this.logoUrl}>
              </a>
            </div>
          </div>
          <button class="navigation__menu-button" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="navigation-rows" type="button">
            <span class="navigation__menu-icon" aria-hidden="true"></span>
          </button>
          <div class="navigation__rows" id="navigation-rows">
            <div class="navigation__row-main">
              <nav role="navigation" aria-label="Main navigation" class="navigation__main-menu">
                <ul class="navigation__menu-list">
                  ${this.links.map((link) => html`<li class="navigation__menu-item"><div>${link}</div></li>`)}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <slot name="main" @slotchange=${this.handleMainSlotChange} hidden></slot>
    `;
  }
}

customElements.define("umd-navigation", UmdNavigation);
