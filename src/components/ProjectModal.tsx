import { Project } from "@/types";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectModal = ({
  onClose,
  project,
  cardRef,
}: {
  onClose: () => void;
  project: Project;
  cardRef: React.RefObject<HTMLDivElement>;
}) => {
  // Get the card's position and size
  const [modalSize, setModalSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.8,
  });

  // Update modal size on resize
  useEffect(() => {
    const handleResize = () => {
      setModalSize({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const cardRect = cardRef.current?.getBoundingClientRect();

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50 z-30 h-dvh w-screen"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative backdrop-blur-md border border-neutral-300 rounded-2xl p-8"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
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
        <div className="grid grid-cols-4 gap-4">
          {project.imageUrls && (
            <div>
              {project.imageUrls.map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -100 }} // Start from above
                  animate={{ opacity: 1, y: 0 }} // Slide to its original position
                  exit={{ opacity: 0, y: 100 }} // Slide out when exiting
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                  className="mb-3"
                >
                  <Image
                    src={url}
                    alt={project.name}
                    style={{
                      objectFit: "cover",
                    }}
                    // objectFit="cover"
                    className="rounded-md"
                  />
                </motion.div>
              ))}
            </div>
          )}
          <div
            className={clsx(project.imageUrls ? "col-span-3" : "col-span-3")}
          >
            <div className="text-3xl font-bold">{project.name}</div>
            <div className="text-xl font-bold">{project.subTitle}</div>
          </div>
        </div>
        <button
          className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
