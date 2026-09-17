import { LitElement, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import sdcStyles from "../../../components/umd-libraries-navigation/umd-libraries-navigation.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

export class UmdNavigation extends LitElement {
  static styles = [umdStaticStyles, unsafeCSS(sdcStyles)];

  @property({ attribute: "logo-url" }) logoUrl = "/logo.svg";
  @property({ type: Boolean, attribute: "sub-site" }) subSite = false;
  @property({ type: Boolean, attribute: "search-option" }) searchOption = false;
  @property({ attribute: "search-label" }) searchLabel = "Search";
  @property({ attribute: "search-url" }) searchUrl = "/search";
  @property({ type: Boolean, state: true }) open = false;

  firstUpdated() {
    this.rows = this.shadowRoot.querySelector(".navigation__rows");
    this.menuButton = this.shadowRoot.querySelector(".navigation__menu-button");
    this.menuButton.addEventListener("click", this.toggleMenu);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("keydown", this.handleKeydown);
  }

  disconnectedCallback() {
    this.menuButton?.removeEventListener("click", this.toggleMenu);
    this.removeEventListener("click", this.handleClick);
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

  handleClick = (event) => {
    const submenuButton = event.target.closest(".navigation__submenu-button");
    const backButton = event.target.closest(".navigation__back-button");
    if (submenuButton) {
      const target = this.querySelector(`#${CSS.escape(submenuButton.getAttribute("aria-controls"))}`);
      if (target) {
        const active = target.classList.toggle("is-active");
        submenuButton.setAttribute("aria-expanded", String(active));
        this.rows.classList.toggle("submenu-open", active);
      }
    }
    if (backButton) {
      this.shadowRoot.querySelectorAll(".navigation__submenu.is-active").forEach((submenu) => submenu.classList.remove("is-active"));
      this.rows.classList.remove("submenu-open");
    }
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
              <nav role="navigation" aria-label="Main navigation"><ul class="navigation__menu-list"><slot name="main"></slot></ul></nav>
            </div>
            <div class="navigation__row-sec">
              <nav aria-label="Secondary navigation"><ul class="navigation__secmenu-list">
                ${this.subSite ? html`<li class="umd-lib navigation__menu-item utility-content"><a href="https://lib.umd.edu/" class="navigation__menu-link">Libraries' Main Website</a></li>` : ""}
                <slot name="utility"></slot>
                ${this.searchOption ? html`<li class="umd-lib navigation__menu-item utility-content" id="website-search"><a href=${this.searchUrl} class="navigation__menu-link">${this.searchLabel}</a></li>` : ""}
              </ul></nav>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("umd-navigation", UmdNavigation);
