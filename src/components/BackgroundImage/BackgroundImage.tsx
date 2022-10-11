import { useEffect, useState } from "react";
import { isMobileSafari, isSafari } from "react-device-detect";
import styles from "./BackgroundImage.module.css";

type Props = { src: string; alt: string; className?: string };

const BackgroundImage: React.FC<Props> = ({ src, alt, className = "" }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Workaround for React hydration error in Safari
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <img src={src} alt={alt} className={`${styles.img} ${isSafari || isMobileSafari ? styles.bgImageSafari : ""} ${className}`} />;
};

export default BackgroundImage;
