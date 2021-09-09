import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Shared/Layout';
import Project from '../components/Projects/Project';
import Intro from '../components/Intro';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home({ data }) {
  const { edges } = data.allMarkdownRemark;
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        &apos;<title>Jon Lunde - Software Developer</title>
        <meta name="description" content="Welcome to my portfolio. Here I showcase some of my projects and myself." />
        <meta
          name="keywords"
          content="portfolio, Jon Lunde, Jon Magnar Lunde, Jon, Magnar,Lunde, HTML, CSS, JavaScript, Typescript, React, Angular, SCSS, GitHub, Web, Development, Software, Gatsby, ExpressJs, Express, NodeJs, Node, Junior, Junior devoloper, Oslo, Norway, C#, .NET, .NET Core, Java"
        />
        <meta name="author" content="Jon Lunde" />
        <link rel="canonical" href="https://www.lunde.dev" />
      </Helmet>
      <header>
        <Intro aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      </header>
      <main>
        <About aboutRef={aboutRef} />
        <div className="projects">
          <div className="projects__container section-container" ref={projectsRef}>
            <h2 className="heading-primary projects__title">Projects.</h2>
            {edges.map(({ node }) => (
              <Project key={node.id} frontmatter={node.frontmatter} html={node.html} />
            ))}
          </div>
        </div>
        <Contact contactRef={contactRef} />
      </main>
    </Layout>
  );
}

// Fetching project information and images from Gatsby data layer.
export const query = graphql`
  query GetAllProjects {
    allMarkdownRemark(sort: { fields: frontmatter___order }) {
      edges {
        node {
          frontmatter {
            stack
            title
            gitUrl
            websiteUrl
            imageAlt1
            imageAlt2
            imageAlt3
            image1 {
              id
              childImageSharp {
                gatsbyImageData(blurredOptions: { width: 100 }, placeholder: BLURRED)
              }
            }
            image2 {
              id
              childImageSharp {
                gatsbyImageData(blurredOptions: { width: 100 }, placeholder: BLURRED)
              }
            }
            image3 {
              id
              childImageSharp {
                gatsbyImageData(blurredOptions: { width: 100 }, placeholder: BLURRED)
              }
            }
          }
          html
          id
        }
      }
    }
  }
`;
