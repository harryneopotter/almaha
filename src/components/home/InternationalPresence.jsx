import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldIndiaUltra from '@amcharts/amcharts4-geodata/worldIndiaUltra';
import styles from '../../styles/components/InternationalPresence.module.css';

const InternationalPresence = () => {
  const chartRef = useRef(null);
  const mapRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!chartRef.current) return;

    // Create map instance
    const map = am4core.create(chartRef.current, am4maps.MapChart);
    mapRef.current = map;

    // Remove amCharts logo/watermark
    if (map.logo) {
      map.logo.disabled = true;
    }

    // Set map definition
    map.geodata = am4geodata_worldIndiaUltra;

    // Set projection
    map.projection = new am4maps.projections.Miller();

    // Visual settings
    map.background.fill = am4core.color('transparent');
    map.padding(60, 0, 0, 0);

    // Disable zoom controls
    map.chartContainer.wheelable = false;
    if (map.zoomControl) map.zoomControl.disabled = true;

    // Create map polygon series
    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];

    // Configure series (default appearance for all polygons)
    const polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.strokeWidth = 0.8;
  polygonTemplate.stroke = am4core.color('#ffffff');
  polygonTemplate.fill = am4core.color('#ddd0d0');
  // Do not set a template tooltip or hover state here - we'll enable tooltip and hover
  // only on the countries that are listed in `activeCountries` below.

    // Active/Highlighted countries
    const activeCountries = ['CA', 'US', 'SA', 'YE', 'IQ', 'IN', 'FR'];

    // When the series is ready, highlight only the active countries and
    // enable tooltip/hover behavior on those polygons specifically.
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

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.dispose();
      }
    };
  }, []);

  return (
    <section className={styles.internationalPresence} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.content} ${inView ? styles.animate : ''}`}>
          <div className={styles.textColumn}>
            <div className={styles.divider}></div>
            <h2 className={`${styles.heading} international-presence-heading`}>International Presence</h2>
          </div>
          
          <div className={styles.mapColumn}>
            <div className={styles.divider}></div>
            <div className={styles.description}>
              <p>
                We are a globally recognized brand, offering our products to customers in different 
                parts of the World. We cater to diverse International Customers with our Basmati Rice 
                and Quality Assurance Services. Al Maha strives to provide highest quality products & 
                services to global customers through its strong international presence & commitment to 
                excellence.
              </p>
            </div>
            
            <div className={styles.mapWrapper}>
              <div ref={chartRef} className={styles.map}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalPresence;

