import React from 'react';
import PropTypes from 'prop-types';
import CommonList from './CommonList';
import Styles from '../styles.css';

export default class ExperiencesList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({})
  }

  render() {
    const convertedItems = (this.props.items || []).map((item) => {
      const { company, companyWebSite, companyMeta, datesBetween, ...rest } = item;
      return {
        authority: company,
        authorityWebSite: companyWebSite,
        authorityMeta: companyMeta,
        rightSide: datesBetween,
        ...rest
      };
    })
    return (
      <CommonList
        {...this.props}
        xtraClassName={Styles.avoidBreakingOnPrint}
        items={convertedItems}
      />
    );
  }
}
