import React, { useState, useRef } from "react";
import { delay, motion, useInView } from "framer-motion";

const ViewAnimate = () => {
  const ref = useRef(null);
  // State to control dot's vertical position (in px)
  const [dotTop, setDotTop] = useState(20); // initial top value in px matching your original dot position
  const [dotLeft, setdotLeft] = useState(85); // initial top value in px matching your original dot position
  const [image, setImage] = useState("/image.png");
  const [index, setactiveIndex] = useState(0);

  const isInView = useInView(ref, { once: false });

  // Ref for the container holding circle and image
  const circleContainerRef = useRef(null);

  // Refs for buttons to calculate position on click
  const buttonRefs = useRef([]);

  const fadeVariants = {
     visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: "easeOut", delay : 0.8 },
  },
  hidden: {
    opacity: 0,
    x: -50, // slide from left
    transition: { duration: 0.2, ease: "easeIn" },
  },
  };




  // Buttons data
  const buttons = [
    { title: "Lakeside Heaven", subtitle: "Waterfront bay, Goa" },
    { title: "Lakeside Heaven", subtitle: "Waterfront bay, Goa" },
    { title: "Lakeside Heaven", subtitle: "Waterfront bay, Goa" },
    { title: "Lakeside Heaven", subtitle: "Waterfront bay, Goa" },
    { title: "Lakeside Heaven", subtitle: "Waterfront bay, Goa" },
  ];

  const handleButtonClick = (index) => {
    const circleRect = circleContainerRef.current.getBoundingClientRect();
    const buttonRect = buttonRefs.current[index].getBoundingClientRect();

    // Calculate vertical center of button relative to circle container
    const newDotTop = buttonRect.top + buttonRect.height / 2 - circleRect.top;
    const newDoteRight = dotLeft + 3;

    if (index === 0) {
      setDotTop(20);
      setdotLeft(85)
      setImage("/image.png");
    }
    else if (index === 1) {
      setDotTop(95);
      setdotLeft(14)
      setImage("/villa2.jpg");

    }

    else if (index === 2) {
      setDotTop(180);
      setdotLeft(-10)
      setImage("/villa3.jpg");

    }

    else if (index === 3) {
      setDotTop(260);
      setdotLeft(2)
      setImage("/villa4.jpg");

    }

    else if (index === 4) {
      setDotTop(354);
      setdotLeft(70)
      setImage("/villa5.jpg");

    }

  };

  return (
    <motion.div
       ref={ref}
  variants={fadeVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}

      className="md:mx-8 mt-20 mb-20 h-auto">
      <div className="flex justify-center gap-8 md:gap-[20%] items-center flex-wrap lg:flex-nowrap w-full">
        {/* Image & Circle Container */}
        <div
          ref={circleContainerRef}
          className="relative flex items-center justify-center"
          style={{ minHeight: "460px" }}
        >
          {/* Yellow Circle Button (above image) */}
          <div className="bg-yellow-500 rounded-full w-44 h-44 flex items-center hidden justify-center shadow-lg z-20 md:flex absolute top-1/2 left-[82%] -translate-y-1/2">
            <h1 className="font-bold text-center text-sm">View All Building</h1>
          </div>

          {/* Image */}
          <div className="relativ">
            <img
              src={image}
              className="w-[400px] p-1 max-h-[600px] rounded-lg relative z-10"
              alt="building"
            />
          </div>

          {/* Circle - Positioned Overlapping */}
          <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center">
              {/* Background Circles (behind image) */}
              <div className="absolute w-48 h-48 border-4 border-[#D75D87] rounded-full z-0"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "linear"
                }}
                className="absolute w-[300px] h-[300px] border-4 border-dashed border-[#D75D87] rounded-full z-0"></motion.div>
              <div className="absolute w-[410px] h-[410px] border-4 border-[#D75D87] rounded-full z-0">
                {/* Small Yellow Dot */}
                <div
                  className="bg-yellow-500 w-4 h-4 rounded-full absolute  z-10 transition-all duration-500"
                  style={{ top: dotTop, right: dotLeft }}

                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="right_col flex flex-col gap-6 z-10">
          {buttons.map((btn, i) => (
            <button
              key={i}
              ref={(el) => (buttonRefs.current[i] = el)}
              onClick={() => {
                handleButtonClick(i)
                setactiveIndex(i)
              }
              }
              className={`text-left border border-1 border-[#D75D87] ${index === i ? 'bg-[#8C2841] border text-black border-4 border-[#D75D87] transform hover:scale-[1.1] rotate-[5deg] hover:text-white transition-all' : null}  hover:bg-[#8C2841] hover:transform hover:scale-[1.1] hover:rotate-[5deg] hover:text-white transition-all px-4 py-2 rounded-md  bg-[#fff] relative ${i === 1
                ? "left-[30px]"
                : i === 2
                  ? "left-[60px]"
                  : i === 3
                    ? "left-[30px]"
                    : ""
                } ${index === i ? '' : null}`}
              style={{ border: '' }}
            >
              <p className={`${index === i ? 'text-[#D75D87] font-bold' : null}`}>{btn.title}</p>
              <p className={`${index === i ? 'text-black' : null}`}>{btn.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ViewAnimate;
