import { gsap } from "gsap";

export default class Marquee {
  private nbDuplicate: number = 6;
  private elMarquee: HTMLElement;
  private elMarqueeWrapper: HTMLElement;
  private firstItem: HTMLElement;
  private elMarqueeItems: NodeListOf<HTMLElement>;
  private distance: number;
  private rate: number = 200;
  private time: number;
  private tween: gsap.core.Tween;

  private direction: string = 'left';

  constructor(elMarqueeDom: HTMLElement) {
    this.elMarquee = elMarqueeDom;
    this.elMarqueeWrapper = this.elMarquee.querySelector(".marquee__wrapper") as HTMLElement;
    this.firstItem = this.elMarquee.querySelector(".marquee__item") as HTMLElement;

    if(this.elMarquee.hasAttribute('data-marquee-duplicate')) {
      this.nbDuplicate = parseInt(this.elMarquee.getAttribute('data-marquee-duplicate') as string) ?? this.nbDuplicate;
    }
   
    for (let index = 1; index < this.nbDuplicate; index++) {
      const node = this.firstItem.cloneNode(true) as HTMLElement;
      this.elMarqueeWrapper.appendChild(node);
    }

    this.elMarqueeItems = this.elMarquee.querySelectorAll(".marquee__item") as NodeListOf<HTMLElement>;
    this.direction = this.elMarquee.getAttribute('data-marquee-direction') ?? this.direction;

    if(this.elMarquee.hasAttribute('data-marquee-rate')) {
      this.rate = parseInt(this.elMarquee.getAttribute('data-marquee-rate') as string) ?? this.rate;
    }

    this.distance = this.elMarqueeWrapper.clientWidth;
    this.time = this.distance / this.rate;

    gsap.set(this.elMarqueeWrapper, {
      xPercent: -50,
    });

    this.tween = gsap
      .to(this.elMarqueeItems, {
        xPercent: this.direction === 'right' ? 100 : -100,
        duration: 10 ,
        ease: "linear",
        repeat: -1,
      })
      .totalProgress(0.5);
  }
}



