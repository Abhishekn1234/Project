import { FunctionComponent } from "react";
import styles from "./BottomBar.module.css";

export type BottomBarType = {
  className?: string;
};

const BottomBar: FunctionComponent<BottomBarType> = ({ className = "" }) => {
  return (
    <div className={[styles.bottomBar, className].join(" ")}>
      <img
        className={styles.addSquareSvgrepoCom3Icon}
        loading="lazy"
        alt=""
        src="/addsquaresvgrepocom-2.svg"
      />
      <footer className={styles.barLeft} />
      <div className={styles.barRight} />
      <div className={styles.categories}>
        <div className={styles.categorySelector} />
        <div className={styles.categoryItems}>
          <div className={styles.categoryItemsChild} />
          <h3 className={styles.aacBlocks}>AAC Blocks</h3>
          <div className={styles.x100X}>200 x 100 x 150</div>
          <div className={styles.filler}>$ 1.50</div>
          <div className={styles.wrapperImage202305241255152}>
            <img
              className={styles.image202305241255152RemovebIcon}
              loading="lazy"
              alt=""
              src="/image202305241255152removebgpreview-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.categoryItems1}>
          <div className={styles.categoryItemsItem} />
          <h3 className={styles.cementBags}>Cement Bags</h3>
          <div className={styles.kg}>50 KG</div>
          <div className={styles.div}>$ 4.50</div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.imageFiller}>-30%</div>
          </div>
          <img
            className={styles.addSquareSvgrepoCom4Icon}
            loading="lazy"
            alt=""
            src="/addsquaresvgrepocom-2.svg"
          />
          <div className={styles.wrapperIstockphoto476199756}>
            <img
              className={styles.istockphoto476199756612x612Icon}
              loading="lazy"
              alt=""
              src="/istockphoto476199756612x612removebgpreview-1@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.rightCircleSvgrepoCom1Icon}
          loading="lazy"
          alt=""
          src="/rightcirclesvgrepocom-1.svg"
        />
        <img
          className={styles.rightCircleSvgrepoCom2Icon}
          loading="lazy"
          alt=""
          src="/rightcirclesvgrepocom-2.svg"
        />
        <div className={styles.interlocks}>
          <div className={styles.interlocksChild} />
          <div className={styles.interlocksType}>
            <h3 className={styles.interlocks1}>Interlocks</h3>
            <div className={styles.multiColor}>Multi-Color</div>
          </div>
          <h3 className={styles.startingFrom}>Starting from</h3>
          <div className={styles.wrapperHighStrengthRedInte}>
            <img
              className={styles.highStrengthRedInterlockingIcon}
              loading="lazy"
              alt=""
              src="/highstrengthredinterlockingpaverblocks519removebgpreview-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.categoryItems2} />
        <div className={styles.categoryItems3} />
      </div>
    </div>
  );
};

export default BottomBar;
