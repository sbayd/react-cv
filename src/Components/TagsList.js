import React from 'react';
import PropTypes from 'prop-types';
import mergeClass from 'classnames';
import '../styles.module.css';
import Section from './Section';
import BulmaCSS from '../bulma.module.css';

export function PureTagList({ tags = [], tagClass }) {
  return (
    <div className={mergeClass(BulmaCSS.tags, BulmaCSS['are-medium'])}>
      {tags.map((tag, i) => (
        <div className={mergeClass(BulmaCSS.tag, BulmaCSS[tagClass])} key={i}>
          {tag}
        </div>
      ))}
    </div>
  );
}

PureTagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string, PropTypes.shape({})).isRequired,
  tagClass: PropTypes.string,
};

PureTagList.defaultProps = {
  tagClass: 'is-info',
};

export default function TagsList({
  title, description, icon, items,
}) {
  return (
    <Section
      title={title}
      content={description}
      icon={icon}
    >
      <PureTagList tags={items} tagClass="is-primary" />
    </Section>
  );
}

TagsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]).isRequired,
};
