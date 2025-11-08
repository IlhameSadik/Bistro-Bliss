import React, { useEffect, useRef, useState } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";

const Review = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);

    if (isInView) controls.start("visible");
    return () => window.removeEventListener("resize", handleResize);
  }, [isInView, controls]);

  return (
    <div id="review" className="overflow-x-hidden max-w-screen font-poppins bg-white">
      <section className="px-5 sm:px-10 py-12 sm:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center gap-8">
            {/* ---- Titre ---- */}
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl text-center xl:text-left space-y-4 bg-blue-50 p-6 rounded shadow-md"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                What our customers have to say
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Here are some reviews from our customers and their experience
                with our services.
              </p>
            </motion.div>

            {/* ---- Avis ---- */}
            <div className="grid gap-6 md:grid-cols-2 xl:flex-1">
              {[
                {
                  name: "Sam Smith",
                  text: "I recently had the opportunity to experience the dining service. The menu offered an impressive variety, catering to a wide range of tastes. The freshness of the ingredients shone through in each dish I ordered.",
                  img: "https://source.unsplash.com/50x50/?portrait?1",
                },
                {
                  name: "Sophia Davis",
                  text: "The service was prompt and efficient, with a friendly and attentive staff. The server's recommendations were thoughtful and portion sizes generous.",
                  img: "https://source.unsplash.com/50x50/?portrait?2",
                },
                {
                  name: "Ethan Williams",
                  text: "The on-site offerings were exceptional, with great attention to detail in presentation and the use of high-quality ingredients.",
                  img: "https://source.unsplash.com/50x50/?portrait?3",
                },
                {
                  name: "Olivia Johnson",
                  text: "The team was flexible and adaptable, ensuring an outstanding customer experience. A highly professional and reliable service overall.",
                  img: "https://source.unsplash.com/50x50/?portrait?4",
                },
              ].map((review, i) => (
                <motion.div
                  key={i}
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
                  className={`p-6 rounded shadow-md ${
                    i % 2 === 0 ? "bg-blue-100/60" : "bg-blue-200/40"
                  }`}
                >
                  <p className="text-gray-800 text-sm sm:text-base mb-4 leading-relaxed">
                    {review.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                     
                      <p className="text-base font-semibold">{review.name}</p>
                    </div>
                    <MdVerified
                      size={isMobile ? 28 : 36}
                      className="text-green-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-[70%] mx-auto h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </div>
  );
};

export default Review;
