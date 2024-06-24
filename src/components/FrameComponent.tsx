import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.whiteWoodParent, className].join(" ")}>
      <div className={styles.whiteWood}>White-wood</div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <img
            className={styles.planning1Icon}
            alt=""
            src="/planning-1@2x.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameItem} />
          </div>
          <img className={styles.drywall1Icon} alt="" src="/drywall-1@2x.png" />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameInner} />
          <img className={styles.cement1Icon} alt="" src="/cement-1@2x.png" />
        </div>
        <div className={styles.cementSandContainer}>
          <p className={styles.cement}>{`Cement &`}</p>
          <p className={styles.sand}>Sand</p>
        </div>
        <div className={styles.landscape}>Landscape</div>
        <div className={styles.drywallGypsumContainer}>
          <p className={styles.drywall}>{`Drywall &`}</p>
          <p className={styles.gypsum}>Gypsum</p>
        </div>
        <div className={styles.precast}>Precast</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div}>-30%</div>
        </div>
        <div className={styles.frameChild1} />
        <div className={styles.div1}>-25%</div>
        <div className={styles.frameChild2} />
        <div className={styles.thermalInsulatedConcreteBloParent}>
          <h2 className={styles.thermalInsulatedConcrete}>
            Thermal Insulated Concrete Blocks
          </h2>
          <div className={styles.blocksTypes}>
            <div
              className={styles.lightWeightBlocks}
            >{`Light Weight Blocks `}</div>
          </div>
          <div className={styles.blocksTypes1}>
            <div className={styles.solidBlocksNormal}>
              Solid Blocks Normal Weight
            </div>
          </div>
          <div className={styles.blocksTypes2}>
            <div
              className={styles.interlocksPavings}
            >{`Interlocks & Pavings`}</div>
          </div>
          <div className={styles.kerbstoneHeelkerbWheelSWrapper}>
            <h2
              className={styles.kerbstoneHeelkerb}
            >{`Kerbstone & Heelkerb & Wheel S...`}</h2>
          </div>
        </div>
        <div className={styles.kerbstoneImage}>
          <div className={styles.kerbstoneImageChild} />
          <div className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
