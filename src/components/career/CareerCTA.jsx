import { useState } from 'react';
import ApplicationModal from './ApplicationModal';
import styles from './CareerCTA.module.css';

function CareerCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className={styles.careerCTA}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftColumn}>
              <div className={styles.divider}></div>
              <h2 className={styles.heading}>Work with Us</h2>
            </div>
            <div className={styles.rightColumn}>
              <button className={styles.submitButton} onClick={openModal}>
                Submit Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && <ApplicationModal onClose={closeModal} />}
    </>
  );
}

export default CareerCTA;
