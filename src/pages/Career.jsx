import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Career.module.css';
import ctaStyles from '../styles/components/CTASection.module.css';
import CultureAtAlMahaSection from './sections/CultureAtAlMahaSection';

const Career = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    return (
        <div className={styles.careerPage}>
            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: 'url("/assets/images/careers/careers-banner.jpg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center top',
                        backgroundAttachment: 'scroll',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        <h1>Workplace & Careers</h1>
                    </div>
                </div>
            </section>

            {/* Culture at Al Maha Section */}
            <section id="culture-at-al-maha" className={styles.section}>
                <CultureAtAlMahaSection />
            </section>

            {/* Apply Now CTA Section (reusing home CTA styles) */}
            <section id="apply-now" className={ctaStyles.ctaSection}>
                <div className={ctaStyles.container}>
                    <div className={ctaStyles.wrapper}>
                        <aside className={ctaStyles.sidebar}>
                            <div className={ctaStyles.divider}></div>
                            <h3 className={ctaStyles.sidebarHeading}>Apply Now</h3>
                        </aside>

                        <div className={ctaStyles.content}>
                            <div className={ctaStyles.textContent}>
                                <h2 className={ctaStyles.heading}>Ready to join Al Maha?</h2>
                                <p className={ctaStyles.description}>
                                    Submit your resume and we will get back to you.
                                </p>
                            </div>
                            <div className={ctaStyles.buttonWrapper}>
                                <Link to="/contact-us" className={ctaStyles.primaryButton}>
                                    Submit Resume
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
