import React from 'react';
import Layout from '../components/Shared/Layout';
import CardContainer from '../components/Home/CardContainer';
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  return (
    <div>
      <Layout>
        <div>
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
