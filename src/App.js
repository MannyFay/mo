import React from 'react';
import TextToSpeech from './components/tts';

function App() {
  return (
    <div className="App">
      <header className="App-header flex mt-12">
        <h1 className="mx-auto text-5xl font-bold p-4">🔇...off!</h1>
      </header>
      <main className="p-4">
        <TextToSpeech />
      </main>
    </div>
  );
}

export default App;
