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

const LinkTitle = styled.h4`
  color: darkgrey;
  margin-bottom: 0;
`;

export default ({ prev = null, next = null }) => {
  if (!prev && !next) {
    return null;
  }

  // display single next link at righter end if no prev link
  // TODO: could we get rid of this with better styling?
  if (!prev) {
    return (
      <SingleNextLink>
        <Link to={next.link}>
          <LinkTitle>Weiter</LinkTitle>
          {next.title}
        </Link>
      </SingleNextLink>
    );
  }

  return (
    <PrevAndNextLinks>
      {prev && (
        <Link to={prev.link}>
          <LinkTitle>Zurück</LinkTitle>
          {prev.title}
        </Link>
      )}
      {next && (
        <Link to={next.link}>
          <LinkTitle>Weiter</LinkTitle>
          {next.title}
        </Link>
      )}
    </PrevAndNextLinks>
  );
};
