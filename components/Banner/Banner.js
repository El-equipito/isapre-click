import React from 'react';
import Container from '@mui/material/Container';
import Image from 'next/legacy/image';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import styles from './Banner.module.scss';
import { Button } from '@mui/material';

const BannerPanel = ( ) => {

  const matchesMd = useMediaQuery('(min-width:900px)');
  return (
    <React.Fragment>
        <section className={styles.heroBanner}>
          <div className={styles.textBanner}>
            <h1 className={styles.title}>Cotiza tu Isapre: Compara los Mejores Planes de Salud en Chile</h1>
            <p className={styles.description}> Te asesoramos gratis y sin compromiso.
            Encuentra el plan ideal para ti y tu familia... </p>
            <p className={styles.description}> Compara, elige y ahorra.
            ¡Cotiza tu plan hoy mismo! </p>
            <Link href="#cotizar" passHref legacyBehavior>
            <Button className={styles.btnClas}>
              COTIZAR PLAN
            </Button>
          </Link>
          <Link href="https://wa.me/56990856075?text=Hola, necesito asesoría con mi plan de Isapre. Vengo desde la web." passHref legacyBehavior>
            <Button target="_blank" className={styles.btnClas}>
              CONTACTA POR WHATSAPP
            </Button>
          </Link>
          </div>
        </section>
    </React.Fragment>
  );
};

export default BannerPanel;
