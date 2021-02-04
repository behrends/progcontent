import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PrevAndNextLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SingleNextLink = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LinkTitle = styled.span`
  color: darkgrey;
  font-size: 1.2em;
`;

export default ({ prev = null, next = null }) => {
  if (!prev && !next) {
    return null;
  }

  // display single next link at righter end if no prev link
  // TODO: could we get rid of this with better styling?
  if (!prev) {
    return (
      <SingleNextLink className="prev-next-links">
        <Link to={next.link}>
          {next.title}
          <LinkTitle>&nbsp; &#10230;</LinkTitle>
        </Link>
      </SingleNextLink>
    );
  }

  return (
    <PrevAndNextLinks className="prev-next-links">
      {prev && (
        <Link to={prev.link}>
          <LinkTitle>&#10229; &nbsp;</LinkTitle>
          {prev.title}
        </Link>
      )}
      {next && (
        <Link to={next.link}>
          {next.title}
          <LinkTitle>&nbsp; &#10230;</LinkTitle>
        </Link>
      )}
    </PrevAndNextLinks>
  );
};
