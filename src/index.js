import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BulmaCSS from 'bulma/css/bulma.css'
import mergeClassNames from 'classnames'
import Sidebar from './Components/Sidebar'
import Styles from './styles.css';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import Section from './Components/Section'
import { CVData } from './data';
import ExperiencesList from './Components/ExperiencesList'
import ProjectsList from './Components/ProjectsList'
import TagsList from './Components/TagsList'

const componnentMap = {
  'experiences-list': ExperiencesList,
  text: Section,
  'projects-list': ProjectsList,
  'tag-list': TagsList
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
    ...CVData
  }

  render() {
    return (
      <div className={mergeClassNames(Styles.appContainer)}>
        <main className={BulmaCSS.container}>
          <div className={mergeClassNames(Styles.cvContainer, BulmaCSS.columns)}>
            <div className={mergeClassNames(BulmaCSS.column, BulmaCSS['is-three-quarters'])}>
              {
                this.props.sections.map((sectionDetails) => {
                  const { type } = sectionDetails;
                  const Comp = componnentMap[type] || Section; // Fallback to section for any case.
                  return <Comp {...sectionDetails} />
                })
              }
            </div>
            <Sidebar
              {...this.props.personalData}
            />
          </div>
        </main>
      </div>
    )
  }
}
