import React from 'react';

function Stats(props) {
  let allNouns = props.words.filter(word => word.type === 'noun');
  let allAdjs = props.words.filter(word => word.type === 'adjective');

  return (
    <div>
      <h1>The Word Game ({props.words.length} words)</h1>
      <div>
        <p>
          You've generated{' '}
          <style className="btn btn-primary">{allNouns.length} </style> nouns
          and <style className="btn btn-danger">{allAdjs.length} </style>{' '}
          adjectives!
        </p>
      </div>
    </div>
  );
}

export default Stats;
