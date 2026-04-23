"use client";

import { useEffect } from "react";
import Modal from "./Modal";
import styles from "./BookModal.module.css";

interface BookModalProps {
  onClose: () => void;
}

export default function BookModal({ onClose }: BookModalProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Free 15-Minute Call</div>
          <h2 className={styles.title}>Book a Call with Darren</h2>
          <p className={styles.subtitle}>
            Get honest answers, no pressure.
          </p>
        </div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/realdarrentsai/15min?hide_gdpr_banner=1&primary_color=2C5364"
          style={{ minWidth: "320px", height: "630px" }}
        />
      </div>
    </Modal>
  );
}
