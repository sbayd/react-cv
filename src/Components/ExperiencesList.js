import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import BulmaCSS from 'bulma/css/bulma.css'
import Styles from '../styles.css';
import Section from './Section';
import { getFixedUrl } from '../utils';

export default class ExperiencesList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({})
  }

  render() {
    const { title, description, icon, items } = this.props;
    return (
      <Section
        title={title}
        content={description}
        icon={icon}
      >
        <div className={mergeClassNames(BulmaCSS.container, BulmaCSS['is-medium'])}>
          {items.map((experienceItem) => {
            const { company, companyWebSite, companyMeta, datesBetween, title, description } = experienceItem;
            return (
              <div className={mergeClassNames(BulmaCSS.content)}>
                <div className={mergeClassNames(BulmaCSS.level, BulmaCSS['is-marginless'], BulmaCSS['is-padingless'])}>
                  <h5 className={mergeClassNames(BulmaCSS.title, BulmaCSS['is-marginless'], BulmaCSS['level-left'], BulmaCSS['is-size-5'])}>{title}
                  </h5>
                  <span className={mergeClassNames(BulmaCSS['level-right'])}>{datesBetween}</span>
                </div>
                <h6
                  className={mergeClassNames(BulmaCSS.subtitle, Styles.companyTitle, BulmaCSS['is-size-6'])}
                >
                  {companyWebSite ? <a href={getFixedUrl(companyWebSite)} target='_blank' >{company}</a> : company}
                </h6>
                { companyMeta
                  ? <span className={mergeClassNames(Styles.companyMeta)}>{`(${companyMeta})`}</span>
                  : null}
                <p>
                  {description}
                </p>
              </div>);
          })}
        </div>
      </Section>
    );
  }
}
