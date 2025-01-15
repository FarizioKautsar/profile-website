import { useGesture } from "@use-gesture/react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const PictureModal = ({
  onClose,
  imageUrl,
  initialPosition,
}: {
  onClose: () => void;
  imageUrl: string;
  initialPosition: { x: number; y: number; width: number; height: number };
}) => {
  const scale = useMotionValue(1); // Default scale
  const translateX = useMotionValue(0); // Horizontal translation
  const translateY = useMotionValue(0); // Vertical translation

  // Gesture bindings for pinch-to-zoom and drag
  const bind = useGesture(
    {
      onPinch: ({ offset: [pinchScale] }) => {
        scale.set(Math.max(1, Math.min(3, pinchScale))); // Limit zoom levels between 1 and 3
      },
      onDrag: ({ offset: [dx, dy] }) => {
        translateX.set(dx);
        translateY.set(dy);
      },
    },
    {
      drag: { from: () => [translateX.get(), translateY.get()] }, // Start drag from current values
      pinch: { scaleBounds: { min: 1, max: 3 } }, // Limit pinch scaling
    }
  );

  const [isClosing, setIsClosing] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    // scale.set(1);
    // translateX.set(0);
    // translateY.set(0);
    onClose();
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent default scrolling
    const delta = event.deltaY;
    const currentScale = scale.get();
    const newScale = currentScale + delta * -0.01; // Adjust zoom sensitivity
    scale.set(Math.max(1, Math.min(3, newScale))); // Limit zoom between 1 and 3
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-30"
      onClick={handleClose}
      style={{
        touchAction: "none",
      }}
      onWheel={handleWheel}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      {...bind() as any}
    >
      <motion.div
        className="relative"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        initial={{
          x:
            initialPosition.x -
            window.innerWidth / 2 +
            initialPosition.width / 2,
          y:
            initialPosition.y -
            window.innerHeight / 2 +
            initialPosition.height / 2,
          width: initialPosition.width,
          height: initialPosition.height,
        }}
        animate={{
          x: 0,
          y: 0,
          width: isMobile ? "100vw" : "70vw",
          height: "auto",
        }}
        exit={{
          x:
            initialPosition.x -
            window.innerWidth / 2 +
            initialPosition.width / 2,
          y:
            initialPosition.y -
            window.innerHeight / 2 +
            initialPosition.height / 2,
          scale: 1,
          width: initialPosition.width,
          height: initialPosition.height,
        }}
        style={{
          scale,
          x: translateX,
          y: translateY,
          transformOrigin: "center center",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Image
          src={imageUrl}
          alt="Expanded view"
          style={{
            width: "100%",
          }}
          objectFit="contain"
          className="rounded-md"
        />
      </motion.div>
    </motion.div>
  );
};

export default PictureModal;
