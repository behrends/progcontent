import React from 'react';
import PropTypes from 'prop-types';
import { ArticleTemplate } from '../../templates/markdown-unit';

const ArticlePreview = ({ entry, widgetFor }) => {
  return (
    <ArticleTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  );
};

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ArticlePreview;
