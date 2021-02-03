import React from 'react';

const ArticleTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const ActualContentComponent =
    contentComponent || (({ children }) => <div>{children}</div>);
  return (
    <div class="prose">
      <h1>{title}</h1>
      <ActualContentComponent>{content}</ActualContentComponent>
    </div>
  );
};

export default ArticleTemplate;