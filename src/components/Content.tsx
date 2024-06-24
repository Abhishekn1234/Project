import { FunctionComponent } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.topCategories}>
        <div className={styles.topCategoriesHeader}>
          <img
            className={styles.topCategoriesHeaderItems}
            loading="lazy"
            alt=""
            src="/rectangle-38@2x.png"
          />
        </div>
        <img
          className={styles.categoryImageIcon}
          loading="lazy"
          alt=""
          src="/rectangle-36@2x.png"
        />
        <div className={styles.topCategoriesHeader1}>
          <img
            className={styles.topCategoriesHeaderChild}
            loading="lazy"
            alt=""
            src="/rectangle-37@2x.png"
          />
        </div>
      </div>
      <div className={styles.categoriesList}>
        <div className={styles.categoryContainers}>
          <div className={styles.categoryNames}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.brickwork1Icon}
                loading="lazy"
                alt=""
                src="/brickwork-1@2x.png"
              />
            </div>
            <div className={styles.masonryTypes}>
              <div className={styles.masonry}>Masonry</div>
            </div>
          </div>
          <div className={styles.categoryNames1}>
            <div className={styles.concreteReady}>
              <p className={styles.concrete}>{`Concrete `}</p>
              <p className={styles.ready}>Ready</p>
            </div>
            <div className={styles.categoryNamesInner}>
              <div className={styles.concreteSteelTypesWrapper}>
                <div className={styles.concreteSteelTypes}>
                  <div className={styles.concreteSteelTypesInner}>
                    <div className={styles.frameItem} />
                  </div>
                  <img
                    className={styles.concreteMixer1Icon}
                    loading="lazy"
                    alt=""
                    src="/concretemixer-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chemicals}>
            <div className={styles.constructionChemicals}>
              <p className={styles.construction}>Construction</p>
              <p className={styles.chemicals1}>Chemicals</p>
            </div>
            <div className={styles.chemicalsNavigation}>
              <div className={styles.chemicalsNavContainer}>
                <div className={styles.chemicalsIndicators}>
                  <div className={styles.indicatorsParent}>
                    <div className={styles.indicators} />
                    <div className={styles.indicators1} />
                    <div className={styles.indicators2} />
                  </div>
                </div>
                <div className={styles.imageContainerWrapper}>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageContainerInner}>
                      <div className={styles.frameInner} />
                    </div>
                    <img
                      className={styles.oil1Icon}
                      loading="lazy"
                      alt=""
                      src="/oil-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.categoryNames2}>
            <div className={styles.steelSpacersScaffoldingContainer}>
              <p className={styles.steelSpacers}>Steel, Spacers</p>
              <p className={styles.scaffolding}>Scaffolding</p>
            </div>
            <div className={styles.categoryNamesChild}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <img
                    className={styles.steel1Icon}
                    loading="lazy"
                    alt=""
                    src="/steel-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.categoryNames3}>
            <div className={styles.frameGroup}>
              <div className={styles.plasteringWrapper}>
                <div className={styles.plastering}>
                  <div className={styles.plasteringInner}>
                    <div className={styles.frameChild1} />
                  </div>
                  <img
                    className={styles.plastering1Icon}
                    loading="lazy"
                    alt=""
                    src="/plastering-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.mortar}>
                <div className={styles.plasterMortar}>{`Plaster & mortar`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
