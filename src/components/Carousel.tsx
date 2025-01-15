import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGesture } from "@use-gesture/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ imageUrls }: { imageUrls: string[] }) => {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  // Handle zooming with gestures (pinch and wheel)
  const bind = useGesture(
    {
      onPinch: ({ offset: [d] }) => {
        const newScale = Math.min(Math.max(d / 100, 1), 3); // Pinch adjusts scale
        setScale(newScale);
      },
      onWheel: ({ delta: [, dy], ctrlKey }) => {
        if (ctrlKey) {
          const newScale = Math.min(Math.max(scale - dy * 0.01, 1), 3); // Scroll adjusts scale
          setScale(newScale);
        }
      },
      onDrag: ({ delta: [dx, dy] }) => {
        if (scale > 1) {
          setTranslate({
            x: translate.x + dx,
            y: translate.y + dy,
          });
        }
      },
    },
    {
      drag: { filterTaps: true },
      pinch: { scaleBounds: { min: 1, max: 3 } },
    }
  );

  // Separate gesture handlers for motion.div
  const gestureHandlers = bind() as React.HTMLAttributes<HTMLDivElement>;

  return (
    <div>
      <Swiper
        navigation
        // pagination={{ clickable: true }}
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              {...gestureHandlers} // Attach gesture handlers here
              className="image-container"
              style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                touchAction: "none",
              }}
            >
              <motion.div
                drag={scale > 1 ? true : false}
                dragConstraints={{
                  left: -300 * (scale - 1),
                  right: 300 * (scale - 1),
                  top: -300 * (scale - 1),
                  bottom: 300 * (scale - 1),
                }}
                style={{
                  scale,
                  x: translate.x,
                  y: translate.y,
                }}
              >
                <Image
                  src={url}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={600}
                  draggable={false}
                  style={{
                    userSelect: "none",
                  }}
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .carousel {
          width: 100%;
          height: 100vh;
          background: #000;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
