import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "@utils/gsap/loop";

/**
 * Render a marquee of text boxes.
 *
 * @param {Array} words - an array of words to display in the marquee
 * @param {Boolean} reversed - indicates whether the marquee animation is reversed
 * @return {JSX.Element} the JSX for rendering the marquee of text boxes
 */
export default function MarqueeText({
  words = [
    "Lorem ipsum dolor",
    "Nobis eligendi",
    "Veritatis",
    "Cnsectetur adipisicing ",
    "Nesciunt explicabo",
  ] as string[],
  reversed = false
}) {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);
  const texts = useRef([]);

  useGSAP(
    () => {
       horizontalLoop(texts.current, {
        repeat: -1,
        speed: 1,
        reversed: reversed,
        paddingRight: parseFloat(
          gsap.getProperty(texts.current[0], "marginRight", "px").toString(),
        ),
      });
    },
    { scope: container },
  ); 

  return (
    <div
      ref={container}
      className="text-marquee"
    >
      <div className="text-marquee__line">
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

  

