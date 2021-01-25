import React from 'react';
import ArticleTemplate from '../../components/article-template';

const ArticlePreview = ({ entry, widgetFor }) => {
  return (
    <ArticleTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  );
};

export default ArticlePreview;
