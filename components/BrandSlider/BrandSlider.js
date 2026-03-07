import React from 'react';
import styles from './BrandSlider.module.scss';
import SliderTour from '../Sliders/SliderTour';



const BrandSlider = () => {
  return (
    <section id='nuestros-aliados' className={styles.cont}>
      <h2 className={styles.title}>Comparamos las Principales Isapres de Chile</h2>
      <SliderTour/>
    </section>
  );
};

export default BrandSlider;