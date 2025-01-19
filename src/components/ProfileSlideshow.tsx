import { useEffect, useState } from "react";
import Image from "next/image";

const ProfileSlideshow = () => {
  const images = [
    "/profiles/profile1.png",
    "/profiles/profile2.png",
    "/profiles/profile3.png",
    "/profiles/profile4.png",
    "/profiles/profile5.png",
    "/profiles/profile6.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Image
      src={images[currentImageIndex]}
      alt={`Profile ${currentImageIndex + 1}`}
      fill
      className="!grayscale overflow-visible object-cover md:object-contain"
    />
  );
};

export default ProfileSlideshow;
