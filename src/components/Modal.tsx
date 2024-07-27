import clsx from "clsx";
import { useAnimate, useTransform } from "framer-motion";
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

  useEffect(() => {
    if (isOpen) {
      animate(
        "div",
        { y: 0, opacity: 100, display: "block" },
        { damping: 0, ease: 'easeIn', bounce: 0 }
      );
    } else {
      animate("div", { y: 50, opacity: 0, display: "none" });
    }
  }, [isOpen, animate]);

  return (
    <div className="absolute z-50" style={style} ref={ref}>
      <div
        className={clsx(
          "rounded-xl border-neutral-500 transition-all duration-300 overflow-y-scroll scrollbar-hide p-4",
          "bg-gradient-to-tr from-neutral-800 to-neutral-700 border"
        )}
      >
        {children}
      </div>
    </div>
  );
}
