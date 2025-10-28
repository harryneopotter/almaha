import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import styles from './Career.module.css';
import CultureAtAlMahaSection from './sections/CultureAtAlMahaSection';
import CTASection from '../components/home/CTASection';

const Career = () => {
    const location = useLocation();

    useDocumentTitle('Workplace & Careers - Al Maha Foods');

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

            {/* Apply Now CTA Section (reusing shared CTA component) */}
            <CTASection
                sidebarTitle="Apply Now"
                title="Ready to join Al Maha?"
                subtitle="Submit your resume and we will get back to you."
                buttonText="Submit Resume"
                to="/contact-us"
                className=""
            />
        </div>
    );
};

export default Career;
