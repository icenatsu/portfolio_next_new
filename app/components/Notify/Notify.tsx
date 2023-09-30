import styles from "./Notify.module.scss";
import { Icon } from "@iconify/react";

export interface NotifyProps {
  inVariant: "error" | "success";
  inMessage: string;
  inClose: () => void;
}

const Notify = ({
  inVariant,
  inMessage,
  inClose,
}: NotifyProps): JSX.Element => {
  return (
    <div className={styles.notify}>
      <Icon
        icon="tabler:circle-x-filled"
        aria-label="Fermer la notification"
        hFlip={true}
        onClick={inClose}
        className={[
          styles.close,
          inVariant === "error"
            ? styles["close--error"]
            : styles["close--success"],
        ].join(" ")}
      />
      <p>{inMessage}</p>
      <div
        className={[
          styles.bar,
          inVariant === "error" ? styles["bar--error"] : styles["bar--success"],
        ].join(" ")}
      ></div>
    </div>
  );
};

export default Notify;
