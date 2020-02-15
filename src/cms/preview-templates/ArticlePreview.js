import React from 'react';
import { ArticleTemplate } from '../../templates/markdown-unit';

const ArticlePreview = ({ entry, widgetFor }) => {
  return (
    <ArticleTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  );
};

export default ArticlePreview;
