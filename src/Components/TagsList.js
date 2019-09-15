import React from 'react';
import PropTypes from 'prop-types';
import mergeClass from 'classnames';
import Styles from '../styles.css';
import Section from './Section';
import BulmaCSS from 'bulma/css/bulma.css'

export const PureTagList = ({ tags = [], tagClass }) => (
  <div className={mergeClass(BulmaCSS.tags, BulmaCSS['are-medium'])}>
    {tags.map((tag) => {
      return (
        <div className={mergeClass(BulmaCSS.tag, BulmaCSS[tagClass])} >
          {tag}
        </div>
      );
    })}
  </div>
);

PureTagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  tagClass: PropTypes.string
};

PureTagList.defaultProps = {
  tagClass: 'is-info'
}

export default class TagsList extends React.Component {
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
        <PureTagList tags={items} tagClass={'is-primary'} />
      </Section>
    );
  }
}
