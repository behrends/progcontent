import React from 'react';

export default ({ question, answer }) => {
  if (!question || !answer)
    return <h3>Ich bin ein Quiz ohne Frage/Antwort!</h3>;

  return (
    <p>
      <h3>{question}</h3>
      <input placeholder="Antwort"></input>
    </p>
  );
};
