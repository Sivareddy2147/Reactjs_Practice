import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');

  const SetChange = (event) => {
    setText(event.target.value);
  };

  const isOverLimit = text.length > 50;

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <textarea
        value={text}
        onChange={SetChange}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        placeholder="Type your text here..."
      />
      <p style={{ color: isOverLimit ? 'red' : 'black', fontWeight: 'bold' }}>
        Character Count: {text.length}
        
      </p>
    </div>
  );
}

export default CharacterCounter;