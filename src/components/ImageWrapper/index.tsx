import React from "react";
import Image from "@theme/IdealImage";
import styles from "./styles.module.css";

type Fit = "cover" | "contain" | "fill" | "none" | "scale-down";

type Props = {
  src: any; // require(...) из MDX
  alt?: string;
  fit?: Fit;
  className?: string; // чтобы можно было навесить свои модификаторы
};

const fitClassMap: Record<Fit, string> = {
  cover: styles.fitCover,
  contain: styles.fitContain,
  fill: styles.fitFill,
  none: styles.fitNone,
  "scale-down": styles.fitScaleDown,
};

export default function ImageWrapper({
  src,
  alt,
  fit = "cover",
  className,
}: Props) {
  const fitClass = fitClassMap[fit];

  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <div className={styles.inner}>
        {/* @ts-expect-error IdealImage принимает объект от require(...) */}
        <Image img={src} alt={alt} className={`${styles.image} ${fitClass}`} />
      </div>
    </div>
  );
}
