import PropTypes from 'prop-types';

export const bookType = {
  _id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  pages: PropTypes.number,
  excerpt: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  __v: PropTypes.number,
};
