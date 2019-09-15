import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import BulmaCSS from 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from '../styles.css';

export default class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.shape(),
    content: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    children: PropTypes.shape({})
  }

  render() {
    return (
      <section
        className={mergeClassNames(BulmaCSS.section)}
      >
        <div className={mergeClassNames(BulmaCSS.container)}>
          <div className={mergeClassNames(BulmaCSS.columns)}>
            <div className={mergeClassNames(BulmaCSS['is-full'], BulmaCSS.column)}>
              <h4 className={mergeClassNames(BulmaCSS.title, Styles.sectionTitle, BulmaCSS['is-size-4'])}>
                <span className={Styles.sectionIcon}>
                  <FontAwesomeIcon icon={this.props.icon} />
                </span>
                {this.props.title}
              </h4>

              <div className={mergeClassNames(Styles.sectionContent)}>
                {
                  typeof this.props.content === 'string'
                    ? <p>{this.props.content}</p> : this.props.content
                }
              </div>
              {this.props.children &&
              <div className={mergeClassNames(Styles.sectionContent, BulmaCSS.container)}>
                {this.props.children}
              </div>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
