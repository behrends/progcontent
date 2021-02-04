import React from 'react';
import { Link } from 'gatsby';

const CourseCard = ({ id, link, title, description, wip }) => {
  const wipNote = (
    <p className="italic text-indigo-500">
      An diesem Kurs wird noch gearbeitet
    </p>
  );
  return (
    <Link
      to={link}
      key={id}
      className="p-2 bg-white rounded-xl shadow-md hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <h2 className="text-2xl">{title}</h2>
      <p>{description}</p>
      {wip && wipNote}
    </Link>
  );
};

export default CourseCard;
