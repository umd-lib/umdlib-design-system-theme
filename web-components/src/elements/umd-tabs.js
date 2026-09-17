import { LitElement, css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import sdcStyles from "../../../components/umd-libraries-tabs/umd-libraries-tabs.css?inline";
import { umdStaticStyles } from "../styles/umd-static.js";

export class UmdTabs extends LitElement {
  static styles = [umdStaticStyles, unsafeCSS(sdcStyles), css`
    :host {
      display: block;
    }

    ::slotted([role="tab"]) {
      width: fit-content;
      display: flex;
      padding: var(--space-sm) var(--space-md);
      border: 0;
      background: transparent;
      color: var(--dark-gray);
      font: inherit;
      cursor: pointer;
    }

    ::slotted([role="tab"][aria-selected="true"]) {
      color: var(--black);
    }

    ::slotted([role="tabpanel"]) {
      padding: var(--space-md);
    }

    ::slotted([role="tabpanel"][hidden]) {
      display: none;
    }

    .tabs--triggers-deco {
      inset-inline: 0;
      bottom: 0;
    }
  `];

  @property({ attribute: "default-tab" }) defaultTab = "";
  @property({ attribute: "tab-label" }) tabLabel = "";
  @property() componentid = "";
  @property({ type: Boolean, state: true }) vertical = false;

  firstUpdated() {
    this.triggerSlot = this.shadowRoot.querySelector("slot[name=triggers]");
    this.contentSlot = this.shadowRoot.querySelector("slot[name=content]");
    this.triggerSlot.addEventListener("slotchange", () => this.initialize());
    this.contentSlot.addEventListener("slotchange", () => this.initialize());
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("hashchange", this.handleHashChange);
    this.initialize();
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("hashchange", this.handleHashChange);
    super.disconnectedCallback();
  }

  get triggers() {
    return this.triggerSlot?.assignedElements({ flatten: true }).filter((element) => element.getAttribute("role") === "tab") || [];
  }

  get panels() {
    return this.contentSlot?.assignedElements({ flatten: true }).filter((element) => element.getAttribute("role") === "tabpanel") || [];
  }

  initialize() {
    const triggers = this.triggers;
    if (!triggers.length) return;

    triggers.forEach((trigger, index) => {
      trigger.onclick = () => this.selectTab(this.tabValue(trigger), true);
      trigger.onkeydown = (event) => this.handleKeyDown(event, index);
    });

    const hashValue = this.getHashValue();
    const requestedTab = hashValue || this.defaultTab;
    const initialTrigger = triggers.find((trigger) => this.tabValue(trigger) === requestedTab) || triggers[0];
    this.selectTab(this.tabValue(initialTrigger), false);
    this.updateDecoration();
  }

  tabValue(trigger) {
    return trigger.id.replace(/^tab-/, "");
  }

  getHashValue() {
    const hash = window.location.hash.slice(1);
    if (!hash) return "";
    const separator = hash.indexOf("--");
    const containerId = this.componentid || this.id;
    if (separator >= 0) {
      return hash.slice(0, separator) === containerId ? hash.slice(separator + 2) : "";
    }
    return hash;
  }

  updateURLHash(value) {
    const containerId = this.componentid || this.id;
    const hash = containerId ? `${containerId}--${value}` : value;
    history.pushState(null, "", `#${hash}`);
  }

  selectTab(value, updateHash = false) {
    const triggers = this.triggers;
    const panels = this.panels;

    triggers.forEach((trigger) => {
      const active = this.tabValue(trigger) === value;
      trigger.setAttribute("aria-selected", String(active));
      trigger.setAttribute("tabindex", active ? "0" : "-1");
      trigger.classList.toggle("active", active);
    });

    panels.forEach((panel) => {
      const active = panel.id === `tabpanel-${value}`;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
      panel.classList.toggle("hidden", !active);
    });

    if (updateHash) this.updateURLHash(value);
    requestAnimationFrame(() => this.updateDecoration());
  }

  handleKeyDown(event, index) {
    const nextKey = this.vertical ? "ArrowDown" : "ArrowRight";
    const previousKey = this.vertical ? "ArrowUp" : "ArrowLeft";
    let nextIndex = index;

    if (event.key === nextKey) nextIndex = (index + 1) % this.triggers.length;
    if (event.key === previousKey) nextIndex = (index - 1 + this.triggers.length) % this.triggers.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = this.triggers.length - 1;

    if (nextIndex !== index) {
      event.preventDefault();
      const trigger = this.triggers[nextIndex];
      trigger.focus();
      this.selectTab(this.tabValue(trigger), true);
    }
  }

  handleHashChange = () => {
    const value = this.getHashValue();
    if (value && this.triggers.some((trigger) => this.tabValue(trigger) === value)) {
      this.selectTab(value);
    }
  };

  handleResize = () => this.updateDecoration();

  updateDecoration() {
    const decoration = this.shadowRoot?.querySelector(".tabs--triggers-deco");
    const line = this.shadowRoot?.querySelector(".tabs--triggers-deco-activeline");
    const active = this.triggers.find((trigger) => trigger.getAttribute("aria-selected") === "true");
    if (!decoration || !line || !active) return;

    const triggerRect = active.getBoundingClientRect();
    const parentRect = decoration.parentElement.getBoundingClientRect();
    line.style.width = `${triggerRect.width}px`;
    line.style.transform = `translateX(${triggerRect.left - parentRect.left}px)`;
  }

  render() {
    return html`
      <div class="umd-lib tabs--container c-bg-primary c-content-primary s-margin-general-medium" id=${this.componentid}>
        ${this.tabLabel ? html`<p class="sr-only">${this.tabLabel}</p>` : ""}
        <div class="tabs--triggers" role="tablist" aria-label=${this.tabLabel || "Tabs"}>
          <slot name="triggers"></slot>
          <div class="tabs--triggers-deco" aria-hidden="true">
            <span class="tabs--triggers-deco-activeline"></span>
          </div>
        </div>
        <div class="tabs--content">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("umd-tabs", UmdTabs);
