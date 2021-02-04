import React from 'react';
import { Link } from 'gatsby';

const CourseCard = ({id,link,title,description}) => {
  return (
    <Link to={link} key={id} className="p-2 bg-white no-underline rounded-xl shadow-md hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-2xl">{title}</h2>
      <p>{description}</p>
    </Link>
  )
}

export default CourseCard;