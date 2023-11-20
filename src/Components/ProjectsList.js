import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import BulmaCSS from '../bulma.module.css';
import Styles from '../styles.module.css';
import Section from './Section';
import { getFixedUrl } from '../utils';
import MarkdownRenderer from './MarkdownRenderer';

export default function ProjectsList({
  title, description, icon, groups,
}) {
  return (
    <Section
      title={title}
      content={description}
      icon={icon}
    >
      <div className={mergeClassNames(BulmaCSS.container, BulmaCSS['is-medium'])}>

        {groups.map((group, index) => {
          const { sectionHeader, description: groupDesc, items } = group;
          return (
            <div
              className={mergeClassNames(BulmaCSS.container, 'project-group-external', Styles.avoidBreakingOnPrint, Styles['project-group'])}
              key={index}
            >
              <div className={mergeClassNames(BulmaCSS.content)}>
                <div className={mergeClassNames(BulmaCSS['is-marginless'])}>
                  <h5 className={mergeClassNames(BulmaCSS.title, Styles.companyTitle, BulmaCSS['is-size-5'])}>
                    {sectionHeader}
                  </h5>
                  <span className={mergeClassNames(Styles.projectMeta)}>
                    {' '}
                    -
                    {groupDesc}
                  </span>
                </div>
              </div>
              <hr className={Styles.divider} />
              <div className={BulmaCSS.row}>
                {items.map((project, i) => {
                  const { projectUrl, title: itemTitle, description: itemDesc } = project;
                  return (
                    <div className={mergeClassNames(BulmaCSS['u-full-width'], Styles.avoidBreakingOnPrint)} key={i}>
                      <h6
                        className={mergeClassNames(Styles.projectTitle, BulmaCSS['is-size-6'])}
                      >
                        {projectUrl ? <a href={getFixedUrl(projectUrl)} target="_blank" rel="noreferrer">{itemTitle}</a> : itemTitle}
                      </h6>
                      { itemDesc
                        ? (
                          <MarkdownRenderer
                            markdown={itemDesc}
                          />
                        )
                        : null}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

ProjectsList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
};
