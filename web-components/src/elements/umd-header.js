import { LitElement, nothing } from "lit";
import { umdStaticStyles } from "../styles/umd-static.js";

let headerLoadQueue = Promise.resolve();

export class UmdHeader extends LitElement {
  static styles = umdStaticStyles;

  static properties = {
    showSearch: { type: Boolean, attribute: "show-search" },
    searchDestination: { attribute: "search-destination" },
    showEvents: { type: Boolean, attribute: "show-events" },
    showNews: { type: Boolean, attribute: "show-news" },
    showSchools: { type: Boolean, attribute: "show-schools" },
    showAdmissions: { type: Boolean, attribute: "show-admissions" },
    showSupport: { type: Boolean, attribute: "show-support" },
    supportDestination: { attribute: "support-destination" },
  };

  constructor() {
    super();
    this.showSearch = false;
    this.searchDestination = "";
    this.showEvents = false;
    this.showNews = false;
    this.showSchools = false;
    this.showAdmissions = false;
    this.showSupport = false;
    this.supportDestination = "";
    this.headerScript = null;
  }

  firstUpdated() {
    this.loadHeader();
  }

  render() {
    return nothing;
  }

  loadHeader() {
    const headerUrl = new URL("https://umd-header.umd.edu/build/bundle.js");
    const options = {
      search_domain: this.searchDestination,
      support_url: this.supportDestination,
      wrapper: "",
      sticky: "0",
      search: this.showSearch ? "1" : "0",
      events: this.showEvents ? "1" : "0",
      news: this.showNews ? "1" : "0",
      schools: this.showSchools ? "1" : "0",
      admissions: this.showAdmissions ? "1" : "0",
      support: this.showSupport ? "1" : "0",
    };

    Object.entries(options).forEach(([name, value]) => headerUrl.searchParams.set(name, value));

    this.headerScript = document.createElement("script");
    this.headerScript.src = headerUrl.toString();
    this.headerScript.async = true;

    headerLoadQueue = headerLoadQueue.then(() => new Promise((resolve) => {
      const resolveLoad = () => resolve();
      this.headerScript.addEventListener("load", resolveLoad, { once: true });
      this.headerScript.addEventListener("error", () => {
        this.dispatchEvent(new CustomEvent("umd-header-error", {
          bubbles: true,
          composed: true,
          detail: { src: this.headerScript.src },
        }));
        resolveLoad();
      }, { once: true });
      document.body.append(this.headerScript);
    }));
  }
}

customElements.define("umd-header", UmdHeader);
