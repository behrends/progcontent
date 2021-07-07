function checkAnswer(answer) {
  let userAnswer = document.getElementById('answerText').value;
  if (!userAnswer) return;
  userAnswer = userAnswer.trim();
  let result = userAnswer === answer ? 'Stimmt!' : 'Leider falsch.';
  alert(result);
}

const Quiz = ({ question, answer }) => {
  if (!question || !answer)
    return <h3>Ich bin ein Quiz ohne Frage/Antwort!</h3>;

  return (
    <p>
      <h4>{question}</h4>
      <input
        id="answerText"
        type="text"
        placeholder="Antwort"
      ></input>
      <button
        onClick={() => checkAnswer(answer)}
        style={{ marginLeft: '10px' }}
      >
        Antwort überprüfen
      </button>
    </p>
  );
};

export default Quiz;
