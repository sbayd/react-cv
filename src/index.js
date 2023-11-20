import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import { config } from '@fortawesome/fontawesome-svg-core';
import BulmaCSS from './bulma.module.css';
import Profile from './Components/Profile';
import Styles from './styles.module.css';
import Section from './Components/Section';
import ExperiencesList from './Components/ExperiencesList';
import ProjectsList from './Components/ProjectsList';
import TagsList from './Components/TagsList';
import CommonList from './Components/CommonList';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const componnentMap = {
  'experiences-list': ExperiencesList,
  text: Section,
  'projects-list': ProjectsList,
  'tag-list': TagsList,
  'common-list': CommonList,
};

export default function ReactCV({ personalData, sections, branding }) {
  return (
    <section className={mergeClassNames(Styles.appContainer, BulmaCSS.section)}>
      <main className={BulmaCSS.container}>
        <div className={mergeClassNames(Styles.cvContainer, BulmaCSS.box)}>
          <Profile
            {...personalData}
          />
          {
        sections.map((sectionDetails, i) => {
          const { type } = sectionDetails;
          const Comp = componnentMap[type] || Section; // Fallback to section for any case.
          return <Comp {...sectionDetails} key={i} />;
        })
      }

        </div>
      </main>
      {branding && (
      <div className={Styles.branding}>
        Craft your personalized CV effortlessly with
        {' '}
        <a href="https://github.com/sbayd/react-cv" target="_blank" rel="noreferrer">React-CV</a>
        !
        <br />
        Explore the possibilities at
        <a href="https://github.com/sbayd/react-cv" target="_blank" rel="noreferrer">React-CV</a>
        {' '}
        and set yourself apart professionally.
      </div>
      )}
    </section>
  );
}

ReactCV.propTypes = {
  personalData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['email', 'website', 'phone', 'location', 'linkedin', 'github', 'twitter']),
      value: PropTypes.string,
    })),
    languages: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      level: PropTypes.string,
    })),
    interests: PropTypes.arrayOf(PropTypes.string),
  }),
  sections: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
  })),
  branding: PropTypes.bool,
};

ReactCV.defaultProps = {
  personalData: {
    name: 'S. Berkay Aydin',
    title: 'Senior Software Developer',
    image: 'https://bulma.io/images/placeholders/128x128.png',
    contacts: [
      { type: 'email', value: 'john@example.com' },
      { type: 'phone', value: '+00 (123) 456 78 90' },
      { type: 'location', value: 'New York' },
      { type: 'website', value: 'cv.sbaydin.com' },
      { type: 'linkedin', value: 'linkedin.com/in/sbaydin' },
      { type: 'twitter', value: 'twitter.com/sbayd' },
      { type: 'github', value: 'github.com/sbayd' },
    ],
  },
  sections: [{
    type: 'text',
    title: 'Career Profile',
    content: 'When I was child, I always want to be a developer.',
    icon: 'usertie',
  }],
  branding: true,
};
