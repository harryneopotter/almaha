import { useEffect, useRef } from 'react';
import CTASection from '../components/home/CTASection';
import StickySidebar from '../components/common/StickySidebar';
import useDocumentTitle from '../hooks/useDocumentTitle';
// add amCharts for world map
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldIndiaUltra from '@amcharts/amcharts4-geodata/worldIndiaUltra';
import styles from './Exports.module.css';

function Exports() {
  useDocumentTitle('Exports Profile - Al Maha Foods');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // initialize world map for Robust Global Presence section
  useEffect(() => {
    if (!robustChartRef.current) return;

    const map = am4core.create(robustChartRef.current, am4maps.MapChart);
    robustMapInstance.current = map;
    if (map.logo) map.logo.disabled = true;
    map.geodata = am4geodata_worldIndiaUltra;
    map.projection = new am4maps.projections.Miller();
    map.background.fill = am4core.color('transparent');
    map.padding(60, 0, 0, 0);

    // Disable zoom controls
    map.chartContainer.wheelable = false;
    if (map.zoomControl) map.zoomControl.disabled = true;

    // Disable drag behavior
    map.chartContainer.draggable = false;
    map.chartContainer.resizable = false;
    map.chartContainer.events.disableType("down");
    map.chartContainer.events.disableType("up");
    map.chartContainer.events.disableType("move");

    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.strokeWidth = 0.8;
    polygonTemplate.stroke = am4core.color('#ffffff');
    polygonTemplate.fill = am4core.color('#ddd0d0');
    // Do not set a template tooltip or hover state here - we'll enable tooltip and hover
    // only on the countries that are listed in `activeCountries` below.

    const activeCountries = ['CA', 'US', 'SA', 'YE', 'IQ', 'IN', 'FR'];
    polygonSeries.events.on('ready', () => {
      activeCountries.forEach((countryId) => {
        const polygon = polygonSeries.getPolygonById(countryId);
        if (polygon) {
          // Highlight the active country
          polygon.fill = am4core.color('#fe0000');

          // Create a hover state only for this polygon so other countries don't react
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

    return () => {
      if (robustMapInstance.current) robustMapInstance.current.dispose();
    };
  }, []);

  // refs for amCharts map instance and container
  const robustChartRef = useRef(null);
  const robustMapInstance = useRef(null);

  return (
    <div className={styles.exportsPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div
          className={styles.heroBackground}
          style={{
            backgroundImage: 'url("/assets/images/exports/export-banner.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover',
          }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Exports&nbsp;Profile</h1>
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
              <h2 className={styles.heading}>
                Al&nbsp;Maha&nbsp;Foods today stands for state-of-the-art International quality product
                deliverance.
              </h2>
            </StickySidebar>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>


                <p>
                  Al&nbsp;Maha&nbsp;Foods embarked on its journey with a clear vision: to offer premium Basmati
                  Rice to quality-conscious global consumers of Basmati Rice. Our ideology combined with
                  scientific systems, best human resources and sophisticated modern techniques define our
                  functioning. Al&nbsp;Maha&nbsp;Foods consistently succeeds in delivering complete solutions to the
                  buyers with its best business practices based on principles and unmatched quality systems.
                </p>

                <h3>
                  <b>Infrastructure</b>
                </h3>
                <p>
                  Al&nbsp;Maha&nbsp;Foods has infrastructure to produce all variants of Basmati Rice that includes
                  Raw, Steam Brown and Parboiled Rice. Our Rice Mills are strategically located in the heart of
                  paddy growing area to gain maximum advantage of quality, price and logistics and are
                  ISO&nbsp;22000:2018 certified. Implementation of Kaizen practices, continuous system improvement
                  and up-gradation play a major role in enhancing productivity and achieving sustained continual
                  growth.
                </p>

                <h3>
                  <b>Brands</b>
                </h3>
                <p>
                  Al&nbsp;Maha brands are specialized in Indian Raw Basmati Rice and Indian Sella Basmati Rice. Our
                  diverse brands are quality combinations that address the pricing and quality needs of all the
                  ranges of consumers and buyers in all segments and all geographies. To lead the competitive and
                  volatile Basmati rice trade, the company supports customers to minimize business risk and secure
                  their supply chain and procurement. Al&nbsp;Maha&nbsp;Foods is a trend setter when it comes to exploring
                  new avenues, embracing innovations, and setting new benchmarks in the industry.
                </p>

                <div className={styles.imageSection}>
                  <img src="/assets/images/exports/rice_field.jpg" alt="Rice Field" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className={styles.qualitySection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <StickySidebar offset={120} className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Quality</h2>
            </StickySidebar>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.qualityContent}>
                <blockquote>
                  <h3>
                    Strict control over Quality and correct price drives the success of Al&nbsp;Maha&nbsp;Foods.
                  </h3>
                </blockquote>
                <p>
                  Al&nbsp;Maha delivers world-class Indian Basmati rice by having strict quality controls and
                  correct pricing. Al&nbsp;Maha&nbsp;Foods has a well-organized system right from the stage of procurement
                  of paddy, throughout milling, processing, and packing to the port of shipment. Its infrastructure
                  boasts of state-of-the-art systems & controls where quality of rice, at each stage of process is
                  assured by the Basmati rice experts. For excellence in results the whole process is controlled by a
                  modern and high-tech fully equipped laboratory and qualified rice analysts.
                </p>

                <div className={styles.qualityGallery}>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/basmtrice.jpg" alt="Basmati Rice" />
                  </div>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/sellrice.jpg" alt="Sella Rice" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivering Section */}
      <section className={styles.deliveringSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <StickySidebar offset={120} className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Delivering World-class Indian Basmati rice</h2>
            </StickySidebar>

             {/* Right Column - Main Content */}
             <div className={styles.rightColumn}>
               <div className={styles.rightDivider}></div>
               <div className={styles.deliveringContent}>
                <p>
                  Al&nbsp;Maha&nbsp;Foods is dedicated to delivering World-class Indian Basmati rice that meets the highest quality standards and is priced correctly. The company has a well-organized system in place that begins with procuring the best quality paddy and continues throughout the milling and processing of rice, packaging, and shipment. Al&nbsp;Maha&nbsp;Foods uses state-of-the-art infrastructure, including a modern laboratory with qualified rice analysts, to ensure the quality of rice at every stage of the process. The company's goal is to prioritize customer welfare by providing the best quality products and services, regardless of profits or business volume, which has earned them a reputation as an emerging leader in the industry.
                </p>
                <div className={styles.deliveringGallery}>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/Export-3.jpeg" alt="Export 3" />
                  </div>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/Export-1.jpeg" alt="Export 1" />
                  </div>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/Export-2.jpeg" alt="Export 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Robust Global Presence Section */}
      <section className={styles.robustSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <StickySidebar offset={120} className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Robust Global Presence</h2>
            </StickySidebar>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.robustContent}>
                <blockquote>
                  <h3>
                    <b>
                      Al&nbsp;Maha&nbsp;Foods products &amp; services are scientifically developed to give maximum
                      benefit to global buyer
                    </b>
                  </h3>
                </blockquote>
                <p>
                  Our consistent focus on delivering World-class Basmati Rice to our customers has helped us
                  expand our footprint around the Globe, leading to a strong loyal customer base.<br />
                  As we brace ourselves to meet the rising demand for high-quality Basmati Rice, we are committed
                  to serve our customers in each corner of the World.<br />
                  Our Quality impact and understanding of Middle East market helps us spread our wings to other
                  parts of the World.
                </p>

                <div className={styles.mapWrapper}>
                  <div ref={robustChartRef} className={styles.map} draggable={false}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

export default Exports;
