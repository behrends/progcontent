import React from 'react';

function checkAnswer(answer) {
  const radioBtn = document.querySelector(
    'input[name="choice"]:checked'
  );
  if (!radioBtn) return;
  const userAnswer = radioBtn.value;
  let result = userAnswer === answer ? 'Stimmt!' : 'Leider falsch.';
  alert(result);
}

export default ({ question, choices, answer }) => {
  if (!question || !choices || !answer) return null;

  return (
    <p>
      <h4>{question}</h4>
      <label style={{ fontFamily: 'Courier New, monospace' }}>
        <input
          style={{ marginRight: '5px' }}
          type="radio"
          name="choice"
          value="1"
        />
        {choices[0]}
      </label>
      <br />
      <label style={{ fontFamily: 'Courier New, monospace' }}>
        <input
          style={{ marginRight: '5px' }}
          type="radio"
          name="choice"
          value="2"
        />
        {choices[1]}
      </label>
      <br />
      <label style={{ fontFamily: 'Courier New, monospace' }}>
        <input
          style={{ marginRight: '5px' }}
          type="radio"
          name="choice"
          value="3"
        />
        {choices[2]}
      </label>
      <br />
      <button
        onClick={() => checkAnswer(answer)}
        style={{ marginTop: '10px' }}
      >
        Antwort überprüfen
      </button>
    </p>
  );
};
