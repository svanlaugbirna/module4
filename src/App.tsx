import React from 'react';
import Button from './Button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Styled Button Example</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default App;

