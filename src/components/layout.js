import React from 'react';
import { Link } from 'gatsby';

import 'prismjs/themes/prism-coy.css';

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 740, padding: `0 1rem` }}>
    <Link to="/">Inhalt</Link>
    {children}
  </div>
);
