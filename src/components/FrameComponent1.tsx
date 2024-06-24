import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.offers}>
        <div className={styles.offersChild} />
        <div className={styles.offerDetails}>
          <h1 className={styles.popularOffers}>Popular Offers</h1>
          <div className={styles.offerImage}>
            <div className={styles.offerImageChild} />
            <div className={styles.imageContainer}>
              <div className={styles.wrapperIstockphoto476199756}>
                <img
                  className={styles.istockphoto476199756612x612Icon}
                  loading="lazy"
                  alt=""
                  src="/istockphoto476199756612x612removebgpreview-1@2x.png"
                />
              </div>
            </div>
            <h3 className={styles.cementBags}>Cement Bags</h3>
            <div className={styles.weight}>
              <div className={styles.weightValue}>
                <div className={styles.kgWrapper}>
                  <div className={styles.kg}>25 KG</div>
                </div>
                <div className={styles.weightUnit}>$ 2.50</div>
              </div>
              <div className={styles.addIcon}>
                <img
                  className={styles.addSquareSvgrepoCom1Icon}
                  loading="lazy"
                  alt=""
                  src="/addsquaresvgrepocom-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className={styles.trending}>Trending</h1>
      </div>
    </div>
  );
};

export default FrameComponent1;
