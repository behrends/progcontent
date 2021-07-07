import Image from 'next/image';
import Link from 'next/link';

const CourseCard = ({ link, title, description, image, wip }) => {
  const wipNote = (
    <p className="italic font-thin">
      An diesem Kurs wird noch gearbeitet
    </p>
  );
  return (
    <Link href={link}>
      <div className="m-4 p-2 w-72 self-stretch cursor-pointer  bg-white rounded-xl shadow-xl ring-1 ring-indigo-100 hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105">
        <Image layout="fixed" src={image} alt={title} />
        <h2 className="m-0 p-0 border-0 text-3xl font-bold">
          {title}
        </h2>
        <p className="text-xl">{description}</p>
        {wip && wipNote}
      </div>
    </Link>
  );
};

export default CourseCard;
