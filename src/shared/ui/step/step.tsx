import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./step.module.scss";
import { StaticImageData } from "next/image";
import { cn } from "@src/shared/lib/cn";

export type StepProps = {
  title: string;
  num: number;
  children: string;
  imgSrc: StaticImageData;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Step = ({ children, title, num, imgSrc, ...props }: StepProps) => {
  return (
    <div {...props} className={cn(styles.card, props.className)}>
      <div
        className={styles.img}
        style={{
          background: `url(${imgSrc.src}) bottom no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.num}>{num}</div>
      </div>
      <div className={styles.text}>
        <h4 className="title-h4">{title}</h4>
        <p className={styles.p}>{children}</p>
      </div>
    </div>
  );
};
