/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Consulta todos los posts desde la capa de datos de Gatsby
  const result = await graphql(`
    query {
      allAbuCmsFebosClBlog {
        nodes {
          id
          slug # Necesitamos el slug para crear la URL de la página
        }
      }
    }
  `);

  // Manejo de errores si la consulta falla
  if (result.errors) {
    throw result.errors;
  }

  // Obtén los posts de la respuesta de la consulta
  const posts = result.data.allAbuCmsFebosClBlog.nodes;

  // Crea una página para cada post
  posts.forEach(post => {
    // Asegúrate de que cada post tenga un slug. Si no, podrías usar el id o generar uno.
    if (!post.slug) {
      console.warn(`Post with ID: ${post.id} is missing a slug. Skipping page creation.`);
      return;
    }

    createPage({
      path: `/blog/${post.slug}`, // URL de la página del post (ej. /blog/mi-primer-post)
      component: path.resolve('./src/templates/blog-post.js'), // Ruta a la plantilla
      context: {
        id: post.id, // Pasa el ID del post a la plantilla como contexto
        slug: post.slug, // También puedes pasar el slug si lo necesitas
      },
    });
  });
};

// Puedes mantener la función createPage original si tienes otras páginas creadas programáticamente
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }


