import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_indiaHigh from '@amcharts/amcharts4-geodata/indiaHigh';
import styles from '../../styles/components/DomesticPresence.module.css';

const DomesticPresence = () => {
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
    map.geodata = am4geodata_indiaHigh;

    // Set projection
    map.projection = new am4maps.projections.Miller();

    // Visual settings
    map.background.fill = am4core.color('transparent');
    map.padding(56, 0, 0, 0);

    // Create map polygon series
    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.strokeWidth = 1;
    polygonTemplate.stroke = am4core.color('#f9f9f9');
    polygonTemplate.fill = am4core.color('#e0e0e0');
    polygonTemplate.tooltipText = '{name}';

    // Hover state
    const hoverState = polygonTemplate.states.create('hover');
    hoverState.properties.fill = am4core.color('#fe0000');

    // Active/Highlighted states
    const activeStates = ['IN-PB', 'IN-HR', 'IN-RJ', 'IN-GJ', 'IN-MP', 'IN-MH', 'IN-TG', 'IN-AP', 'IN-DN', 'IN-WB'];
    
    polygonSeries.events.on('ready', () => {
      activeStates.forEach((stateId) => {
        const polygon = polygonSeries.getPolygonById(stateId);
        if (polygon) {
          polygon.fill = am4core.color('#fe0000');
          polygon.states.create('hover').properties.fill = am4core.color('#fe0000');
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
    <section className={styles.domesticPresence} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.content} ${inView ? styles.animate : ''}`}>
          <div className={styles.textColumn}>
            <div className={styles.divider}></div>
            <h2 className={`${styles.heading} domestic-presence-heading`}>Domestic Presence</h2>
          </div>
          
          <div className={styles.mapColumn}>
            <div className={styles.divider}></div>
            <div className={styles.description}>
              <p>
                Our domestic presence spans across regions, making our products easily accessible to customers throughout the country. We have established a network of distributors and partners to ensure timely delivery and excellent customer support. Our commitment to quality and customer satisfaction remains unwavering across the regions.
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

export default DomesticPresence;

