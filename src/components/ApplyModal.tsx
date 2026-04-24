"use client";

import Modal from "./Modal";
import styles from "./ApplyModal.module.css";

interface ApplyModalProps {
  onClose: () => void;
}

export default function ApplyModal({ onClose }: ApplyModalProps) {
  const handleApply = () => {
    window.open(
      "https://apply.getapprovedwith.com/app/signup/p/saxton/darrentsai",
      "_blank",
      "noopener,noreferrer"
    );
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.badge}>Ready to Apply?</div>
        <h2 className={styles.title}>Start Your Application</h2>
        <p className={styles.body}>
          You&apos;re one step closer to homeownership. Darren&apos;s secure
          application takes about 10 minutes. No commitment required.
        </p>
        <ul className={styles.checklist}>
          <li>No hard credit pull to get started</li>
          <li>Personalized loan options in 24 hours</li>
          <li>Darren reviews every application personally</li>
        </ul>
        <div className={styles.actions}>
          <button className="btn-primary" onClick={handleApply}>
            Continue to Application
          </button>
          <button className={styles.cancel} onClick={onClose}>
            Not yet
          </button>
        </div>
      </div>
    </Modal>
  );
}
