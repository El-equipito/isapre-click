import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

/**
 * 🎯 PÁGINA DE CONVERSIÓN (GRACIAS) - VERSIÓN FINAL INTEGRADA
 * Incluye:
 * 1. Seguimiento de conversiones de Google Ads.
 * 2. Seguimiento de Lead para Meta Pixel.
 */

// Mocks para previsualización (Recuerda usar imports reales en VS Code)
const Head = ({ children }) => <>{children}</>;
const useRouter = () => ({
  push: (url) => {
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  },
});

const ThankYouPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>¡Solicitud Recibida! | Cotiza tu Isapre Ya</title>
        <meta name="robots" content="noindex" />

        {/* 📊 1. Google Ads: Etiqueta Global */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11363002260"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11363002260');
            `,
          }}
        />

        {/* 🎯 2. Google Ads: Evento de Conversión */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                  'send_to': 'AW-11363002260/SUBMIT_LEAD_FORM',
                  'value': 1.0,
                  'currency': 'CLP'
              });
            `,
          }}
        />

        {/* 💎 3. Meta Pixel: Evento de Lead (Conversión) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.fbq) {
                fbq('track', 'Lead');
                console.log("✅ Meta Pixel: Conversión 'Lead' registrada");
              }
            `,
          }}
        />
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