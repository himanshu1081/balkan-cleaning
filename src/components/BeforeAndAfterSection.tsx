"use client";

import { motion, type Variants } from "framer-motion";

const comparisons = [
  {
    title: "Kitchen Deep Cleaning",
    before: "/Before/Before1.png",
    after: "/After/After1.png",
  },
  {
    title: "Bathroom Transformation",
    before: "/Before/Before2.png",
    after: "/After/After2.png",
  },
  {
    title: "Living Room Refresh",
    before: "/Before/Before3.png",
    after: "/After/After3.png",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const BeforeAfterSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 space-y-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="text-4xl font-bold mt-3 mb-4">
            Before & After
          </h2>
          <p className="text-muted-foreground text-lg">
            Same space. Totally different energy.
          </p>
        </motion.div>

        {comparisons.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-center">
              {item.title}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={item.before}
                  alt="Before cleaning"
                  className="w-full h-[320px] object-cover hover:scale-110 transition-transform duration-500 ease-out"
                />
                <span className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  Before
                </span>
              </motion.div>

              <motion.div
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={item.after}
                  alt="After cleaning"
                  className="w-full h-[320px] object-cover hover:scale-110 transition-transform duration-500 ease-out"
                />
                <span className="absolute bottom-4 left-4 bg-accent text-white text-sm px-3 py-1 rounded-full">
                  After
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterSection;
