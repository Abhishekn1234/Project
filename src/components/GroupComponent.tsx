import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.parent, className].join(" ")}>
      <div className={styles.div}>$ 1.30</div>
      <div className={styles.newArrivals}>New Arrivals</div>
      <img
        className={styles.rightCircleSvgrepoCom3Icon}
        alt=""
        src="/rightcirclesvgrepocom-3.svg"
      />
      <div className={styles.frameChild} />
      <div className={styles.homeButton}>
        <div className={styles.homeDetails}>
          <div className={styles.homeIcon}>
            <img
              className={styles.homeIcon1}
              loading="lazy"
              alt=""
              src="/home.svg"
            />
          </div>
          <a className={styles.home}>Home</a>
        </div>
        <div className={styles.categoriesButton}>
          <div className={styles.categoryDetails}>
            <img
              className={styles.categorySvgrepoCom1Icon}
              loading="lazy"
              alt=""
              src="/categorysvgrepocom-1.svg"
            />
          </div>
          <div className={styles.categories}>Categories</div>
        </div>
      </div>
      <div className={styles.ordersButton}>
        <div className={styles.orderDetails}>
          <div className={styles.orderIcon}>
            <img
              className={styles.boxSvgrepoCom1Icon}
              loading="lazy"
              alt=""
              src="/boxsvgrepocom-1.svg"
            />
          </div>
          <div className={styles.orders}>Orders</div>
        </div>
      </div>
      <div className={styles.profileButton}>
        <div className={styles.profileDetails}>
          <div className={styles.profile}>Profile</div>
          <img
            className={styles.profileSvgrepoCom1Icon}
            loading="lazy"
            alt=""
            src="/profilesvgrepocom-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
