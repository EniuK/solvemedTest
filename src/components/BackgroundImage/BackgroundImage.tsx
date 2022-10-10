import { isMobileSafari, isSafari } from "react-device-detect";
import styles from "./BackgroundImage.module.css";

type Props = { src: string; alt: string; className?: string };

const BackgroundImage: React.FC<Props> = ({ src, alt, className = "" }) => (
  <img src={src} alt={alt} className={`${styles.img} ${isSafari || isMobileSafari ? styles.bgImageSafari : ""} ${className}`} />
);

export default BackgroundImage;
