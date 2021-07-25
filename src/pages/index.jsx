import React from 'react';
import Layout from '../components/Shared/Layout';
import { Helmet } from 'react-helmet';
import Project from '../components/Projects/Project';
import Intro from '../components/Intro';
import About from '../components/About';
import Contact from '../components/Contact';
import { graphql } from 'gatsby';

export default function Home({ data }) {
  console.log('TEST: ', data);
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />'
        <meta
          name="description"
          content="Landing page for Jon Lunde's web development portfolio where I showcase some of my projects and myself."
        ></meta>
        <meta
          name="keywords"
          content="home, homepage, Jon Lunde, Jon, Magnar,Lunde, HTML, CSS, JavaScript, Typescript, React, Angular, SCSS, GitHub, Web, Development, Software, Gatsby, ExpressJs, Express, NodeJs, Node, Junior, Norway, C#, .NET, .NET Core, Java"
        ></meta>
        <meta name="author" content="Jon Lunde"></meta>
        <title>Jon Lunde portfolio homepage for web development</title>
        <link rel="canonical" href="https://www.lunde.dev" />
      </Helmet>
      <header>
        <Intro />
      </header>
      <main>
        <About />
        <div className="projects">
          <div className="projects__container section-container">
            <h2 className="heading-primary projects__title">Projects.</h2>
            {edges.map(({ node }) => (
              <Project key={node.id} frontmatter={node.frontmatter} html={node.html} />
            ))}
          </div>
        </div>
        <Contact />
      </main>
    </Layout>
  );
}

export const query = graphql`
  query GetAllProjects {
    allMarkdownRemark(sort: { fields: frontmatter___order }) {
      edges {
        node {
          frontmatter {
            imageAlt
            stack
            title
            gitUrl
            image {
              childImageSharp {
                gatsbyImageData(blurredOptions: { width: 100 }, placeholder: BLURRED)
              }
            }
            websiteUrl
          }
          html
          id
        }
      }
    }
  }
`;
