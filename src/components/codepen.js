import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ id, height, defaultTabs }) => {
  let theHeight = height || 300;
  let theDefaultTabs = defaultTabs || 'css,result';
  return (
    <>
      <Helmet>
        <script
          async
          src="https://static.codepen.io/assets/embed/ei.js"
        />
      </Helmet>
      <p
        className="codepen"
        data-height={theHeight}
        data-theme-id="dark"
        data-default-tab={theDefaultTabs}
        data-user="behrends"
        data-slug-hash={id}
        style={{
          height: `${theHeight}px`,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid',
          margin: '1em 0',
          padding: '1em'
        }}
        data-pen-title="Cascade"
      ></p>
    </>
  );
};
