import { gsap } from "gsap";

export default class SlideOver {
  private elslideOver: HTMLElement;
  private elOveray: HTMLElement | null;
  private elContent: HTMLElement | null;
  private elClose: HTMLElement | null;
  private buttonsTrigger: NodeListOf<HTMLElement> | null;
  private isActive: boolean;

  constructor(element: HTMLElement) {
    this.elslideOver = element;

    this.init();
    this.addEvents();
  }

  private init(): void {
    this.isActive = false;
    this.elOveray = this.elslideOver.querySelector('[data-slideOver-overlay]');
    this.elContent = this.elslideOver.querySelector('[data-slideOver-content]');
    this.elClose = this.elslideOver.querySelector('[data-slideOver-close]');
    this.buttonsTrigger = document.querySelectorAll('[data-slideOver-target="slideOver-base"]')

    gsap.set(this.elContent, { xPercent: 100 });
  }

  private addEvents(): void {
    this.elClose?.addEventListener('click', (e) => {
      this.close();
    })

    this.buttonsTrigger?.forEach(button => {
      button.addEventListener('click', (e) => {
        this.open();
      })
    });


    this.elslideOver.addEventListener('click', (e) => {
      const targetElement = (e.target as HTMLElement);

      if (targetElement !== this.elContent && !this.elContent?.contains(targetElement)) {
        this.close();
      }
    });

  }

  private open(): void {
    this.elslideOver.style.display = 'block';

    gsap.to(this.elContent, {
      xPercent: 0,
      duration: 0.7,
      ease: "Power1.easeInOut",
      onComplete: () => {
        this.isActive = true;
      }
    })

    gsap.to(this.elOveray, {
      opacity: 0.75,
      duration: 0.5,
      ease: "Power1.easeInOut"
    })

  }

  private close(): void {
    gsap.to(this.elContent, {
      xPercent: 100,
      duration: 0.7,
      ease: "Power1.easeInOut",
      onComplete: () => {
        this.isActive = false;
        this.elslideOver.style.display = 'none';
      }
    })

    gsap.to(this.elOveray, {
      opacity: 0,
      duration: 0.5,
      ease: "Power1.easeInOut"
    })

  }

}
