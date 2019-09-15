export const getFixedUrl = (url) => (
  /^(http|https|ftp)/.test(url) ? url : `https://${url}`
);

export const formatAnchorValue = (type, value) => {
  switch (type) {
    case 'email':
      return `mailto:${value}`;
    case 'phone':
      return `tel:${value}`;
    case 'website':
    case 'github':
    case 'linkedin':
    case 'twitter':
      return getFixedUrl(value);
    default:
      return value;
  }
};
