import React from 'react';
import { ThemeContext , themes } from './Theme'
import Card from './Card'

function App() {
  return (
    <ThemeContext.Provider value={themes.secondary}>
      <Card />
    </ThemeContext.Provider>
  );
}

export default App;