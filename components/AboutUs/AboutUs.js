import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import Image from "next/legacy/image";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className={styles.ContBenefits}>
      <h2 className={styles.title}>
        Asesoría Experta: Expertos en Previsión de Salud
      </h2>
      <Container className={styles.AboutUsCont}>
        <Grid container className={styles.benefitsGeneralCont}>
          {/* Texto */}
          <Grid item xs={12} sm={6} className={styles.textContainer}>
            <p className={styles.description}>
              En nuestro equipo, somos un grupo de{" "}
              <strong>
                asesores comerciales especializados en planes de salud
              </strong>{" "}
              a través de las principales <strong>Isapres de Chile</strong>. Nos
              apasiona ofrecer una <strong>asesoría personalizada</strong> que
              se ajusta a las necesidades reales de cada cliente y beneficiario,
              garantizando siempre las mejores opciones en{" "}
              <strong>cobertura, excedentes y beneficios hospitalarios</strong>.
            </p>
            <p className={styles.description}>
              Nos encargamos de <strong>cotizar, comparar y recomendar</strong>{" "}
              los planes más adecuados <strong>para tu beneficio y ahorro</strong>.
              Nuestro objetivo es asegurar que cada trabajador, ya sea
              dependiente o independiente, reciba el cuidado y la protección que
              merece con el máximo <strong>ahorro en su plan de salud</strong>.
            </p>
          </Grid>

          <Grid item xs={12} sm={6} display={"flex"} justifyContent={"center"}>
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
