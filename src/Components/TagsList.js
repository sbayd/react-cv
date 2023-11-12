import React from 'react';
import PropTypes from 'prop-types';
import mergeClass from 'classnames';
import Styles from '../styles.module.css';
import Section from './Section';
import BulmaCSS from '../bulma.module.css';

export const PureTagList = ({ tags = [], tagClass }) => (
  <div className={mergeClass(BulmaCSS.tags, BulmaCSS['are-medium'])}>
    {tags.map((tag, i) => {
      return (
        <div className={mergeClass(BulmaCSS.tag, BulmaCSS[tagClass])} key={i}>
          {tag}
        </div>
      );
    })}
  </div>
);

PureTagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string, PropTypes.shape({})),
  tagClass: PropTypes.string
};

PureTagList.defaultProps = {
  tagClass: 'is-info'
}

export default class TagsList extends React.Component {
  static propTypes = {
    items: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({})), 
      PropTypes.arrayOf(PropTypes.string)
    ]),
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string])
  }

  render() {
    const { title, description, icon, items } = this.props;
    return (
      <Section
        title={title}
        content={description}
        icon={icon}
      >
        <PureTagList tags={items} tagClass={'is-primary'} />
      </Section>
    );
  }
}
