import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

console.log('SectionProgressionImages')

const sectionExpertises = [
  {
    title: "SOLUTIONS SUR MESURE",
    content:
      "Réinventer la roue ne fait pas partie de notre approche. Attacher la clientèle avec des programmes dont nous seuls avons le secret non plus. C’est pourquoi nous privilégions toujours des outils Open Source, éprouvés pour bâtir l’écosystème de nos solutions.",
    id: 1,
  },
  {
    title: "COMPATIBLES ET ACCESSIBLES",
    content:
      "Exploiter toute la flexibilité des nouvelles technologies du web en respectant les normes d’accessibilités W3C constitue une règle incontournable pour nous. Optimisées pour les nouvelles plateformes mobiles, nos solutions s’adaptent aussi à une gamme étendue de navigateurs plus anciens.",
    id: 2,
  },
  {
    title: "TOUJOURS MULTIPLATEFORME",
    content:
      "L’effervescence de nouvelles plateformes est indéniable. Par conséquent, tous nos projets sont optimisés pour exploiter le plein potentiel des différents écrans et systèmes d’exploitation des téléphones intelligents, tablettes et ordinateurs traditionnels.",
    id: 3,
  },
];

export function SectionProgressionImages() {
  const main = useRef();
  const containerContent = useRef();
  const containerImages = useRef();
  const sectionImages = useRef([]);

  useLayoutEffect(() => {
    console.log("### useLayoutEffect");

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: main.current,
        start: "top top",
        end: "bottom bottom",
        pin: containerImages.current,
        markers: false,
        onUpdate: (e) => {
          console.log("main progress", e.progress);
        },
      });

      const sections = main.current.querySelectorAll("section");

      sections.forEach((section, index) => {
        const sectionImage = sectionImages.current[index];

        console.log("section:", section);
        console.log("sectionImage:", sectionImage);

        gsap.to(sectionImage, {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
            onUpdate: (e) => {

              if (index < (sections.length - 1)) {
                sectionImage.style.clipPath = `inset(0px 0px ${e.progress*100}%)`;
                console.log(`section # ${index} progress`, e.progress);
              }


            },
          },
        });
      });
    }, main);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <div ref={main} className="bg-black text-white grid grid-cols-2 gap-7 overflow-x-hidden">
        <div ref={containerContent}>
          {sectionExpertises.map((section, index) => {

            if (index === 0) {
              return (
                <section key={section.id} className="h-screen bg-blue-500">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </section>
              );
            }

            if (index === 2) {
              return (
                <section key={section.id} className="h-screen bg-yellow-500">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </section>
              );
            }

            return (
              <section key={section.id} className="h-screen bg-red-500">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            );
          })}
        </div>
        <div className="h-screen flex justify-center items-center bg-red-300" ref={containerImages}>
          <div className="overflow-hidden rounded-2xl relative w-[500px] h-[500px] aspect-square bg-lime-600">
            {sectionExpertises.map((section, index) => (
              <div
                ref={(el) => (sectionImages.current[index] = el)}
                key={section.id}
                className="w-[500px] h-[500px] aspect-square absolute top-0 left-0 bg-cover"
                style={{ zIndex: sectionExpertises.length - index, backgroundImage: `url("/learning/images/placeholder/seciton-${index + 1}.jpg")` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
