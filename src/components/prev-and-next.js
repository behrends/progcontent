import React from 'react';
import { Link } from 'gatsby';

export default ({ prev = null, next = null }) => {
  if (!prev && !next) return null;

  let PrevLink = () => (
    <Link to={prev.link} class="text-indigo-500 hover:text-indigo-700">
      <span>&#10229; &nbsp;</span>
      {prev.title}
    </Link>
  );

  let NextLink = () => (
    <Link to={next.link} class="text-indigo-500 hover:text-indigo-700">      
      {next.title}
      <span>&nbsp; &#10230;</span>
    </Link>
  );

  // if prev/next null, create empty element to make justify-between work
  if (!prev) PrevLink = () => <div/>;
  if (!next) NextLink = () => <div/>;

  return (
    <div class="flex flex-row justify-between">
      <PrevLink/>
      <NextLink/>
    </div>
  );
};
