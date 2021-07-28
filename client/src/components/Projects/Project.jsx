import React from 'react';
import { StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export default function Project(props) {
  const {
    frontmatter: { title, images, imageAlt, stack, gitUrl, websiteUrl },
    html: text,
  } = props;

  // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  // <StaticQuery
  //   query={graphql`
  // query GetImages {
  //   allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "${imageFolder}"}}) {
  //     edges {
  //       node {
  //         childImageSharp {
  //           gatsbyImageData(blurredOptions: { width: 100 }, placeholder: BLURRED)
  //         }
  //       }
  //     }
  //   }
  // }`}
  // />;

  return (
    <div className="project">
      <div className="project__image-container">
        <button class="project__swipe project__swipe--prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button class="project__swipe project__swipe--next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          scrollbar={{ draggable: true }}
          navigation={{
            nextEl: '.project__swipe--next',
            prevEl: '.project__swipe--prev',
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <GatsbyImage imgClassName="project__image" image={getImage(image1)} alt={imageAlt} />
          </SwiperSlide>
          <SwiperSlide>
            <GatsbyImage imgClassName="project__image" image={getImage(image2)} alt={imageAlt} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="project__text-container">
        <h2 className="heading-secondary project__title">{title}</h2>
        <div className="project__description" dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className="project__stack">Stack: {stack}</div>
        <div className="project__buttons">
          {gitUrl && (
            <a href={gitUrl} className="btn btn--white" target="_blank" rel="noopener noreferrer">
              CODE
            </a>
          )}

          {websiteUrl && (
            <a href={websiteUrl} className="btn btn--white" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
