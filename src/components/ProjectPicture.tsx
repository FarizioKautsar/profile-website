import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types";
import PictureModal from "./PictureModal";

const ProjectPicture = ({
  project,
  url,
}: {
  project: Project;
  url: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [initialPosition, setInitialPosition] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const controls = useAnimation();

  const openModal = (
    imageUrl: string,
    position: { x: number; y: number; width: number; height: number }
  ) => {
    setSelectedImage(imageUrl);
    setInitialPosition(position);
    setIsModalOpen(true);
    controls.start({ opacity: 0 });
  };

  const closeModal = () => {
    setIsModalExiting(true);
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalExiting(false);
    }, 250)
  };


  // Example image click handler
  const handleImageClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    openModal(url, {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });
  };

  console.log(isModalExiting);

  return (
    <div>
      <div onClick={handleImageClick} className="relative cursor-pointer">
        <Image
          src={url}
          alt={project.name}
          style={{
            objectFit: "cover",
            opacity: isModalExiting || isModalOpen ? 0 : 1,
          }}
          // objectFit="cover"
          className="rounded-md"
        />
      </div>
      <AnimatePresence>
        {isModalOpen && initialPosition && (
          <PictureModal
            onClose={closeModal}
            imageUrl={selectedImage}
            initialPosition={initialPosition}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectPicture;
