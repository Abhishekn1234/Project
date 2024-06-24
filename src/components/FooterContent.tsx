import { FunctionComponent } from "react";
import styles from "./FooterContent.module.css";

export type FooterContentType = {
  className?: string;
};

const FooterContent: FunctionComponent<FooterContentType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.footerContent, className].join(" ")}>
      <div className={styles.locationSearch}>
        <div className={styles.location}>
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/group-24@2x.png" />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-25@2x.png"
            />
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <div className={styles.searchDetails}>
              <img
                className={styles.locationPinSvgrepoCom1Icon}
                alt=""
                src="/locationpinsvgrepocom-1.svg"
              />
              <a className={styles.kochiIndia}>Kochi, India</a>
              <img
                className={styles.downChevronSvgrepoCom1Icon}
                alt=""
                src="/downchevronsvgrepocom-1.svg"
              />
            </div>
          </div>
          <div className={styles.cart}>
            <img
              className={styles.searchCircleStreamlineUltiIcon}
              loading="lazy"
              alt=""
              src="/searchcirclestreamlineultimatesvg.svg"
            />
            <div className={styles.cartIcon}>
              <img
                className={styles.shoppingCartSvgrepoCom1Icon}
                loading="lazy"
                alt=""
                src="/shoppingcartsvgrepocom-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FooterContent;
