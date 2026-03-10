import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./AboutUs.module.scss";

/**
 * 📝 SECCIÓN "SOBRE NOSOTROS" EQUILIBRADA
 * Posicionamos a Banmédica como líder en nuestra red de convenios 
 * pero resaltamos la capacidad de comparar todo el mercado chileno.
 */

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className={styles.ContBenefits}>
      <h2 className={styles.title}>
        Asesoría Experta: Comparamos las Mejores Isapres de Chile
      </h2>
      <Container className={styles.AboutUsCont}>
        <Grid container className={styles.benefitsGeneralCont} spacing={4}>
          {/* Texto Optimizado: Foco en Banmédica sin exclusividad */}
          <Grid item xs={12} md={6} className={styles.textContainer}>
            <Typography variant="body1" className={styles.description} component="p" gutterBottom>
              En nuestro equipo, somos un grupo de <strong>asesores especializados en previsión de salud</strong> con convenios destacados en <strong>Isapres Banmédica, Colmena, Consalud, Esencial, Vida Tres, Nueva Masvida y</strong>  todas las instituciones más importantes del país. Nos apasiona ofrecer una <strong>asesoría integral y personalizada</strong> que se adapta a la realidad de cada cliente y su familia.
            </Typography>
            <Typography variant="body1" className={styles.description} component="p">
              Nuestra labor es <strong>cotizar, comparar y recomendar</strong> de forma objetiva los planes más competitivos de <strong>las distintas Isapres de Chile</strong>. Buscamos maximizar tu <strong>ahorro y excedentes</strong>, asegurando que obtengas la mejor red de clínicas y beneficios hospitalarios según tu 7% de cotización legal.
            </Typography>
          </Grid>

          {/* Imagen representativa */}
          <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
            <Box className={styles.imageContainer} sx={{ position: 'relative', width: '100%', height: '300px' }}>
              <Image
                layout="fill"
                objectFit="cover"
                src="/asesores.jpg"
                alt="Asesoría experta en Isapres"
                className={styles.image}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutUs;