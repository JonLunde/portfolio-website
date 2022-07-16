import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
    frontmatter: {
      title,
      image1,
      image2,
      image3,
      imageAlt1,
      imageAlt2,
      imageAlt3,
      stack,
      gitUrl,
      websiteUrl,
    },
    html: text,
  } = props;

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  let imageArray = [image1, image2, image3];
  imageArray = imageArray.filter((image) => image !== null);
  const imageAltArray = [imageAlt1, imageAlt2, imageAlt3];

  // Render images with navigation and touchscroll if there are more than one.
  const renderImages =
    imageArray.length > 1 ? (
      <div>
        {/* <button type="button" className="project__swipe project__swipe--prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button type="button" className="project__swipe project__swipe--next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button> */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          scrollbar={{ draggable: true }}
          navigation={{
            nextEl: '.project__swipe--next',
            prevEl: '.project__swipe--prev',
          }}
          pagination={{ clickable: true }}
        >
          {imageArray.map((image, i) => (
            <SwiperSlide key={image.id}>
              <GatsbyImage
                imgClassName="project__image"
                image={getImage(image)}
                alt={imageAltArray[i]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    ) : (
      <GatsbyImage imgClassName="project__image" image={getImage(image1)} alt={imageAltArray[0]} />
    );

  return (
    <div className="project">
      <div className="project__image-container">{renderImages}</div>

      <div className="project__text-container">
        <h2 className="heading-secondary project__title">{title}</h2>
        <div className="project__description" dangerouslySetInnerHTML={{ __html: text }} />
        <div className="project__stack">Stack: {stack}</div>
        <div className="project__buttons">
          {gitUrl && (
            <a href={gitUrl} className="btn btn--white" target="_blank" rel="noopener noreferrer">
              CODE
            </a>
          )}

          {websiteUrl && (
            <a
              href={websiteUrl}
              className="btn btn--white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
