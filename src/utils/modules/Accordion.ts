export default class Accordion {
  private toggleBound: (event: Event) => void;
  private elAcoordion: HTMLElement;
  private button: HTMLElement;
  private content: HTMLElement;
  private id: string;

  constructor(elAcoordion: HTMLElement) {
    const urlParams = new URLSearchParams(window.location.search);
    const accordionId = urlParams.get('accordionId');

    this.elAcoordion = elAcoordion
    this.id = elAcoordion.getAttribute('id') as string;
    this.elAcoordion.setAttribute('id', `accordion-${this.id}`);
    this.toggleBound = this.toggle.bind(this);

    this.button = this.elAcoordion.querySelector('.c-accordion__button') as HTMLButtonElement;
    this.content = this.elAcoordion.querySelector('.c-accordion__content') as HTMLElement;

    this.button.setAttribute('aria-controls', `accordion-content-${this.id}`);
    this.button.setAttribute('id', `accordion-button-${this.id}`);
    this.content.setAttribute('id', `accordion-content-${this.id}`);
    this.content.setAttribute('aria-hidden', 'true');
    this.content.setAttribute('aria-labelledby', `accordion-content-${this.id}`);

    this.button.addEventListener('click', this.toggleBound);

    if (this.button.getAttribute('aria-expanded') || this.id === accordionId) {
      this.open();
    }

  }
  
  private toggle(event: Event) {
    const isExpanded = this.elAcoordion.classList.contains('is-active');

    if (isExpanded) {
      this.close();
      return;
    }

    this.open();
  }

  private open() {
    this.elAcoordion.classList.add('is-active');
    this.button.setAttribute('aria-expanded', 'true');
    this.content.setAttribute('aria-hidden', 'false');
  }

  private close() {
    this.elAcoordion.classList.remove('is-active');
    this.button.setAttribute('aria-expanded', 'false');
    this.content.setAttribute('aria-hidden', 'true');
  }

  public destroy() {
    this.button.removeEventListener('click', this.toggleBound);

  }
}
