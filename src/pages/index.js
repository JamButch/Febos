import React from 'react';
import { graphql, Link } from 'gatsby'; // Importa 'graphql' para la Page Query

// Asegúrate que Layout esté importado correctamente (capitalización y extensión)
import Layout from '../components/Layout.jsx'; // Confirma la capitalización y .jsx
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CtaSection from '../components/CtaSection';
import ProblemSection from '../components/ProblemSection';
import ContactFormSection from '../components/ContactFormSection';
import PartnerLogosSection from '../components/PartnerLogoSection';
import notebook from '../images/notebook-1.png';
import firma from '../images/clavefirmagob.png';
import mobile from '../images/edmovil.png';

// Importa todos los iconos necesarios para las FeatureSections
import { PiggyBank, ScanText, CloudCheck, FileSearch, LockIcon, Cog, Users2, Blend, Scale, Landmark, ShieldUserIcon, BanknoteArrowUp, Lightbulb, FolderLock } from 'lucide-react';

// El componente de página ahora recibe 'data' como prop
const IndexPage = ({ data }) => {
  const posts = data.allAbuCmsFebosClBlog.nodes; // Accede a tus posts

  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <CtaSection />

      {/* Feature Section 1: Funcionalidades Clave */}
      <FeatureSection
        title="Funcionalidades Clave de Escritorio Digital"
        description="Escritorio Digital ofrece un conjunto robusto de funcionalidades diseñadas para optimizar su gestión documental."
        features={[
          { icon: ScanText, text: "Digitalización Inteligente con OCR." },
          { icon: CloudCheck, text: "Almacenamiento Seguro en la Nube." },
          { icon: FileSearch, text: "Búsqueda Avanzada de Documentos." },
          { icon: LockIcon, text: "Seguridad y Control de Acceso."},
          { icon: Cog, text: "Automatización de Flujos de Trabajo." },
          {icon: Users2, text: "Herramientas de Colaboración."}
        ]}
        imageSrc={notebook}
        imageAlt="escritorio digital en un notebook"
        bgColor="bg-white"
        reverseLayout={false}
        iconColorClass="text-indigo-500"
      />

      {/* Feature Section 2: Sector Público */}
      <FeatureSection
        sectionId='sector-publico'
        title="Escritorio Digital para el Sector Público"
        description="Las instituciones públicas enfrentan desafíos únicos en la gestión documental, desde la transparencia hasta el cumplimiento normativo. Escritorio Digital está diseñado para apoyar sus objetivos y optimizar tus flujos de trabajo."
        features={[
          { icon: Blend, text: "Fomente la Transparencia y el Acceso a la Información Pública." },
          { icon: Scale, text: "Asegure el Cumplimiento Normativo y la Trazabilidad de Expedientes." },
          { icon: Landmark, text: "Optimice Procesos Administrativos y Reduzca la Burocracia." },
          { icon: ShieldUserIcon, text: "Proteja la Información Sensible y Garantice la Seguridad de Datos." }
        ]}
        imageSrc={firma}
        imageAlt="integrables con el gobierno"
        bgColor="bg-gray-50"
        reverseLayout={true}
        iconColorClass="text-purple-500"
      />

      {/* Feature Section 3: Sector Privado */}
      <FeatureSection
        sectionId='sector-privado'
        title="Escritorio Digital para la Empresa Privada"
        description="En el competitivo mundo empresarial, la eficiencia y el control son clave. Escritorio Digital impulsa la productividad y la rentabilidad de su negocio."
        features={[
          { icon: BanknoteArrowUp, text: "Impulse la Agilidad y el Crecimiento Empresarial." },
          { icon: PiggyBank, text: "Reduzca Costos Operativos y Maximice la Rentabilidad." },
          { icon: Lightbulb, text: "Fomente la Colaboración y la Innovación en su Equipo." },
          { icon: FolderLock, text: "Proteja sus Activos de Información y Datos Confidenciales."}
        ]}
        imageSrc={mobile}
        imageAlt="escritorio digital en un móvil"
        bgColor="bg-white"
        reverseLayout={false}
        iconColorClass="text-indigo-500"
      />

      {/* SECCIÓN DE BLOG POSTS */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Nuestros Últimos Posts</h2>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <div key={post.id} className="bg-white p-6 rounded-lg shadow-md text-left">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">{post.titulo || post.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">Fecha: {post.fecha}</p>
                  
                  {/* Muestra el resumen HTML */}
                  {post.resumen && post.resumen.html && (
                    <div 
                      className="text-gray-600 mb-4" 
                      dangerouslySetInnerHTML={{ __html: post.resumen.html }} 
                    />
                  )}
                  <Link to={`/blog/${post.slug}`} className="text-indigo-600 font-bold hover:underline">
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

      <ContactFormSection />
    </Layout>
  );
};

export default IndexPage;

// <--- Esta es la Page Query de GraphQL - ¡FORMATO LIMPIO Y CORRECTO! --->
export const query = graphql`
  query MyAbuCMSData {
    allAbuCmsFebosClBlog (
      sort: {fecha: DESC} # <--- Ordena por fecha descendente
      limit: 3 # <--- Limita a 3 posts (o el número que quieras)
    ) {
      nodes {
        name
        fecha
        titulo
        resumen {
          type
          html
        }
        slug # <--- Asegúrate de pedir el 'slug' para los enlaces
      }
    }
  }
`;