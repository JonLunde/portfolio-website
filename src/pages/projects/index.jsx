import React from 'react';
import Layout from '../../components/Shared/Layout';
import ProjectsContainer from '../../components/Projects/ProjectsContainer';
import Project from '../../components/Projects/Project';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function Projects({ data }) {
  // const { frontmatter, html } = data.markdownRemark;
  // const { frontmatter } = data.allMarkdownRemark.edges.node;
  console.log(data);
  const { edges } = data.allMdx;
  return (
    <div>
      <Helmet>
      <html lang="en" />
        <meta charSet="utf-8" />'
        <meta
          name="description"
          content="Project page for Jon Lunde's portfolio where I list my projects and display key features about them and the process of building them."
        ></meta>
        <meta
          name="keywords"
          content="Projects, Jon Lunde, Jon, Magnar,Lunde, HTML, CSS, JavaScript, Typescript, React, Angular, SCSS, GitHub, Web, Development, Software, Gatsby, ExpressJs, Express, NodeJs, Node, Junior, Norway, C#, .NET, .NET Core, Java"
        ></meta>
        <meta name="author" content="Jon Lunde"></meta>
        <title>Jon Lunde portfolio project page for web development</title>
      </Helmet>
      <Layout>
        <header>
          <div className="header">
            <h1 className="heading-primary section-container">
              <span className="header__main heading-primary--main">
                Projects
              </span>
              <span className="header__sub heading-primary--sub">
                This is a showcase off my projects.
              </span>
            </h1>
          </div>
        </header>
        <main>
          <ProjectsContainer>
            {edges.map(({ node }) => (
              <Project
                key={node.id}
                frontmatter={node.frontmatter}
                body={node.body}
              />
            ))}
          </ProjectsContainer>
        </main>
      </Layout>
    </div>
  );
}

export const query = graphql`
  query GetAllProjects {
    allMdx(sort: { fields: frontmatter___order }) {
      edges {
        node {
          body
          id
          frontmatter {
            slug
            imageAlt
            stack
            gitUrl

            websiteUrl
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`;
