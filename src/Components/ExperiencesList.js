import React from 'react';
import PropTypes from 'prop-types';
import CommonList from './CommonList';
import '../styles.module.css';

function ExperiencesList({ items, ...props }) {
  const convertedItems = (items || []).map((item) => {
    const {
      company, companyWebSite, companyMeta, datesBetween, ...rest
    } = item;
    return {
      authority: company,
      authorityWebSite: companyWebSite,
      authorityMeta: companyMeta,
      rightSide: datesBetween,
      ...rest,
    };
  });
  return (
    <CommonList
      {...props}
      items={convertedItems}
    />
  );
}

ExperiencesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
};

export default ExperiencesList;
