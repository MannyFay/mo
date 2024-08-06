import React, { useState, useEffect } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [lang, setLang] = useState('en-GB');
  const [voices, setVoices] = useState([]);
  const [voice, setVoice] = useState('');

  useEffect(() => {
    const loadVoices = () => {
      let availableVoices = speechSynthesis.getVoices();
      // Ensure voices are loaded
      if (availableVoices.length === 0) {
        // Retry loading voices if not available
        speechSynthesis.onvoiceschanged = () => {
          availableVoices = speechSynthesis.getVoices();
          setVoices(availableVoices);
          setDefaultVoice(availableVoices);
        };
      } else {
        setVoices(availableVoices);
        setDefaultVoice(availableVoices);
      }
    };

    const setDefaultVoice = (availableVoices) => {
      // Set default voices for English and German
      if (lang === 'en-GB') {
        const defaultEnglishVoice = availableVoices.find(v => v.name === 'Google UK English Male');
        setVoice(defaultEnglishVoice?.name || availableVoices.find(v => v.lang === 'en-GB')?.name);
      } else if (lang === 'de-DE') {
        const defaultGermanVoice = availableVoices.find(v => v.name === 'Martin');
        setVoice(defaultGermanVoice?.name || availableVoices.find(v => v.lang === 'de-DE')?.name);
      }
    };

    loadVoices();
  }, [lang]);

  const handleSpeak = (textToSpeak) => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang;
    if (voice) {
      utterance.voice = voices.find(v => v.name === voice);
    }
    speechSynthesis.speak(utterance);
  };

  const handleHelloSpeak = () => {
    handleSpeak('Hello.');
  };
  const handleGoodMorningSpeak = () => {
    handleSpeak('Good morning.');
  };
  const handleGoodNightSpeak = () => {
    handleSpeak('Good night. Sleep well.');
  };

  const handleYesSpeak = () => {
    handleSpeak('Yes.');
  };
  const handleNoSpeak = () => {
    handleSpeak('No.');
  };
  const handleByeSpeak = () => {
    handleSpeak('Bye.');
  };
  const handleGoodByeSpeak = () => {
    handleSpeak('Good Bye.');
  };
  const handleYouAreWelcomeSpeak = () => {
    handleSpeak("You're welcome.");
  };
  const handleFeelingWellTodaySpeak = () => {
    handleSpeak("Are you feeling well today?");
  };
  const handleDoYouLikeATeaSpeak = () => {
    handleSpeak("Do you like a tea?");
  };
  const handleDoYouLikeASoupSpeak = () => {
    handleSpeak("Do you like a soup?");
  };
  const handleDoYouLikeASkyrSpeak = () => {
    handleSpeak("Do you like a skyr?");
  };
  const handleDoYouLikeToGetUpSpeak = () => {
    handleSpeak("Do you like to get up?");
  };
  const handleDoYouLikeToWashHairSpeak = () => {
    handleSpeak("Do you like to wash your hair?");
  };
  const handleHereYouAreSpeak = () => {
    handleSpeak("Here you are.");
  };
  const handleSomethingToDrinkSpeak = () => {
    handleSpeak("Do you like something to drink?");
  };
  const handleMayIHelpYouSpeak = () => {
    handleSpeak("May I help you something?");
  };

  const handleYesPleaseSpeak = () => {
    handleSpeak("Yes, please.");
  };
  const handleThankYouSpeak = () => {
    handleSpeak("Thank you.");
  };
  const handleThankYouVeryMuchSpeak = () => {
    handleSpeak("Thank you very much.");
  };
  const handleHaveFunSpeak = () => {
    handleSpeak("Have fun!");
  };

  const handleBrushTeethSpeak = () => {
    handleSpeak("Brush your teeth, please.");
  };
  const handleWashFaceSpeak = () => {
    handleSpeak("Wash your face, please.");
  };
  const handlePutOnClothesSpeak = () => {
    handleSpeak("Put on your clothes, please.");
  };
  const handleDrinkWaterSpeak = () => {
    handleSpeak("Drink water, please.");
  };
  const handleTidyUpSpeak = () => {
    handleSpeak("Tidy up your room, please.");
  };


  return (
    <div className="p-4">
      <section className="flex flex-col justify-center items-center gap-6 text-gray-600 body-font mb-12 bg-yellow-400 p-8">
        <div>
          <label className="block mt-2">Output:</label>
          <select className="border p-2 mt-2" onChange={(e) => setLang(e.target.value)} value={lang}>
            <option value="en-GB">English (GB)</option>
            <option value="de-DE">German (Deutsch)</option>
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

      <button className="text-gray-600 p-2 mt-2 h-16 w-full bg-yellow-400" onClick={() => handleSpeak(text)}>
        Speak
      </button>

    <section className="flex gap-2 flex-wrap justify-center">
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleYesSpeak}>
        Yes
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleNoSpeak}>
        No
      </button>





      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleHelloSpeak}>
        Hello
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleGoodMorningSpeak}>
        Good Morning
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleFeelingWellTodaySpeak}>
        Are you feeling well today?
      </button>






      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleByeSpeak}>
        Bye
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleGoodByeSpeak}>
        Good Bye
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleGoodNightSpeak}>
        Good night. Sleep well.
      </button>



      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleThankYouSpeak}>
        Thank you.
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleThankYouVeryMuchSpeak}>
        Thank you very much.
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleHereYouAreSpeak}>
        Here you are.
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleYouAreWelcomeSpeak}>
        You are welcome
      </button>




      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleDoYouLikeATeaSpeak}>
        Tea?
      </button>

      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleDoYouLikeASoupSpeak}>
        Soup?
      </button>

      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleDoYouLikeASkyrSpeak}>
        Skyr?
      </button>

      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleDoYouLikeToGetUpSpeak}>
        Get up?
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleDoYouLikeToWashHairSpeak}>
        Wash hair?
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleSomethingToDrinkSpeak}>
        Drink?
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleMayIHelpYouSpeak}>
        Help?
      </button>

      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleYesPleaseSpeak}>
        Yes, please.
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleHaveFunSpeak}>
        Have fun!
      </button>


      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleBrushTeethSpeak}>
        Brush teeth.
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleWashFaceSpeak}>
        Wash face.
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handlePutOnClothesSpeak}>
        Put on clothes.
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleDrinkWaterSpeak}>
        Drink water.
      </button>
      <button className="text-gray-600 p-2 mt-2 h-16 min-w-16 bg-green-400" onClick={handleTidyUpSpeak}>
        Tidy up.
      </button>

    </section>
    </div>


  );
};

export default TextToSpeech;
