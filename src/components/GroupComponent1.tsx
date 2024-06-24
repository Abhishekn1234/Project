import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.steelDetails}>
        <div className={styles.steelName}>
          <h3 className={styles.tmtSteelBars}>TMT Steel Bars</h3>
          <div className={styles.wrapperOgunSteelBar500x500}>
            <img
              className={styles.ogunSteelBar500x5001RemovIcon}
              alt=""
              src="/ogunsteelbar500x5001removebgpreview-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.fe550Grade}>Fe 550 Grade</div>
      </div>
      <div className={styles.startingFromParent}>
        <h3 className={styles.startingFrom}>Starting from</h3>
        <div className={styles.filler}>$ 6.70</div>
      </div>
    </div>
  );
};

export default GroupComponent1;
