import { FunctionComponent, useCallback } from "react";
import styles from "./SIGNINCustomerSeller.module.css";

export type SIGNINCustomerSellerType = {
  className?: string;
};

const SIGNINCustomerSeller: FunctionComponent<SIGNINCustomerSellerType> = ({
  className = "",
}) => {
  const onSignInButtonClick = useCallback(() => {
    // Please sync "HOME" to the project
  }, []);

  const onSIGNUPTextClick = useCallback(() => {
    // Please sync "GET STARTED" to the project
  }, []);

  return (
    <form className={[styles.signInCustomerSeller, className].join(" ")}>
      <section className={styles.greeting}>
        <b className={styles.heyHello}>Hey, Hello 👋</b>
        <div className={styles.enterYourCredentials}>
          Enter your credentials to access your account
        </div>
      </section>
      <div className={styles.signInYourAccountWrapper}>
        <div className={styles.signInYour}>Sign in your account</div>
      </div>
      <section className={styles.loginForm}>
        <div className={styles.emailField}>
          <a className={styles.email}>Email</a>
          <input
            className={styles.emailInput}
            placeholder="sample@gmail.com"
            type="text"
          />
          <div className={styles.passwordField}>
            <div className={styles.passwordInputArea}>
              <div className={styles.passwordInput}>
                <div className={styles.password}>Password</div>
              </div>
              <div className={styles.forgotPassword}>Forgot password?</div>
            </div>
            <div className={styles.passwordIcon}>
              <div className={styles.placeholder}>*********</div>
              <img
                className={styles.passwordVisualizerIcon}
                alt=""
                src="/password-visualizer.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.signInButtonArea}>
        <button className={styles.signInButton} onClick={onSignInButtonClick}>
          <div className={styles.signIn}>SIGN IN</div>
        </button>
      </div>
      <section className={styles.socialLogin}>
        <div className={styles.socialLoginOptions}>
          <div className={styles.socialLoginHeader}>
            <div className={styles.orSignIn}>or sign in with</div>
          </div>
          <div className={styles.socialLoginButtons}>
            <div className={styles.buttonContainer}>
              <img
                className={styles.xmlid28Icon}
                loading="lazy"
                alt=""
                src="/xmlid-28.svg"
              />
            </div>
            <button className={styles.buttonContainer1}>
              <img className={styles.primaryIcon} alt="" src="/primary.svg" />
            </button>
            <div className={styles.buttonContainer2}>
              <img
                className={styles.primaryIcon1}
                loading="lazy"
                alt=""
                src="/primary-1.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.signupOptionWrapper}>
        <div className={styles.signupOption}>
          <div className={styles.dontHaveAn}>{`Don’t have an account? `}</div>
          <div className={styles.signUp} onClick={onSIGNUPTextClick}>
            SIGN UP
          </div>
        </div>
      </div>
    </form>
  );
};

export default SIGNINCustomerSeller;
