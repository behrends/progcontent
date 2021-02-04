import React from 'react';

const ArticleTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const ActualContentComponent =
    contentComponent || (({ children }) => <div>{children}</div>);
  return (
    <div class="mx-auto mt-4 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl">
      <h1>{title}</h1>
      <ActualContentComponent>{content}</ActualContentComponent>
    </div>
  );
};

export default ArticleTemplate;