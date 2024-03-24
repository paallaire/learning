import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Render a marquee of text boxes.
 *
 * @param {Array} words - an array of words to display in the marquee
 * @param {Boolean} reversed - indicates whether the marquee animation is reversed
 * @return {JSX.Element} the JSX for rendering the marquee of text boxes
 */
export default function MarqueeTextOnScroll({
  words = [
    "#1 Lorem ipsum dolor",
    "Nobis eligendi",
    "#2 Lorem ipsum dolor",
    "Nobis eligendi",
  ] as string[],
  reversed = false
}) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  
  const container = useRef(null);
  const line = useRef(null);
  const texts = useRef([]);

  useGSAP(
    () => {

      gsap.set(line.current, {
        opacity: 0,
        xPercent: reversed ? 0 : -100, // TODO find formula
      })

      gsap.to(line.current, {
        opacity: 1,
        xPercent: reversed ? -50 : 5, // TODO find formula
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',  // [trigger] [scroller] positions
          end: 'top top',
          scrub: 0.5,
        markers: {
          startColor: "green",
          fontSize: "24px",
          fontWeight: "bold",
          indent: 100,
        },
        }
      })


    },
    { scope: container },
  ); 

  return (
    <div
      ref={container}
      className="text-marquee"
    >
      <div className="text-marquee__line" ref={line}>
        {words.map((word, index) => (
          <span
            key={index}
            ref={(el) => (texts.current[index] = el)}
            className="text-marquee__text"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );

}
