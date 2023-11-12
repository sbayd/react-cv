import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import BulmaCSS from '../bulma.module.css';
import Styles from '../styles.module.css';
import Section from './Section';
import { getFixedUrl } from '../utils';
import MarkdownRenderer from './MarkdownRenderer';

export default class ProjectsList extends React.Component {
  static propTypes = {
    groups: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string])
  }

  render() {
    const { title, description, icon, groups } = this.props;
    return (
      <Section
        title={title}
        content={description}
        icon={icon}
      >
        <div className={mergeClassNames(BulmaCSS.container, BulmaCSS['is-medium'])}>

          {groups.map((group, i) => {
            const { sectionHeader, description, items } = group;
            return (<div className={mergeClassNames(BulmaCSS.container, 'project-group-external', Styles.avoidBreakingOnPrint,  Styles['project-group']) } key={i}>
              <div className={mergeClassNames(BulmaCSS.content)}>
                <div className={mergeClassNames(BulmaCSS['is-marginless'])}>
                  <h5 className={mergeClassNames(BulmaCSS.title, Styles.companyTitle, BulmaCSS['is-size-5'])}>
                    {sectionHeader}
                  </h5>
                  <span className={mergeClassNames(Styles.projectMeta)}> - {description}</span>
                </div>
              </div>
              <hr className={Styles.divider} />
              <div className={BulmaCSS.row}>
                {items.map((project, i) => {
                  const { projectUrl, title, description } = project;
                  return (
                    <div className={mergeClassNames(BulmaCSS['u-full-width'], Styles.avoidBreakingOnPrint)} key={i}>
                      <h6
                        className={mergeClassNames(Styles.projectTitle, BulmaCSS['is-size-6'])}
                      >
                        {projectUrl ? <a href={getFixedUrl(projectUrl)} target='_blank'>{title}</a> : title}
                      </h6>
                      { description ? 
                        <MarkdownRenderer
                          markdown={description}
                        />
                      : null}
                    </div>
                  );
                })}
              </div>
            </div>);
          })}
        </div>
      </Section>
    );
  }
}
