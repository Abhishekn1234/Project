import { FunctionComponent } from "react";
import styles from "./Flooring.module.css";

export type FlooringType = {
  className?: string;
};

const Flooring: FunctionComponent<FlooringType> = ({ className = "" }) => {
  return (
    <div className={[styles.flooring, className].join(" ")}>
      <div className={styles.flooringTypes}>
        <div className={styles.parquetConcreteWrapper}>
          <div className={styles.parquetConcrete}>
            <div className={styles.parquetConcreteInner}>
              <div className={styles.frameChild} />
            </div>
            <img
              className={styles.concrete1Icon}
              loading="lazy"
              alt=""
              src="/concrete-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <img
            className={styles.parquet1Icon}
            loading="lazy"
            alt=""
            src="/parquet-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Flooring;
