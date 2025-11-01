import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_indiaHigh from '@amcharts/amcharts4-geodata/indiaHigh';
import CTASection from '../components/home/CTASection';
import ctaStyles from '../styles/components/CTASection.module.css';
import useDocumentTitle from '../hooks/useDocumentTitle';
import styles from './DomesticMarket.module.css';
import StickySidebar from '../components/common/StickySidebar';

function DomesticMarket() {
  const chartRef = useRef(null);
  const mapRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useDocumentTitle('Domestic Market - Al Maha Foods');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!chartRef.current || !inView) return;

    // Create map instance
    const map = am4core.create(chartRef.current, am4maps.MapChart);
    mapRef.current = map;

    // Remove amCharts logo/watermark
    if (map.logo) {
      map.logo.disabled = true;
    }

    // Set map definition
    map.geodata = am4geodata_indiaHigh;

    // Set projection
    map.projection = new am4maps.projections.Miller();

    // Visual settings
    map.background.fill = am4core.color('transparent');
    map.padding(20, 20, 20, 20);

    // Disable zoom controls
    map.chartContainer.wheelable = false;
    if (map.zoomControl) map.zoomControl.disabled = true;

    // Disable drag behavior
    map.chartContainer.draggable = false;
    map.chartContainer.resizable = false;
    map.chartContainer.events.disableType("down");
    map.chartContainer.events.disableType("up");
    map.chartContainer.events.disableType("move");

    // Create map polygon series
    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    // Configure series (default appearance for all polygons)
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.strokeWidth = 1;
    polygonTemplate.stroke = am4core.color('#f9f9f9');
    polygonTemplate.fill = am4core.color('#e0e0e0');
    // Do not set a template tooltip or hover state here - we'll enable tooltip and hover
    // only on the states that are listed in `activeStates` below.

    // Active/Highlighted states (states where Al Maha has presence)
    const activeStates = ['IN-PB', 'IN-HR', 'IN-RJ', 'IN-GJ', 'IN-MP', 'IN-MH', 'IN-TG', 'IN-AP', 'IN-DN', 'IN-WB'];

    // When the series is ready, highlight only the active states and
    // enable tooltip/hover behavior on those polygons specifically.
    polygonSeries.events.on('ready', () => {
      activeStates.forEach((stateId) => {
        const polygon = polygonSeries.getPolygonById(stateId);
        if (polygon) {
          // Highlight the active state
          polygon.fill = am4core.color('#fe0000');

          // Create a hover state only for this polygon so other states don't react
          const pHover = polygon.states.create('hover');
          pHover.properties.fill = am4core.color('#fe0000');

          // Enable and style the tooltip on the main polygon object
          polygon.tooltipText = '{name}';
          polygon.tooltip.getFillFromObject = false; // Disable inheriting fill from hovered object
          polygon.tooltip.background.fill = am4core.color('#ffffff');
          polygon.tooltip.label.fill = am4core.color('#000000');
        }
      });
    });

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.dispose();
      }
    };
  }, [inView]);

  return (
    <div className={styles.domesticPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Domestic Market</h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <StickySidebar offset={120} className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Building Strong Domestic Presence</h2>
            </StickySidebar>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <p className={styles.domesticText}>
                  Al Maha Foods has established a strong presence in the Indian market for its high-quality Basmati rice. With its state-of-the-art manufacturing unit, the company has become a preferred choice among domestic consumers. Al Maha Foods caters to the diverse needs of Indian customers with its different brands and packings. We have an extensive distribution network across India to ensure easy accessibility of our products.
                </p>
                <div className={styles.mapSection} ref={ref}>
                  <div className={styles.mapContainer}>
                    <div ref={chartRef} className={styles.map} draggable={false}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <StickySidebar offset={120} className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Our Products</h2>
            </StickySidebar>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.productsContent}>
                <div className={styles.productsGrid}>
                  {/* Supreme */}
                  <div className={styles.productBlock}>
                    <div className={styles.imgBox}>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=297" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/domestic/supreme.png" alt="Perfect Choice Supreme" />
                      </a>
                    </div>
                    <div className={styles.content}>
                      <div>
                        <h3><a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=297" target="_blank" rel="noopener noreferrer">Perfect Choice Supreme</a></h3>
                        <h5>Basmati Rice</h5>
                        <p>Best fit for special occasions. Suitable for Veg and Non-veg Biryani recipes as it elongates about three times o...</p>
                      </div>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=297" className={styles.readMoreLink} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                  </div>
                  {/* Special */}
                  <div className={styles.productBlock}>
                    <div className={styles.imgBox}>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=295" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/domestic/special.png" alt="Perfect Choice Special" />
                      </a>
                    </div>
                    <div className={styles.content}>
                      <div>
                        <h3><a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=295" target="_blank" rel="noopener noreferrer">Perfect Choice Special</a></h3>
                        <h5>Basmati Rice</h5>
                        <p>Veg Pulav, Peas Pulav, Kashmiri Pulav, Zafrani Pulav and Jeera Rice etc are best cooked in Perfect Choice Special...</p>
                      </div>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=295" className={styles.readMoreLink} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                  </div>
                  {/* Tibar */}
                  <div className={styles.productBlock}>
                    <div className={styles.imgBox}>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=293" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/domestic/tibar.png" alt="Perfect Choice Tibar" />
                      </a>
                    </div>
                    <div className={styles.content}>
                      <div>
                        <h3><a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=293" target="_blank" rel="noopener noreferrer">Perfect Choice Tibar</a></h3>
                        <h5>Basmati Rice</h5>
                        <p>Suitable for Veg and Non-veg Biryani recipes and Steam Rice. Perfect Choice Tibar Basmati Rice elongates to some ...</p>
                      </div>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=293" className={styles.readMoreLink} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                  </div>
                  {/* Dubar */}
                  <div className={styles.productBlock}>
                    <div className={styles.imgBox}>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=13&product_id=305" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/domestic/dubar.png" alt="Perfect Choice Dubar" />
                      </a>
                    </div>
                    <div className={styles.content}>
                      <div>
                        <h3><a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=13&product_id=305" target="_blank" rel="noopener noreferrer">Perfect Choice Dubar</a></h3>
                        <h5>Basmati Rice</h5>
                        <p>It adds flavor to daily meal in steam rice. Available in 25kg, 10kg, 5kg and 1kg packs.</p>
                      </div>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=13&product_id=305" className={styles.readMoreLink} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                  </div>
                  {/* Mongra */}
                  <div className={styles.productBlock}>
                    <div className={styles.imgBox}>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=13&product_id=303" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/domestic/mongra.png" alt="Perfect Choice Mongra" />
                      </a>
                    </div>
                    <div className={styles.content}>
                      <div>
                        <h3><a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=13&product_id=303" target="_blank" rel="noopener noreferrer">Perfect Choice Mongra</a></h3>
                        <h5>Basmati Rice</h5>
                        <p>Smaller in grain cut size. This variety represents the broken parts of the same quality rice as in Supreme and Special.</p>
                      </div>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=13&product_id=303" className={styles.readMoreLink} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                  </div>
                  {/* Mini Mongra */}
                  <div className={styles.productBlock}>
                    <div className={styles.imgBox}>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=13&product_id=640" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/domestic/mini-mongra.png" alt="Perfect Choice Mini Mongra" />
                      </a>
                    </div>
                    <div className={styles.content}>
                      <div>
                        <h3><a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=13&product_id=640" target="_blank" rel="noopener noreferrer">Perfect Choice Mini Mongra</a></h3>
                        <h5>Basmati Rice</h5>
                        <p>Smaller in grain cut size. This variety represents the broken parts of the same quality rice as in Supreme and Special.</p>
                      </div>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=13&product_id=640" className={styles.readMoreLink} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                  </div>
                </div>
                <div className={styles.viewMoreContainer}>
                  <a
                    href="https://www.perfectchoicebasmati.com/"
                    className={`${ctaStyles.primaryButton} button`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View More
                  </a>
                </div>
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

export default DomesticMarket;
