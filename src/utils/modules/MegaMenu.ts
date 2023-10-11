

// TO DO : Reposition when small screen or responsive ?

export default class MegaMenu {
  private elMegaMenu: HTMLElement;

  private selMegaMenuItem: string = '[data-megaMenu-item]';
  private selMegaMenuTrigger: string = '[data-megaMenu-item-trigger]';
  private menuItems: NodeListOf<HTMLElement> | null = null;
  private buttonsTrigger: NodeListOf<HTMLElement> | null = null;
  private currentActive: HTMLElement | null = null;

  constructor(element: HTMLElement) {
    this.elMegaMenu = element;

    this.init();
    this.addEvents();
  }

  private init(): void {
    this.currentActive = null;
    this.menuItems = document.querySelectorAll(this.selMegaMenuItem);
    this.buttonsTrigger = this.elMegaMenu.querySelectorAll(this.selMegaMenuTrigger);
  }

  private addEvents(): void {
    this.buttonsTrigger?.forEach(button => {
      button.addEventListener('click', (e) => {
        this.buttonsTrigger?.forEach(item => {
          item.setAttribute('aria-expanded', 'false');
        })
        button.setAttribute('aria-expanded', 'true');
        this.open(button);
      })
    });
  }

  private open(elButton: HTMLElement): void {
    this.currentActive = elButton;

    this.menuItems?.forEach(menu => {
      menu?.classList.remove('is-active');
    })
    elButton.closest(this.selMegaMenuItem)?.classList.add('is-active');
  }

  private close(): void { }
}
