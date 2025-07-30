import React from 'react';
import { graphql, Link } from 'gatsby';

// Componentes
import Layout from '../components/Layout.jsx';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import ProblemSection from '../components/ProblemSection';
import PartnersSection from '../components/PartnersSection';
import SupportSection from '../components/SupportSection'; 
import ServicesSection from '../components/ServicesSection';
import VideoSection from '../components/VideoSection.jsx';

// Imágenes
import privado from '../images/sector-privado.png';
import publico from '../images/sector-publico.png';

// Iconos
import { PiggyBank, Blend, Scale, Landmark, ShieldUserIcon, BanknoteArrowUp, Lightbulb, FolderLock } from 'lucide-react';

// --- IMÁGENES DE LOGOS SECTOR PRIVADO ---
import logoChilemat from '../images/chilemat-logo.png';
import logoEngie from '../images/engie-logo.png';
import logoGoodyear from '../images/goodyear-logo.png';
import logoShciapacasse from '../images/shciapacasse-logo.png';
import logoSqm from '../images/sqm-logo.png';
import logoMc from '../images/mc-logo.png';
import logoCmpc from '../images/cmpc-logo.png';
import logoCompass from '../images/compass-logo.png';
import logoMaver from '../images/maver-logo.png';
import logoVidaCamara from '../images/vidacamara-logo.png';
import logoSna from '../images/sna-logo.png';

// --- IMÁGENES DE LOGOS SECTOR PUBLICO ---
import logoAduanas from '../images/aduanas-logo.png';
import logoCorfo from '../images/corfo-logo.png';
import logoMop from '../images/mop-logo.png';
import logoFch from '../images/fch-logo.png';
import logoHoscar from '../images/hoscar-logo.png';
import logoMetro from '../images/metro-logo.png';
import logoMinMujer from '../images/minmujer-logo.png';
import logoSernac from '../images/sernac-logo.png';
import logoMinrel from '../images/minrel-logo.png';
import logoArmychile from '../images/armychilesalud-logo.png';
import logoSercotec from '../images/sercotec-logo.png';
import logoUdetalca from '../images/udetalca-logo.png';
import logoProchile from '../images/prochile-logo.png';

// --- ARRAYS DE LOGOS ---
const privateSectorBrands = [
  { name: 'Chilemat', logoUrl: logoChilemat },
  { name: 'Engie', logoUrl: logoEngie },
  { name: 'Goodyear', logoUrl: logoGoodyear },
  { name: 'Shciacapasse', logoUrl: logoShciapacasse },
  { name: 'SQM', logoUrl: logoSqm },
  { name: 'MC', logoUrl: logoMc },
  { name: 'CMPC', logoUrl: logoCmpc },
  { name: 'Compass', logoUrl: logoCompass },
  { name: 'Maver', logoUrl: logoMaver },
  { name: 'Vida Cámara', logoUrl: logoVidaCamara },
  { name: 'SNA', logoUrl: logoSna },
];

const publicSectorBrands = [
  { name: 'Aduanas', logoUrl: logoAduanas },
  { name: 'Corfo', logoUrl: logoCorfo },
  { name: 'MOP', logoUrl: logoMop },
  { name: 'FCH', logoUrl: logoFch },
  { name: 'Hoscar', logoUrl: logoHoscar },
  { name: 'Metro', logoUrl: logoMetro },
  { name: 'Ministro de la Mujer', logoUrl: logoMinMujer },
  { name: 'SERNAC', logoUrl: logoSernac },
  { name: 'Minrel', logoUrl: logoMinrel },
  { name: 'Ejército de Chile', logoUrl: logoArmychile },
  { name: 'SERCOTEC', logoUrl: logoSercotec },
  { name: 'Universidad de Talca', logoUrl: logoUdetalca },
  { name: 'ProChile', logoUrl: logoProchile },
];

const IndexPage = ({ data }) => {
  const posts = data.allAbuCmsFebosClBlog.nodes;

  return (
    <Layout>
      <HeroSection />
      <ProblemSection />

      {/* Feature Section 1: Sector Privado */}
      <FeatureSection
        sectionId='sector-privado'
        title="Sector Privado"
        description="Gestiona todos los documentos de tu empresa, emite documentos tributarios electrónicos desde la web o integrando cualquier sistema contable..."
        features={[
          { icon: Blend, text: "Facturación y Boletas Electrónica" },
          { icon: Scale, text: "Portal Proveedores" },
          { icon: Landmark, text: "Gestión Documental" },
          { icon: ShieldUserIcon, text: "Rendiciones de Gastos" },
          { icon: ShieldUserIcon, text: "Firma electrónica de Documentos" },
        ]}
        imageSrc={privado}
        imageAlt="Sector Privado"
        bgColor="bg-gray-50"
        reverseLayout={true}
        iconColorClass="text-blue-500"
        logos={privateSectorBrands} // <-- LA PROP DEBE IR AQUÍ, ANTES DE '/>'
      />

      {/* Feature Section 2: Sector Público */}
      <FeatureSection
        sectionId='sector-publico'
        title="Sector Público"
        description="Digitaliza tus procesos, crea documentos, aprueba y firma en un mismo lugar. Con Febos y Escritorio Digital podrás crear flujos de trabajo..."
        features={[
          { icon: BanknoteArrowUp, text: "Gestión Documental" },
          { icon: PiggyBank, text: "Rendiciones de Fondo Fijo" },
          { icon: Lightbulb, text: "Gestión y Aprobación de Pagos" },
          { icon: FolderLock, text: "Oficina de Partes Electrónica" },
          { icon: FolderLock, text: "Firma Electrónica de Documentos" },
        ]}
        imageSrc={publico}
        imageAlt="escritorio digital en un móvil"
        bgColor="bg-white"
        reverseLayout={false}
        iconColorClass="text-blue-500"
        logos={publicSectorBrands} // <-- Y AQUÍ TAMBIÉN*/
      />

      <SupportSection />  
      <ServicesSection />
      <PartnersSection />

      {/* SECCIÓN DE BLOG POSTS */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Nuestros Últimos Posts</h2>
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <div key={post.id} className="bg-white p-6 rounded-lg shadow-md text-left">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">{post.titulo || post.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">Fecha: {post.fecha}</p>
                  
                  {post.resumen && post.resumen.html && (
                    <div 
                      className="text-gray-600 mb-4" 
                      dangerouslySetInnerHTML={{ __html: post.resumen.html }} 
                    />
                  )}
                  <Link to={`/blog/${post.slug}`} className="text-orange-500 font-bold hover:underline">
                    Leer más
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No hay posts disponibles en este momento.</p>
          )}
        </div>
      </section>
      
      
      <VideoSection />
    </Layout>
  );
};

export default IndexPage;

// ... (tu query de GraphQL)
export const query = graphql`
  query MyAbuCMSData {
    allAbuCmsFebosClBlog (
      sort: {fecha: DESC}
      limit: 3
    ) {
      nodes {
        id # Gatsby necesita un 'id' para la key
        name
        fecha
        titulo
        resumen {
          type
          html
        }
        slug
      }
    }
  }
`;
