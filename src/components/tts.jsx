import React, { useState, useEffect } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [lang, setLang] = useState('en-US');
  const [voices, setVoices] = useState([]);
  const [voice, setVoice] = useState('');

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);

      // Set default voices for English and German
      if (lang === 'en-US') {
        // const defaultEnglishVoice = availab` /leVoices.find(v => v.lang === '');
        setVoice("Aaron");
      } else if (lang === 'de-DE') {
        // const defaultGermanVoice = availableVoices.find(v => v.lang === 'Martin');
        // setVoice(defaultGermanVoice?.name || '');
        // const defaultGermanVoice = "Martin";
        setVoice("Martin");
      }
    };

    // Ensure voices are loaded when the component mounts
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
  }, [lang]);

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    if (voice) {
      utterance.voice = voices.find(v => v.name === voice);
    }
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-4">
      <section className="flex flex-col justify-center items-center gap-6 text-gray-600 body-font mb-12 bg-yellow-400 p-8">
        <div>
          <label className="block mt-2">Language of speech output:</label>
          <select className="border p-2 mt-2" onChange={(e) => setLang(e.target.value)} value={lang}>
            <option value="en-US">English (US)</option>
            {/* <option value="es-ES">Spanish (Spain)</option> */}
            {/* <option value="fr-FR">French (France)</option> */}
            <option value="de-DE">German/Deutsch (German)</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        <div>
          <label className="block mt-2">Voice:</label>
          <select className="border p-2 mt-2" onChange={(e) => setVoice(e.target.value)} value={voice}>
            {voices
              .filter(v => v.lang === lang)
              .map((v) => (
                <option key={v.name} value={v.name}>
                  {v.name} ({v.lang})
                </option>
              ))}
          </select>
        </div>
      </section>

      <textarea
        className="border p-2 h-32 w-full bg-yellow-100"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
      />

      <button className="text-gray-600 p-2 mt-2 h-16 w-full bg-yellow-400" onClick={handleSpeak}>
        Speak
      </button>
    </div>
  );
};

export default TextToSpeech;
