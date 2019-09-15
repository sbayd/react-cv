import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BulmaCSS from 'bulma/css/bulma.css'
import mergeClassNames from 'classnames'
import Profile from './Components/Profile'
import Styles from './styles.css';
import Section from './Components/Section'
import ExperiencesList from './Components/ExperiencesList'
import ProjectsList from './Components/ProjectsList'
import TagsList from './Components/TagsList'
import CommonList from './Components/CommonList'

const componnentMap = {
  'experiences-list': ExperiencesList,
  text: Section,
  'projects-list': ProjectsList,
  'tag-list': TagsList,
  'common-list': CommonList
};

export default class ReactCV extends Component {
  static propTypes = {
    personalData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
      contacts: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf(['email', 'website', 'phone', 'linkedin', 'github']),
        value: PropTypes.string
      })),
      languages: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        level: PropTypes.string
      })),
      interests: PropTypes.arrayOf(PropTypes.string)
    }),
    sections: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string
    }))
  }

  static defaultProps = {
    personalData: {
      name: 'John Doe',
      title: 'Senior Software Developer',
      image: 'https://bulma.io/images/placeholders/128x128.png',
      contacts: [
        { type: 'email', value: 'john@example.com' },
        { type: 'phone', value: '+00 (123) 456 78 90' },
        { type: 'website', value: 'example.com' },
        { type: 'linkedin', value: 'linkedin.com/in/notexists' },
        { type: 'twitter', value: 'twitter.com/404' },
        { type: 'github', value: 'github.com/404' }
      ]},
    sections: [{
      type: 'text',
      title: 'Career Profile',
      content: 'When I was child, I always want to be a developer.',
      icon: 'usertie'
    }]
  }

  render() {
    return (
      <section className={mergeClassNames(Styles.appContainer, BulmaCSS.section)}>
        <main className={BulmaCSS.container}>
          <div className={mergeClassNames(Styles.cvContainer, BulmaCSS.box)}>
            <Profile
              {...this.props.personalData}
            />
            {
              this.props.sections.map((sectionDetails) => {
                const { type } = sectionDetails;
                const Comp = componnentMap[type] || Section; // Fallback to section for any case.
                return <Comp {...sectionDetails} />
              })
            }

          </div>
        </main>
      </section>
    )
  }
}
