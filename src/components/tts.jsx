import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [lang, setLang] = useState('en-US');
  const [voice, setVoice] = useState(null);

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    if (voice) {
      utterance.voice = speechSynthesis.getVoices().find(v => v.name === voice);
    }
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-4">

        <section className="flex flex-col justify-center items-center gap-6 text-gray-600 body-font mb-12 bg-yellow-400 p-8">
                <div>
      <label className="block mt-2">Language of speech output:</label>
      <select className="border p-2 mt-2" onChange={(e) => setLang(e.target.value)}>
        <option value="en-US">English (US)</option>
        <option value="es-ES">Spanish (Spain)</option>
        <option value="fr-FR">French (France)</option>
        <option value="de-DE">German/Deutsch (German)</option>
        {/* Add more languages as needed */}
      </select>

                </div>

                <div>
      <label className="block mt-2">Gender:</label>
      <select className="border p-2 mt-2" onChange={(e) => setVoice(e.target.value)}>
        {speechSynthesis.getVoices().map((v) => (
          <option key={v.name} value={v.name}>
            {v.name} ({v.lang})
          </option>
        ))}
      </select></div>
</section>


      <textarea
        className="border p-2 h-32 w-full bg-yellow-100"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />


      <button className="text-gray-600 p-2 mt-2 h-16 w-full bg-yellow-400" onClick={handleSpeak}>
        Speak
      </button>


    </div>
  );
};

export default TextToSpeech;
