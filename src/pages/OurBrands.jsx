import { useEffect } from 'react';
import CTASection from '../components/home/CTASection';
import styles from './OurBrands.module.css';

function OurBrands() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brands = [
    {
      id: 1,
      name: "Al Maha Sella Basmati Rice",
      description: "Al Maha Basmati Rice is the brand containing the wonder grain renowned in the world for its properties of long grain, delicate aroma and exotic flavour.",
      additionalDescription: "The preferred brand of the renowned chefs around the world, this is the delicious, authentic variety that you have been looking for all these years.",
      image: "/assets/images/brands/almaha-1.png"
    },
    {
      id: 2,
      name: "Punjabi Al Maha White Basmati Rice",
      description: "Embellished at zenith of all varieties of rice, here comes the King – Punjabi Al Maha White Basmati Rice. Known for its superior quality and taste, this brand is an essential ingredient in a large number of traditional and modern Indian and Middle Eastern dishes. If you wish to tickle your tastebuds with an authentic variety of Basmati Rice, your search ends with this brand of Steam Basmati Rice.",
      image: "/assets/images/brands/Punjabi-almaha-1.png"
    },
    {
      id: 3,
      name: "Perfect Choice Basmati Rice",
      description: "Basmati Rice comes to perfection in our brand: Perfect Choice Supreme. It is known for the distinctive aroma, delicious flavour, authentic taste and high quality. Certainly, a Perfect Choice of chefs for all family celebrations and gatherings.",
      image: "/assets/images/brands/Group_5-removebg-preview-1.png",
      externalLink: "https://www.perfectchoicebasmati.com/products/basmati-rice/"
    },
    {
      id: 4,
      name: "PC Sella Basmati Rice",
      description: "The most vital ingredient in biryani and several other popular dishes is Sella Basmati Rice. Different from normal variety, it is parboiled to attain a unique texture and flavour profile. Our brand of Sella Basmati Rice – PC Sella – with its premium quality, long and slender grain, fluffy look, delicious taste and aromatic flavour is what you need to embellish your dining space with.",
      image: "/assets/images/brands/1-1.png"
    },
    {
      id: 5,
      name: "AL Waha Sella Basmati Rice",
      description: "Sella Basmati rice is a type of Basmati rice that has undergone a parboiling process, which helps the rice retain more of its nutrients and flavor during cooking. This process also makes the rice less prone to breaking or sticking together, resulting in perfectly cooked grains. Al Waha Sella Basmati Rice is one of the leading brands in Sella Basmati rice segment equally loved by food connoisseurs and gourmet chefs.",
      image: "/assets/images/brands/2.png"
    }
  ];

  return (
    <div className={styles.brandsPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div 
          className={styles.heroBackground}
          style={{
            backgroundImage: 'url("/assets/images/brands/brands-banner.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover'
          }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Our Brands</h1>
          </div>
        </div>
      </section>

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
                      {brand.externalLink ? (
                        <a href={brand.externalLink} target="_blank" rel="noopener noreferrer">
                          <img src={brand.image} alt={brand.name} width="146" height="198" />
                        </a>
                      ) : (
                        <img src={brand.image} alt={brand.name} width="146" height="198" />
                      )}
                    </div>
                    <div className={styles.content}>
                      {brand.externalLink ? (
                        <a href={brand.externalLink} target="_blank" rel="noopener noreferrer">
                          <h3>{brand.name}</h3>
                        </a>
                      ) : (
                        <h3>{brand.name}</h3>
                      )}
                      <h3></h3>
                      <p><span style={{fontWeight: 400}}>{brand.description}</span></p>
                      {brand.additionalDescription && (
                        <p><span style={{fontWeight: 400}}>{brand.additionalDescription}</span></p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (use homepage default text) */}
      <CTASection />
    </div>
  );
}

export default OurBrands;
