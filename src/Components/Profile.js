import React from 'react';

import mc from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope, faPhone, faGlobeAmericas, faExclamation, faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import B from '../bulma.module.css';
import { formatAnchorValue } from '../utils';
import Styles from '../styles.module.css';

const iconMap = {
  email: faEnvelope,
  phone: faPhone,
  location: faMapMarkerAlt,
  website: faGlobeAmericas,
  linkedin: faLinkedin,
  github: faGithub,
  twitter: faTwitter,
};

export function ContactList({ items = [] }) {
  return (
    <div className={mc(Styles.contactListContainer, B['has-text-white'])}>
      {items.map((item, i) => {
        const icon = iconMap[item.type] || faExclamation;
        return (
          <div className={Styles.contactListItem} key={i}>
            <FontAwesomeIcon icon={icon} />
            <a className={Styles.contactListItemContent} href={formatAnchorValue(item.type, item.value)} target="_blank" rel="noreferrer">
              {item.value}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default function Profile({
  name, title, contacts, image,
}) {
  return (
    <div className={mc(B.container, B.box, B.hero, B['is-primary'], B['is-paddingless'], B['is-marginless'])}>
      <div className={B['hero-body']}>
        <div className={mc(B.columns)}>
          <div className={mc(B.column, B['is-full'])}>
            <div className={B.level}>
              <div className={B['level-left']}>
                <div className={B['level-item']}>
                  <figure className={mc(B.image, B['is-128x128'])}>
                    <img className={B['is-rounded']} src={image} alt="Profile" />
                  </figure>
                </div>
                <div className={B['has-text-centered']}>
                  <h1 className={mc(B.title, B['is-size-4'])}>{name}</h1>
                  <h3 className={mc(B.subtitle, B['is-size-6'])}>{title}</h3>
                </div>
              </div>
              <div className={B['level-right']}>
                <div className={B['level-item']}>
                  <ContactList
                    items={contacts}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
