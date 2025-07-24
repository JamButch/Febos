// src/templates/blog-post.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout.jsx'; // Asegúrate de la capitalización

const BlogPostTemplate = ({ data }) => {
  const post = data.abuCmsFebosClBlog; // Accede al post singular

  if (!post) {
    return (
      <Layout>
        <section className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-red-600">Post no encontrado</h1>
          <p>El post que buscas no existe.</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">{post.titulo || post.name}</h1>
          <p className="text-lg text-gray-500 mb-8">Fecha: {post.fecha}</p>

          {post.resumen && post.resumen.html && (
            <div 
              className="text-gray-700 text-xl italic mb-8" 
              dangerouslySetInnerHTML={{ __html: post.resumen.html }} 
            />
          )}

          {post.contenido && post.contenido.html && (
            <div 
              className="prose lg:prose-xl max-w-none" // Clases de Tailwind para mejor tipografía
              dangerouslySetInnerHTML={{ __html: post.contenido.html }} 
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPostTemplate;

// Consulta GraphQL para obtener un post individual por su ID o slug
export const query = graphql`
  query BlogPostById($id: String!) { # Espera una variable $id de gatsby-node.js
    abuCmsFebosClBlog(id: { eq: $id }) { # Usa el nombre singular del modelo
      id
      name
      fecha
      titulo
      resumen {
        type
        html
      }
      contenido {
        type
        html
      }
      slug
    }
  }
`;