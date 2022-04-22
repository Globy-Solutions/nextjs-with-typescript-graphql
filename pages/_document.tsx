import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  name: 'Desarrollador de Software',
  datePosted: '2020/01/01',
  title: 'Ingeniero de Software',
  industry: 'Desarrollo de Software',
  description: '',
  employmentType: 'Part-time',
  baseSalary: '1000',
  validThrough: '2020/01/07',
  jobLocation: {
    '@type': 'Place',
    name: 'Globy Solutions',
    email: 'info@globy.solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chacabuco 1565',
      addressLocality: 'Buenos Aires',
      addressRegion: 'CABA',
      postalCode: 'B1066',
    },
  },
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Globy Solutions',
    email: 'info@globy.solutions',
  },
}
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }
  render() {
    return (
      <Html lang="es" className="dark">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
