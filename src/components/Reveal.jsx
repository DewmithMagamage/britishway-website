import React, { useEffect, useRef, useState } from "react";

// Usage: <Reveal variant="fade-up" delay={i*100}>...</Reveal>
// Variants: fade-up, fade, zoom-in, slide-left, slide-right
const VARIANTS = {
  "fade-up": {
    from: "opacity-0 translate-y-6",
    to: "opacity-100 translate-y-0"
  },
  "fade": {
    from: "opacity-0",
    to: "opacity-100"
  },
  "zoom-in": {
    from: "opacity-0 scale-95",
    to: "opacity-100 scale-100"
  },
  "slide-left": {
    from: "opacity-0 -translate-x-6",
    to: "opacity-100 translate-x-0"
  },
  "slide-right": {
    from: "opacity-0 translate-x-6",
    to: "opacity-100 translate-x-0"
  }
};

const Reveal = ({ children, as: Tag = "div", className = "", variant = "fade-up", delay = 0, once = true, threshold = 0.15, duration = 500 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(element);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  const variantClasses = VARIANTS[variant] || VARIANTS["fade-up"];

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all ease-out duration-[${duration}ms] ${
        visible ? variantClasses.to : variantClasses.from
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
