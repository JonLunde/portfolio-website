import React from 'react';
import Layout from '../components/Shared/Layout';
import CardContainer from '../components/Home/CardContainer';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Layout>
        <div>
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
            <div className="header-intro">
              <h1 className="heading-intro">
                <span className="header__main heading-intro--main">
                  Hi, I&apos;m Jon!
                </span>
                <span className="header__sub heading-intro--sub">
                  <StaticImage
                    className="heading-intro__img"
                    src="../images/cvPhotoBlurCirc400px.png"
                    alt="Portrait of me."
                    loading="eager"
                    placeholder="none"
                  />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus corporis quae ipsa tempore itaque fugiat facere quas
                  velit magnam qui? corporis quae ipsa tempore itaque fugiat
                  facere quas velit magnam qui?
                </span>
              </h1>
            </div>
          </header>
          <main>
            <CardContainer />
          </main>
        </div>
      </Layout>
    </div>
  );
}
