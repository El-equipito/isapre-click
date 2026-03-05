import Head from 'next/head';

const SITE_URL = 'https://cotizatuisapreya.cl';

const defaultSEO = {
  title: 'Cotiza tu Isapre | Asesoría Gratuita - Compara Planes de Salud en Chile',
  description:
    '¿Buscas el mejor plan de Isapre? Te asesoramos gratis y sin compromiso. Compara planes de salud, elige y ahorra. Cotiza tu plan de Isapre hoy mismo.',
  image: `${SITE_URL}/og-image.jpg`,
  imageAlt: 'Cotiza tu Isapre - Asesoría en planes de salud',
  locale: 'es_CL',
  type: 'website',
};

export default function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
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
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/#cotizar` },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        name: 'Cotiza tu Isapre',
        url: SITE_URL,
        description: 'Asesoría gratuita en planes de Isapre. Compara y elige el mejor plan de salud para ti y tu familia.',
        areaServed: { '@type': 'Country', name: 'Chile' },
      },
      {
        '@type': 'WebPage',
        '@id': `${fullUrl}/#webpage`,
        url: fullUrl,
        name: fullTitle,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
    ],
  };

  return (
    <Head>
      {/* Básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={defaultSEO.locale} />
      <meta property="og:site_name" content="Cotiza tu Isapre" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Datos estructurados (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
