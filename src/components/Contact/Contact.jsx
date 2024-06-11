import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import SocialLinks from '../SocialLinks/SocialLinks';

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;

  return (
      <section id="contact" className="st-dark-bg">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title="Контакты" />
        <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
          <div className="row d-flex">
            <div className="col-lg-6">
              <h3 className="st-contact-title">Запись на консультацию</h3>
              <div className="st-contact-text">
                Пожалуйста, запишитесь на консультацию, связавшись со мной через мессенджеры.
              </div>
              <SocialLinks data={socialData} />
              <div className="st-height-b0 st-height-lg-b30"></div>
            </div>
            <div className="col-lg-6">
              <div className="st-height-b0 st-height-lg-b40"></div>
              <h3 className="st-contact-title">{title}</h3>
              <div className="st-contact-text">{text}</div>
              <div className="st-contact-info-wrap">
                <div className="st-single-contact-info">
                  <div className="st-icon-wrap">
                    <Icon icon="fa-regular:envelope" />
                  </div>
                  <div className="st-single-info-details">
                    <h4>Email</h4>
                    <Link to="#">sergey.psycholog@yandex.ru</Link>
                  </div>
                </div>
                <div className="st-single-contact-info">
                  <div className="st-icon-wrap">
                    <Icon icon="fa-solid:phone-alt" />
                  </div>
                  <div className="st-single-info-details">
                    <h4>Phone</h4>
                    <span>+374 98811993</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }).isRequired,
  socialData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Contact;
