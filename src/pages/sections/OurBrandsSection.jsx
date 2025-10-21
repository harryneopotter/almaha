import React from 'react';
import styles from './OurBrandsSection.module.css';

const OurBrandsSection = () => {
  const brands = [
    {
      id: 1,
      name: "Al Maha Sella Basmati Rice",
      image: "/assets/images/brands/almaha-1.png",
      description: "Al Maha Basmati Rice is the brand containing the wonder grain renowned in the world for its properties of long grain, delicate aroma and exotic flavour.",
      additionalDescription: "The preferred brand of the renowned chefs around the world, this is the delicious, authentic variety that you have been looking for all these years.",
      externalLink: null
    },
    {
      id: 2,
      name: "Punjabi Al Maha Basmati Rice",
      image: "/assets/images/brands/Punjabi-almaha-1.png",
      description: "Premium quality Basmati rice with traditional Punjabi heritage and exceptional taste.",
      additionalDescription: "Crafted with care to bring you the authentic taste of Punjab in every grain.",
      externalLink: null
    },
    {
      id: 3,
      name: "Perfect Choice Basmati Rice",
      image: "/assets/images/brands/Group_5-removebg-preview-1.png",
      description: "Our flagship brand offering the perfect choice for quality-conscious consumers.",
      additionalDescription: "A perfect blend of quality, taste, and value that meets the highest standards.",
      externalLink: "https://www.almahafoods.com/perfect-choice/"
    },
    {
      id: 4,
      name: "Al Maha Premium Basmati",
      image: "/assets/images/brands/1-1.png",
      description: "Premium grade Basmati rice for discerning customers who demand the best.",
      additionalDescription: "Experience the luxury of premium Basmati rice with unmatched quality and aroma.",
      externalLink: null
    },
    {
      id: 5,
      name: "Al Maha Special Basmati",
      image: "/assets/images/brands/2.png",
      description: "Special selection Basmati rice that offers excellent quality at competitive prices.",
      additionalDescription: "A special blend that brings together quality and affordability for every household.",
      externalLink: null
    }
  ];

  return (
    <div className={styles.brandsSection}>
      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Our Brands</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.brandsList}>
                {brands.map((brand) => (
                  <div key={brand.id} className={styles.productBlock}>
                    <div className={styles.imgBox}>
                      <img 
                        src={brand.image} 
                        alt={brand.name}
                        width="146" 
                        height="198"
                      />
                    </div>
                    <div className={styles.content}>
                      <h3>{brand.name}</h3>
                      <h3></h3>
                      <p><span style={{fontWeight: 400}}>{brand.description}</span></p>
                      <p><span style={{fontWeight: 400}}>{brand.additionalDescription}</span></p>
                      {brand.externalLink && (
                        <a 
                          href={brand.externalLink} 
                          className={styles.viewMoreBtn}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View More
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBrandsSection;
