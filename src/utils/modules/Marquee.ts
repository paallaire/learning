import { gsap } from "gsap";

export default class Marquee {
  private nbItems: number = 10;
  private elMarquee: HTMLElement;
  private elMarqueeWrapper: HTMLElement;
  private firstItem: HTMLElement;
  private elMarqueeItems: NodeListOf<HTMLElement>;
  private distance: number;
  private rate: number = 200;
  private time: number;
  private tween: gsap.core.Tween;

  private direction: string = 'left';
  private duration: number = 10;

  constructor(elMarqueeDom: HTMLElement) {
    this.elMarquee = elMarqueeDom;
    this.elMarqueeWrapper = this.elMarquee.querySelector(".marquee__wrapper") as HTMLElement;
    this.firstItem = this.elMarquee.querySelector(".marquee__item") as HTMLElement;

    for (let index = 1; index < this.nbItems; index++) {
      const node = this.firstItem.cloneNode(true) as HTMLElement;
      this.elMarqueeWrapper.appendChild(node);
    }

    this.elMarqueeItems = this.elMarquee.querySelectorAll(".marquee__item") as NodeListOf<HTMLElement>;
    this.direction = this.elMarquee.getAttribute('data-marquee-direction') ?? this.direction;
    this.rate = parseInt(this.elMarquee.getAttribute('data-marquee-rate') as string) ?? this.rate;

    this.distance = this.elMarqueeWrapper.clientWidth;
    this.time = this.distance / this.rate;

    gsap.set(this.elMarqueeWrapper, {
      xPercent: -50,
    });

    this.tween = gsap
      .to(this.elMarqueeWrapper, {
        x: this.direction === 'right' ? this.distance : this.distance * -1,
        duration: this.time,
        ease: "linear",
        repeat: -1,
      })

    // this.tween = gsap
    //   .to(this.elMarqueeItems, {
    //     xPercent: this.direction === 'right' ? 100 : -100,
    //     duration: this.duration ,
    //     ease: "linear",
    //     repeat: -1,
    //   })
    //   .totalProgress(0.5);
  }
}


