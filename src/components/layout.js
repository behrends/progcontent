import React from 'react';

import 'prismjs/themes/prism-coy.css';

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 740, padding: `0 1rem` }}>
    {children}
  </div>
);
