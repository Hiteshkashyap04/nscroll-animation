"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "58%",
    text: "Increase in pick up point use",
    position: "stat-one",
    color: "pink",
  },
  {
    value: "23%",
    text: "Decreased in customer phone calls",
    position: "stat-two",
    color: "blue",
  },
  {
    value: "27%",
    text: "Increase in pick up point use",
    position: "stat-three",
    color: "yellow",
  },
  {
    value: "40%",
    text: "Decreased in customer phone calls",
    position: "stat-four",
    color: "purple",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carRef = useRef<HTMLImageElement>(null);

  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const car = carRef.current;

    if (!hero || !title || !car) return;

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
       * ======================================================
       * INITIAL STATES
       * ======================================================
       */

      gsap.set(title, {
        opacity: 0,
        y: 30,
      });

      gsap.set(car, {
        opacity: 1,
        x: 0,
        yPercent: -50,
        scale: 0.82,
      });

      gsap.set(statsRef.current, {
        opacity: 0,
        y: 28,
      });

      /*
       * ======================================================
       * HEADING — PAGE LOAD ANIMATION
       * ======================================================
       *
       * The assignment specifically asks for the heading
       * to appear smoothly when the page loads.
       *
       * It is NOT controlled by scrolling.
       */

      if (!reduceMotion) {
        gsap.to(title, {
          opacity: 1,
          y: 0,
          duration: 1.25,
          ease: "power3.out",
        });
      } else {
        gsap.set(title, {
          opacity: 1,
          y: 0,
        });

        gsap.set(statsRef.current, {
          opacity: 1,
          y: 0,
        });
      }

      /*
       * ======================================================
       * SCROLL-DRIVEN ANIMATION
       * ======================================================
       *
       * The car moves according to scroll progress.
       * The statistics reveal at different stages of the
       * car's journey.
       */

      if (!reduceMotion) {
        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        /*
         * ----------------------------------------------------
         * CAR MOVEMENT
         * ----------------------------------------------------
         *
         * The car starts on the left and travels horizontally
         * across the middle of the statistics.
         */

        scrollTimeline.to(
          car,
          {
            x: () => window.innerWidth * 0.95,
            scale: 1,
            ease: "none",
            duration: 1,
          },
          0
        );

        /*
         * ----------------------------------------------------
         * STAT 1
         * ----------------------------------------------------
         */

        scrollTimeline.to(
          statsRef.current[0],
          {
            opacity: 1,
            y: 0,
            duration: 0.12,
            ease: "power2.out",
          },
          0.16
        );

        /*
         * ----------------------------------------------------
         * STAT 2
         * ----------------------------------------------------
         */

        scrollTimeline.to(
          statsRef.current[1],
          {
            opacity: 1,
            y: 0,
            duration: 0.12,
            ease: "power2.out",
          },
          0.38
        );

        /*
         * ----------------------------------------------------
         * STAT 3
         * ----------------------------------------------------
         */

        scrollTimeline.to(
          statsRef.current[2],
          {
            opacity: 1,
            y: 0,
            duration: 0.12,
            ease: "power2.out",
          },
          0.60
        );

        /*
         * ----------------------------------------------------
         * STAT 4
         * ----------------------------------------------------
         */

        scrollTimeline.to(
          statsRef.current[3],
          {
            opacity: 1,
            y: 0,
            duration: 0.12,
            ease: "power2.out",
          },
          0.80
        );
      }
    }, hero);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <main>
      <section
        ref={heroRef}
        className="hero"
      >
        <div className="hero-stage">

          {/* =================================================
              MAIN HEADING
              ================================================= */}

          <h1
            ref={titleRef}
            className="hero-title"
          >
            W E L C O M E&nbsp;&nbsp; I T Z F I Z Z
          </h1>


          {/* =================================================
              SOFT BACKGROUND GLOWS
              ================================================= */}

          <div className="glow glow-pink" />
          <div className="glow glow-blue" />
          <div className="glow glow-yellow" />
          <div className="glow glow-purple" />


          {/* =================================================
              CAR + MOTION TRAIL
              ================================================= */}

          <div className="car-wrapper">

            <div className="car-trail trail-one" />
            <div className="car-trail trail-two" />
            <div className="car-trail trail-three" />

            <img
              ref={carRef}
              src="/car.png"
              alt="McLaren 720S"
              className="car"
              draggable={false}
            />

          </div>


          {/* =================================================
              STATISTICS
              ================================================= */}

          {stats.map((stat, index) => (
            <div
              key={stat.value}
              ref={(element) => {
                statsRef.current[index] = element;
              }}
              className={`stat ${stat.position} stat-${stat.color}`}
            >
              <div className="stat-value">
                {stat.value}
              </div>

              <p className="stat-text">
                {stat.text}
              </p>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
