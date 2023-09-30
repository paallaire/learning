export default class Marquee {
  private elMarquee: HTMLElement;
  private nbLoopDuplicate: number;

  constructor(elMarquee: HTMLElement) {
    this.elMarquee = elMarquee;
    this.nbLoopDuplicate = 2;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.addAnimation();
    }
  }

  private addAnimation(): void {
    const marqueeInner = this.elMarquee.querySelector(".marquee__inner") as HTMLElement;
    const marqueeContent = Array.from(marqueeInner.children) as HTMLElement[];

    this.elMarquee.setAttribute("data-animated", "true");

    if(this.elMarquee.hasAttribute('data-duplicate')) {
      this.nbLoopDuplicate = parseInt(this.elMarquee.getAttribute('data-duplicate') as string);
    }

    for (let index = 0; index < this.nbLoopDuplicate; index++) {
      marqueeContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        marqueeInner.appendChild(duplicatedItem);
      });
    }
  }
}
