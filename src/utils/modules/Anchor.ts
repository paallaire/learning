import { generateSlug } from "@utils/utils";

export default class Anchor {
  private elAnchor: HTMLElement;
  private label: string;

  constructor(elAnchorDom: HTMLElement) {
    this.elAnchor = elAnchorDom;

    this.label = generateSlug(this.elAnchor.getAttribute('data-anchor-label') ?? "");
    this.elAnchor.setAttribute('href', `#${this.label}`);
  }

}
