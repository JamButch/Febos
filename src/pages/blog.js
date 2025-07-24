// src/pages/blog.js
import React from 'react';
import { graphql, Link } from 'gatsby'; // Importa graphql y Link
import Layout from '../components/Layout.jsx'; // Asegúrate de la capitalización

const BlogPage = ({ data }) => {
  const posts = data.allAbuCmsFebosClBlog.nodes;

  return (
    <Layout>
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-12">Nuestro Blog</h1>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <div key={post.id} className="bg-white p-6 rounded-lg shadow-md text-left">
                  <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
                    {/* Enlace a la página individual del post */}
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.titulo || post.name}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">Fecha: {post.fecha}</p>

                  {post.resumen && post.resumen.html && (
                    <div 
                      className="text-gray-600 text-base mb-4" 
                      dangerouslySetInnerHTML={{ __html: post.resumen.html }} 
                    />
                  )}

                  {/* Enlace para leer el post completo */}
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
    </Layout>
  );
};

export default BlogPage;

// Consulta GraphQL para obtener todos los posts
export const query = graphql`
  query AllBlogPosts {
    allAbuCmsFebosClBlog(sort: {fecha: DESC}) { # Ordena todos los posts por fecha
      nodes {
        id
        name
        fecha
        titulo
        resumen {
          type
          html
        }
        slug # ¡Necesitamos el slug para las URLs!
      }
    }
  }
`;