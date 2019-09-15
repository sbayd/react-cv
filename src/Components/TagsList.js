import React from 'react';
import PropTypes from 'prop-types';
import mergeClass from 'classnames';
import Styles from '../styles.css';
import Section from './Section';
import BulmaCSS from 'bulma/css/bulma.css'

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
        <div className={mergeClass(BulmaCSS.tags)} >
          {items.map((tag) => {
            return (
              <div className={mergeClass(BulmaCSS.tag, BulmaCSS['is-info'])} >
                {tag}
              </div>
            );
          })}
        </div>
      </Section>
    );
  }
}
