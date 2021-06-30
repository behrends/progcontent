import React from 'react';
import { Link } from 'gatsby';

const PrevAndNex = ({ prev = null, next = null }) => {
  if (!prev && !next) return null;

  let NavLink = ({ target, children }) => (
    <Link
      to={target}
      className="align-text-top text-sm lg:text-base text-indigo-500 hover:text-indigo-700"
    >
      {children}
    </Link>
  );

  let PrevLink = () => (
    <NavLink target={prev.link}>
      <span className="text-3xl md:text-base">&#10229; &nbsp;</span>
      <span className="hidden md:inline">{prev.title}</span>
    </NavLink>
  );

  let NextLink = () => (
    <NavLink target={next.link}>
      <span className="hidden md:inline">{next.title}</span>
      <span className="text-3xl md:text-base">&nbsp; &#10230;</span>
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

export default PrevAndNex;
