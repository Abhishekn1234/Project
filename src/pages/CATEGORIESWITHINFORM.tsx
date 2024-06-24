import { FunctionComponent, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import BottomBar from "../components/BottomBar";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import FooterContent from "../components/FooterContent";
import Content from "../components/Content";
import Flooring from "../components/Flooring";
import FrameComponent from "../components/FrameComponent";
import styles from "./CATEGORIESWITHINFORM.module.css";

const CATEGORIESWITHINFORM: FunctionComponent = () => {
  const onCATEGORIESWITHINFORMClick = useCallback(() => {
    // Please sync "HOME" to the project
  }, []);

  return (
    <div
      className={styles.categoriesWithinForm}
      onClick={onCATEGORIESWITHINFORMClick}
    >
      <div className={styles.categoriesWithinFormChild} />
      <div className={styles.categoriesWithinFormItem} />
      <div className={styles.categoriesWithinFormInner} />
      <div className={styles.cementBags}>Cement Bags</div>
      <div className={styles.kg}>25 KG</div>
      <div className={styles.div}>$ 2.50</div>
      <div className={styles.div1}>-30%</div>
      <img
        className={styles.addSquareSvgrepoCom2Icon}
        alt=""
        src="/addsquaresvgrepocom-2.svg"
      />
      <section className={styles.frameParent}>
        <FrameComponent1 />
        <BottomBar />
        <div className={styles.steelAndHome}>
          <GroupComponent1 />
          <GroupComponent />
        </div>
      </section>
      <section className={styles.bottomSeparator} />
      <section className={styles.footer}>
        <FooterContent />
        <Content />
        <Flooring />
      </section>
      <FrameComponent />
    </div>
  );
};

export default CATEGORIESWITHINFORM;
