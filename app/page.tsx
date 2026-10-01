"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "58%",
    text: "Increase in pick up point use",
    className: "stat-one stat-pink",
  },
  {
    value: "23%",
    text: "Decreased in customer phone calls",
    className: "stat-two stat-blue",
  },
  {
    value: "27%",
    text: "Increase in pick up point use",
    className: "stat-three stat-yellow",
  },
  {
    value: "40%",
    text: "Decreased in customer phone calls",
    className: "stat-four stat-purple",
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

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Initial states
      gsap.set(title, {
        opacity: 0,
        y: 30,
      });

      gsap.set(car, {
        opacity: 1,
        x: 0,
        scale: 0.82,
      });

      gsap.set(statsRef.current, {
        opacity: 0,
        y: 24,
      });

      // Heading animation on page load
      if (reduceMotion) {
        gsap.set(title, {
          opacity: 1,
          y: 0,
        });

        gsap.set(statsRef.current, {
          opacity: 1,
          y: 0,
        });

        return;
      }

      gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Scroll-driven animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // Car moves from left to right
      timeline.to(
        car,
        {
          x: () => window.innerWidth * 0.95,
          scale: 1,
          ease: "none",
          duration: 1,
        },
        0
      );

      // Statistics appear progressively
      timeline.to(
        statsRef.current[0],
        {
          opacity: 1,
          y: 0,
          duration: 0.12,
          ease: "power2.out",
        },
        0.16
      );

      timeline.to(
        statsRef.current[1],
        {
          opacity: 1,
          y: 0,
          duration: 0.12,
          ease: "power2.out",
        },
        0.38
      );

      timeline.to(
        statsRef.current[2],
        {
          opacity: 1,
          y: 0,
          duration: 0.12,
          ease: "power2.out",
        },
        0.60
      );

      timeline.to(
        statsRef.current[3],
        {
          opacity: 1,
          y: 0,
          duration: 0.12,
          ease: "power2.out",
        },
        0.80
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  const carSrc =
    process.env.NODE_ENV === "production"
      ? "/nscroll-animation/car.png"
      : "/car.png";

  return (
    <main>
      <section ref={heroRef} className="hero">
        <div className="hero-stage">
          {/* Heading */}
          <h1 ref={titleRef} className="hero-title">
            W E L C O M E&nbsp;&nbsp; I T Z F I Z Z
          </h1>

          {/* Background glow */}
          <div className="glow glow-pink" />
          <div className="glow glow-blue" />
          <div className="glow glow-yellow" />
          <div className="glow glow-purple" />

          {/* Car */}
          <div className="car-wrapper">
            <div className="car-trail trail-one" />
            <div className="car-trail trail-two" />
            <div className="car-trail trail-three" />

            <img
              ref={carRef}
              src={carSrc}
              alt="McLaren 720S"
              className="car"
              draggable={false}
            />
          </div>

          {/* Statistics */}
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              ref={(element) => {
                statsRef.current[index] = element;
              }}
              className={`stat ${stat.className}`}
            >
              <div className="stat-value">{stat.value}</div>

              <p className="stat-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}