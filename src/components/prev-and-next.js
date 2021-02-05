import React from 'react';
import { Link } from 'gatsby';

export default ({ prev = null, next = null }) => {
  if (!prev && !next) return null;

  let NavLink = ({ target, children }) => (
    <Link
      to={target}
      className="text-sm lg:text-base text-indigo-500 hover:text-indigo-700"
    >
      {children}
    </Link>
  );

  let PrevLink = () => (
    <NavLink target={prev.link}>
      <span>&#10229; &nbsp;</span>
      {prev.title}
    </NavLink>
  );

  let NextLink = () => (
    <NavLink target={next.link}>
      {next.title}
      <span>&nbsp; &#10230;</span>
    </NavLink>
  );

  // if prev/next null, create empty element to make justify-between work
  if (!prev) PrevLink = () => <div />;
  if (!next) NextLink = () => <div />;

  return (
    <div className="flex flex-row justify-between">
      <PrevLink />
      <NextLink />
    </div>
  );
};
