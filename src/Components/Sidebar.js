import React from 'react';

import mergeClassNames from 'classnames';
import BulmaCSS from 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faGlobeAmericas, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { formatAnchorValue } from '../utils';

const iconMap = {
  email: faEnvelope,
  phone: faPhone,
  website: faGlobeAmericas,
  linkedin: faLinkedin,
  github: faGithub,
  twitter: faTwitter
};

class ContactList extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => {
          const icon = iconMap[item.type] || faExclamation;
          return <div>
            <FontAwesomeIcon icon={icon} />
            <a href={formatAnchorValue(item.value)} target='_blank'>
              {item.value}
            </a>
          </div>
        })}
      </div>
    )
  }
}

export default class Sidebar extends React.Component {
  render() {
    const { name, title, contacts } = this.props
    return (
      <div className={mergeClassNames(BulmaCSS.container, BulmaCSS.box)}>
        <figure className={mergeClassNames(BulmaCSS.imagee, BulmaCSS['is-128x128'])}>
          <img src='https://bulma.io/images/placeholders/128x128.png' />
        </figure>
        <h1 className={mergeClassNames(BulmaCSS.title, BulmaCSS['is-size-4'])}>{name}</h1>
        <h3 className={mergeClassNames(BulmaCSS.subtitle, BulmaCSS['is-size-6'])}>{title}</h3>
        <ContactList
          items={contacts}
        />
      </div>
    );
  }
}
