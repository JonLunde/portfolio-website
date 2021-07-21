import React from 'react';
import Layout from '../../components/Shared/Layout';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <div>
      <Layout>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />'
          <meta
            name="description"
            content="About me page for Jon Lunde's portfolio website. Here I write about myself, my background and my goals."
          ></meta>
          <meta
            name="keywords"
            content="About, about me, Jon Lunde, Jon, Magnar,Lunde, HTML, CSS, JavaScript, Typescript, React, Angular, SCSS, GitHub, Web, Development, Software, Gatsby, ExpressJs, Express, NodeJs, Node, Junior, Norway, C#, .NET, .NET Core, Java"
          ></meta>
          <meta name="author" content="Jon Lunde"></meta>
          <title>Jon Lunde portfolio about me page for web development</title>
        </Helmet>
        <header>
          <div className="header">
            <h1 className="heading-primary section-container">
              <span className="header__main heading-primary--main">
                About me
              </span>
              <span className="header__sub heading-primary--sub">
                My name is Jon Lunde. I&apos;m a software devoloper.
              </span>
            </h1>
          </div>
        </header>
        <main>
          <div className="about section-container">
            <div className="about__text">
              <p>
                Hello, I&apos;m Jon! I&apos;m a software devoloper currently
                based in Oslo, Norway. Welcome to my corner of the internet
                where I display my projects and other stuff I&apos;ve had a
                finger in.
                <br />
                <br />
                Computers and the internet has always piqued my curiosity and
                ever since I was very little been a big part of my life. I knew
                early on that my career would be in the field of computer
                science. I started my journey with a degree in robotics, but
                that didn&apos;t feel right with me. But I got some exposure to
                coding and that triggered me to change my course to the path of
                software devolopment. After three years at Oslo Metropolitan
                University (OsloMET) I finished my bachelors degree in software
                science and are ready to start building my career in the field
                of software devolopent.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis deserunt architecto ducimus obcaecati error
                repudiandae sit, maiores ipsum quo tenetur.
                <br />
                <br />
                Earum architecto dolores suscipit laboriosam sed et iste eum
                repellat maiores aspernatur, rem adipisci neque reiciendis amet
                ullam ducimuasdasds modi, consequatur impedit minus cupiditate
                repellendus sint?
                <br />
                <br />
                Sed labore quos qui laborum a ab sapiente cumque voluptates
                asperiores fugit, natus, commodi atque unde nulla molestias ex
                accusamus ullam earum eum! Harum dolorem neque corrupti natus
                magnam facere, veritatis laudantium atque commodi! Harum, aut
                architecto iusto quis, saepe dolorum adipisci mollitia, hic
                nihil eaque placeat quidem nam praesentium culpa nemo magni
                pariatur?
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
