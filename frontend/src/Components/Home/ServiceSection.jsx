import { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaBolt,
  FaCode,
} from "react-icons/fa";
import "../../App.css";

const services = [
  {
    title: "HTML Mastery",
    icon: <FaHtml5 />,
    description:
      "Learn the structure of the web by mastering HTML5 elements, attributes, forms, semantic tags, and more.",
  },
  {
    title: "CSS Styling",
    icon: <FaCss3Alt />,
    description:
      "Style your webpages beautifully with modern CSS techniques including Flexbox, Grid, transitions, and responsive design.",
  },
  {
    title: "JavaScript Essentials",
    icon: <FaJsSquare />,
    description:
      "Master JavaScript fundamentals, DOM manipulation, ES6+, and build interactive web features with confidence.",
  },
  {
    title: "Node.js & Backend",
    icon: <FaNodeJs />,
    description:
      "Learn to build scalable backend services using Node.js, Express, and RESTful API development.",
  },
  {
    title: "MongoDB Database",
    icon: <FaDatabase />,
    description:
      "Understand NoSQL databases, perform CRUD operations, and build data models with MongoDB.",
  },
  {
    title: "Tailwind CSS",
    icon: <FaBolt />,
    description:
      "Design responsive UIs efficiently using Tailwind CSS utility classes and component-based styling.",
  },
  {
    title: "Code Challenges",
    icon: <FaCode />,
    description:
      "Sharpen your skills through hands-on coding challenges and real-world mini projects in each tech area.",
  },
];

const InfiniteCarousel = () => {
  const scrollRef = useRef(null);
  const animationFrameId = useRef(null);
  const widthRef = useRef(0);
  const isScrollingRef = useRef(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const children = el.children;
    const half = children.length / 2;

    // Calculate width of one set (sum of the first half items widths)
    let width = 0;
    for (let i = 0; i < half; i++) {
      width += children[i].offsetWidth;
    }
    widthRef.current = width;

    const scroll = () => {
      if (!isScrollingRef.current || !el) return;

      el.scrollLeft += 1.5;

      if (el.scrollLeft >= widthRef.current) {
        // reset scrollLeft to 0 when reach full width of one set
        el.scrollLeft = 0;
      }

      animationFrameId.current = requestAnimationFrame(scroll);
    };

    animationFrameId.current = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      isScrollingRef.current = false;
      cancelAnimationFrame(animationFrameId.current);
    };

    const handleMouseLeave = () => {
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        animationFrameId.current = requestAnimationFrame(scroll);
      }
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-3 bg-gradient-to-r from-gray-900 to-violet-900">
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto no-scrollbar px-4"
        style={{ scrollBehavior: "auto", scrollSnapType: "none" }}
      >
        {[...services, ...services].map((service, index) => (
          <div
            key={`${service.title}-${index}`}
            className="w-72 flex-shrink-0 cursor-pointer bg-gray-900 p-4 mx-2 my-2 rounded-xl shadow-md transform transition-all duration-100 hover:scale-105"
          >
            <div className="text-3xl text-sky-200 mb-2 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-200 text-center">
              {service.title}
            </h3>
            <p className="text-sm text-sky-200 text-center mt-2 break-words">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfiniteCarousel;
