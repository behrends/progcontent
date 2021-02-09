import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const CourseCard = ({ id, link, title, description, image, wip }) => {
  const wipNote = (
    <p className="italic text-indigo-500">
      An diesem Kurs wird noch gearbeitet
    </p>
  );
  return (
    <Link
      to={link}
      key={id}
      className="p-2 bg-white rounded-xl shadow-xl ring-1 ring-indigo-100 hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <Img fluid={image.childImageSharp.fluid} />
      <h2 className="text-4xl">{title}</h2>
      <p className="text-xl">{description}</p>
      {wip && wipNote}
    </Link>
  );
};

export default CourseCard;
