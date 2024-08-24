import clsx from "clsx";
import {
  useAnimate,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";
import { ReactNode, CSSProperties, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  style?: CSSProperties;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  style,
}: ModalProps) {
  const [ref, animate] = useAnimate();

  const mouseX = useMotionValue(150);
  const mouseY = useMotionValue(150);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(springY, [0, 300], [5, -5]);
  const rotateY = useTransform(springX, [0, 300], [-5, 5]);

  const opacity = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  useEffect(() => {
    if (isOpen) {
      animate(
        ref.current,
        { y: 0, opacity: 100, display: "block" },
        { ease: "easeOut" }
      );
    } else {
      animate(
        ref.current,
        { y: 50, opacity: 0, display: "none" },
        { ease: "easeInOut" }
      );
    }
  }, [isOpen, animate, ref]);


  const handleMouseEnter = () => {
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
    springX.set(150);
    springY.set(150);
  };

  const background = useTransform(
    [springX, springY],
    ([latestX, latestY]) => {
      const gradientX = ref.current?.offsetWidth! - Number(latestX);
      const gradientY = ref.current?.offsetHeight! - Number(latestY);
      return `radial-gradient(circle at ${gradientX}px ${gradientY}px, rgba(152, 156, 231, 0.2), transparent 80%)`
    }
  );

  return (
    <motion.div
      className="absolute z-50 backdrop-blur-md"
      style={{ ...style, rotateX, rotateY, transformPerspective: 1800 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
            <motion.div
        className="absolute inset-0"
        style={{
          background,
          opacity
        }}
      />
      <div
        className={clsx(
          "rounded-xl border-neutral-500 transition-all duration-300 overflow-y-scroll scrollbar-hide p-4",
          "bg-gradient-to-tr from-blue-900/40 to-black/60 border "
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
