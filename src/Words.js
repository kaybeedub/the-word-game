import React, { useState } from 'react';
import faker from 'faker';
import Stats from './Stats';

function Words() {
  let [words, setWords] = useState([]);

  const generateWord = type => {
    const method =
      type === 'noun' ? faker.company.bsNoun : faker.company.bsAdjective;
    return {
      type: type,
      text: method(),
    };
  };

  const handleClick = e => {
    const type = e.target.id;
    const newWord = generateWord(type);
    const newWords = [...words, newWord];
    setWords(newWords);
  };

  const renderWords = words.map(word => {
    if (word.type === 'noun') {
      return <button className="btn btn-primary">{word.text} (noun)</button>;
    } else {
      return (
        <button className="btn btn-danger">{word.text} (adjective)</button>
      );
    }
  });

  return (
    <div>
      <Stats words={words} />
      <div>
        <button
          type="button"
          className="btn btn-primary"
          id="noun"
          onClick={handleClick}
        >
          Add Noun
        </button>
        <button
          type="button"
          className="btn btn-danger"
          id="adjective"
          onClick={handleClick}
        >
          Add Adjective
        </button>
      </div>
      <div>{renderWords}</div>
    </div>
  );
}

export default Words;
