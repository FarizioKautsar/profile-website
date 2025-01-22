// PackageModal.tsx
import { ProjectPackage } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCalendar, FaInfoCircle, FaTag } from "react-icons/fa";

const PackageModal = ({
  onClose,
  pack,
  cardRef,
}: {
  onClose: () => void;
  pack: ProjectPackage;
  cardRef: React.RefObject<HTMLDivElement>;
}) => {
  // Modal size
  const [modalSize, setModalSize] = useState<{ width: number; height: number }>(
    {
      width: window.innerWidth * 0.9,
      height: window.innerHeight * 0.5,
    }
  );

  useEffect(() => {
    const handleResize = () => {
      setModalSize({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.5,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardRect = cardRef.current?.getBoundingClientRect();

  return (
    <motion.div
      className="
        fixed inset-0 flex items-center justify-center
        backdrop-blur-md bg-opacity-50 z-50 h-dvh w-screen
      "
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="
          backdrop-blur-md border border-neutral-300 
          bg-opacity-30 bg-black rounded-2xl p-8 z-40
          overflow-hidden overflow-y-scroll
          max-w-lg h-fit
        "
        onClick={(e) => e.stopPropagation()}
        initial={{
          x: cardRect
            ? cardRect.left - window.innerWidth / 2 + cardRect.width / 2
            : 0,
          y: cardRect
            ? cardRect.top - window.innerHeight / 2 + cardRect.height / 2
            : 0,
          width: cardRect ? cardRect.width : 0,
          height: cardRect ? cardRect.height : 0,
        }}
        animate={{
          x: 0,
          y: 0,
          width: modalSize.width,
          height: modalSize.height,
        }}
        exit={{
          x: cardRect
            ? cardRect.left - window.innerWidth / 2 + cardRect.width / 2
            : 0,
          y: cardRect
            ? cardRect.top - window.innerHeight / 2 + cardRect.height / 2
            : 0,
          width: cardRect ? cardRect.width : 0,
          height: cardRect ? cardRect.height : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="h-full flex flex-col text-gray-100">
          {/* Modal Header */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-2">{pack.name}</h2>
            <div className="text-xl flex flex-col gap-2 mt-1 text-gray-300">
              <span className="flex items-center gap-2">
                <FaCalendar className="size-4" />
                {pack.timeframe}
              </span>
              <span className="flex items-center gap-2">
                <FaTag className="size-4" />
                {pack.priceRange}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto pr-4">
            {pack.description && (
              <p className="mb-4 text-gray-100">{pack.description}</p>
            )}

            {pack.features && pack.features.length > 0 && (
              <ul className="list-disc list-inside space-y-2">
                {pack.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
          </div>

          {pack.note && (
            <div className="mt-4 text-sm p-4 rounded-lg flex items-start gap-2">
              <FaInfoCircle className="size-4" />
              <p className="flex-1">{pack.note}</p>
            </div>
          )}

          {/* Close Button */}
          <div className="flex items-center justify-end mt-4">
            <button
              onClick={onClose}
              className="
                bg-white text-black px-4 py-2 rounded 
                hover:bg-gray-300 transition-colors
              "
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PackageModal;
