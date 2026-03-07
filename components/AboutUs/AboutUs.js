import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import Image from 'next/legacy/image';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section id = 'sobre-nosotros' className={styles.ContBenefits}>
        <h2 className={styles.title}>Asesoría Experta: Expertos en Previsión de Salud</h2>
     <Container className={styles.AboutUsCont} >
        <Grid container className={styles.benefitsGeneralCont}>
          {/* Texto */}
          <Grid item xs={12} sm={6} className={styles.textContainer}>
              <p className={styles.description}>
                En nuestro equipo, somos un grupo de asesores comerciales especializados en planes de salud a través de las isapres de Chile. Nos apasiona ofrecer un servicio personalizado que se ajusta a las necesidades de cada cliente y beneficiario, garantizando siempre las mejores opciones en cobertura y beneficios.
              <br/>
              <br/>
                Nos encargamos de cotizar, comparar y recomendar los planes más adecuados, asegurando que cada persona reciba el cuidado y la protección que merece.
              </p>
          </Grid>

          <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'}>
            <Box className={styles.imageContainer}>
              <Image
                width={500}
                height={300}
                src="/asesores.jpg"
                alt="asesores salud"
                className={styles.image} // Asegúrate de que en tu CSS la clase .image tenga un 100% de ancho
              />
            </Box>
          </Grid>
        </Grid>
      </Container> 
    </section>
  );
};

export default AboutUs;
