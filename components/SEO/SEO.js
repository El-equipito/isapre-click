import React from 'react';
import Head from 'next/head';

/**
 * 🚀 COMPONENTE SEO - VERSIÓN BANMÉDICA PRIORITARIA
 * Hemos puesto a Banmédica como la marca principal en la descripción
 * para mejorar el posicionamiento en ese nicho específico.
 */

const SITE_URL = 'https://cotizatuisapreya.cl';

const defaultSEO = {
  title: 'Cotiza tu Isapre: Compara Planes de Salud y Ahorra',
  description:
    'Especialistas en planes de salud Banmédica, Colmena, Consalud y más. Compara beneficios, optimiza tus excedentes y encuentra tu Isapre ideal con asesoría gratuita.',
  keywords: 
    'isapre banmedica, cotizar isapre, planes de salud chile, asesoría isapre, comparar isapres, banmedica planes, colmena, consalud, excedentes isapre',
  image: `${SITE_URL}/og-image.jpg`,
  imageAlt: 'Cotiza tu Isapre - Asesoría experta con foco en Banmédica',
  locale: 'es_CL',
  type: 'website',
};

export default function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  imageAlt = defaultSEO.imageAlt,
  url = SITE_URL,
  type = defaultSEO.type,
  noindex = false,
}) {
  const fullTitle = title === defaultSEO.title ? title : `${title} | Cotiza tu Isapre`;
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url === '/' ? '' : url}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Cotiza tu Isapre',
        description: defaultSEO.description,
      },
      {
        '@type': 'Organization',
        name: 'Cotiza tu Isapre Ya',
        url: SITE_URL,
        description: 'Líderes en asesoría de planes de salud con convenios destacados en Banmédica y principales Isapres.',
        areaServed: { '@type': 'Country', name: 'Chile' },
        contactPoint: {
          '@type': 'ContactPoint',
          'telephone': '+56990856075',
          'contactType': 'customer service'
        }
      }
    ],
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Cotiza tu Isapre" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}