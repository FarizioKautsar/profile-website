import { motion } from 'framer-motion';
import Image from 'next/image';

const PictureModal = ({
  onClose,
  imageUrl,
  initialPosition,
}: {
  onClose: () => void;
  imageUrl: string;
  initialPosition: { x: number; y: number; width: number; height: number };
}) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-30"
      onClick={onClose}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        initial={{
          x: initialPosition.x - window.innerWidth / 2 + initialPosition.width / 2,
          y: initialPosition.y - window.innerHeight / 2 + initialPosition.height / 2,
          width: initialPosition.width,
          height: initialPosition.height,
        }}
        animate={{
          x: 0,
          y: 0,
          width: '70vw',
          height: 'auto',
        }}
        exit={{
          x: initialPosition.x - window.innerWidth / 2 + initialPosition.width / 2,
          y: initialPosition.y - window.innerHeight / 2 + initialPosition.height / 2,
          width: initialPosition.width,
          height: initialPosition.height,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Image
          src={imageUrl}
          alt="Expanded view"
          style={{
            width: "100%"
          }}
          objectFit="contain"
          className="rounded-md"
        />
      </motion.div>
    </motion.div>
  );
};

export default PictureModal;
