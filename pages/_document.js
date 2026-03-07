import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-CL">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#066c8e" />
          <meta name="geo.region" content="CL" />
          {/* Preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          {/* Load the Lexend font */}
          <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
          {/* Google Analytics (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-7T8TQZX3GD" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-7T8TQZX3GD');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
  /**
 * ❓ SECCIÓN DE PREGUNTAS FRECUENTES (FAQ)
 * Ayuda a capturar tráfico de personas que hacen preguntas a Google.
 */
export const FAQSection = () => {
  const faqs = [
    {
      question: "¿Es gratuita la asesoría para cotizar Isapre?",
      answer: "Sí, nuestra asesoría es 100% gratuita para el usuario. Te ayudamos a comparar planes de Consalud, Colmena, Banmédica y más, sin costos ocultos."
    },
    {
      question: "¿Qué documentos necesito para cambiarme de Isapre?",
      answer: "Solo necesitas tu última liquidación de sueldo o certificado de cotizaciones. Nosotros nos encargamos de la gestión para que ahorres tiempo."
    },
    {
      question: "¿Se puede cotizar Isapre siendo trabajador independiente?",
      answer: "¡Claro! Tenemos planes especializados para quienes emiten boletas de honorarios, asegurando que obtengas la mejor cobertura según tu renta."
    }
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Preguntas Frecuentes sobre Cotización de Isapres
        </h2>
        <dl className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-6">
              <dt className="text-lg font-medium text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
}

export default MyDocument;
