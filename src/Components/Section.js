import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faGraduationCap,
  faArchive,
  faRocket,
  faTasks,
  faComment,
  faLanguage,
  faCubes,
  faExclamation,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import BulmaCSS from '../bulma.module.css';
import Styles from '../styles.module.css';
import MarkdownRenderer from './MarkdownRenderer';

const predefinedIcons = {
  graduation: faGraduationCap,
  book: faBook,
  comments: faComment,
  tasks: faTasks,
  archive: faArchive,
  rocket: faRocket,
  language: faLanguage,
  cubes: faCubes,
  usertie: faUserTie,
};

export default function Section({
  title, content, icon, children, xtraClassName,
}) {
  const iconComp = typeof icon === 'string' ? (predefinedIcons[icon] || faExclamation) : icon;

  return (
    <div className={mergeClassNames(BulmaCSS.container, Styles.sectionContainer, xtraClassName)}>
      <div className={mergeClassNames(BulmaCSS.columns)}>
        <div className={mergeClassNames(BulmaCSS['is-full'], BulmaCSS.column)}>
          <h4 className={mergeClassNames(BulmaCSS.title, Styles.sectionTitle, BulmaCSS['is-size-4'], Styles.avoidBreakingOnPrint)}>
            <span className={Styles.sectionIcon}>
              <FontAwesomeIcon icon={iconComp} />
            </span>
            {title}
          </h4>
          <hr className={Styles.diver} />
          {content
      && (
      <div className={mergeClassNames(Styles.sectionContent)}>
        {
          typeof content === 'string'
            ? (
              <MarkdownRenderer
                markdown={content}
              />
            )
            : content
        }
      </div>
      )}
          {children
        && (
        <div className={mergeClassNames(Styles.sectionContent, BulmaCSS.container, BulmaCSS['is-small'])}>
          {children}
        </div>
        )}
        </div>
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  xtraClassName: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
  content: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
  children: PropTypes.shape({}),
};
