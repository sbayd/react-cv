import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import BulmaCSS from '../bulma.module.css';
import Styles from '../styles.module.css';
import Section from './Section';
import { getFixedUrl } from '../utils';
import { PureTagList } from './TagsList';
import MarkdownRenderer from './MarkdownRenderer';

export default function CommonList({
  title, description, icon, items, xtraClassName,
}) {
  return (
    <Section
      xtraClassName={xtraClassName}
      title={title}
      content={description}
      icon={icon}
    >
      <div className={mergeClassNames(BulmaCSS.container, BulmaCSS['is-medium'], Styles.commonListContainer)}>
        {items.map((item, i) => {
          const {
            authority,
            authorityWebSite, authorityMeta, rightSide,
            title: itemTitle,
            description: itemDesc,
            descriptionTags,
          } = item;
          return (
            <div className={mergeClassNames(BulmaCSS.content, Styles.avoidBreakingOnPrint)} key={i}>
              <div className={mergeClassNames(BulmaCSS.level, BulmaCSS['is-marginless'], BulmaCSS['is-paddingless'])}>
                <h5 className={mergeClassNames(BulmaCSS.title, BulmaCSS['is-marginless'], BulmaCSS['level-left'], BulmaCSS['is-size-5'])}>
                  {itemTitle}
                </h5>
                <span className={mergeClassNames(BulmaCSS['level-right'])}>{rightSide}</span>
              </div>
              <h6
                className={mergeClassNames(BulmaCSS.subtitle, Styles.companyTitle, BulmaCSS['is-size-6'])}
              >
                {authorityWebSite ? <a href={getFixedUrl(authorityWebSite)} target="_blank" rel="noreferrer">{authority}</a> : authority}
              </h6>
              { authorityMeta
                ? <span className={mergeClassNames(Styles.companyMeta)}>{`(${authorityMeta})`}</span>
                : null}
              <div>
                {descriptionTags && <PureTagList tags={descriptionTags} tagClass="is-info" /> }
                <MarkdownRenderer
                  markdown={itemDesc}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

CommonList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]).isRequired,
};
