import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// Importa tu componente SEO desde la ruta que mencionaste
// import SEO from '../seo/SEO'; 

/**
 * 🎯 PÁGINA DE CONVERSIÓN (GRACIAS) - VERSIÓN JAVASCRIPT (.js)
 * Esta estructura es la estándar para Next.js (Pages Router).
 */

// Nota para tu proyecto local: 
// Asegúrate de usar 'import Head from "next/head"' y 'import { useRouter } from "next/router"'
// para que el SEO y la navegación funcionen correctamente en producción.

// Mocks para que el código compile en la vista previa del editor
const Head = ({ children }) => <>{children}</>;
const useRouter = () => ({
  push: (url) => console.log(`Navegando a: ${url}`),
});

const ThankYouPage = () => {
  const router = useRouter();

  return (
    <>
      {/* Si decides usar tu componente SEO aquí, sería así:
          <SEO title="¡Solicitud Recibida!" noindex={true} />
      */}
      <Head>
        <title>¡Solicitud Recibida! | Cotiza tu Isapre Ya</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Container maxWidth="sm">
        <Box 
          sx={{ 
            marginTop: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            textAlign: 'center',
            padding: 4,
            borderRadius: 4,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            fontFamily: 'sans-serif'
          }}
        >
          {/* Icono de éxito con el color corporativo */}
          <CheckCircleOutlineIcon sx={{ fontSize: 80, color: '#48C9D4', marginBottom: 2 }} />
          
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a365d' }}>
            ¡Tu solicitud ha sido recibida!
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#4a5568', marginBottom: 4 }}>
            Un asesor experto en Isapres (especialista en Banmédica y planes de salud) se contactará contigo a la brevedad para entregarte la mejor comparativa.
          </Typography>

          <Typography variant="body2" sx={{ color: '#718096', marginBottom: 4 }}>
            Si tienes urgencia, puedes escribirnos directamente por WhatsApp haciendo clic en el botón de la esquina.
          </Typography>

          <Button 
            variant="contained" 
            fullWidth
            onClick={() => router.push('/')}
            sx={{ 
              backgroundColor: '#48C9D4', 
              '&:hover': { backgroundColor: '#3bb1bc' },
              padding: '12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1.1rem'
            }}
          >
            Volver al inicio
          </Button>

          <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #edf2f7', width: '100%' }}>
            <Typography variant="caption" sx={{ color: '#a0aec0' }}>
              Cotiza tu Isapre Ya - Especialistas en Banmédica y Salud en Chile
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ThankYouPage;