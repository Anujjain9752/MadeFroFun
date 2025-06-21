import React, { useState } from 'react';
import { Heart, Sparkles, Music } from 'lucide-react';

interface Answers {
  environment: string;
  food: string;
  activity: string;
  movie: string;
}

function App() {
  const [answers, setAnswers] = useState<Answers>({
    environment: '',
    food: '',
    activity: '',
    movie: ''
  });
  
  const [showFinal, setShowFinal] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (category: keyof Answers, value: string) => {
    setAnswers(prev => ({ ...prev, [category]: value }));
  };

  const getPersonalityType = () => {
    const peaceful = [answers.environment === 'nature', answers.food === 'cafe', answers.activity === 'chill', answers.movie === 'artsy'].filter(Boolean).length;
    const chaotic = [answers.environment === 'city', answers.food === 'fastfood', answers.activity === 'random', answers.movie === 'action'].filter(Boolean).length;
    
    if (peaceful > chaotic) {
      return { type: "Peaceful Explorer", emoji: "🌸", desc: "You're all about those calm, beautiful moments" };
    } else if (chaotic > peaceful) {
      return { type: "Spicy Chaos Queen", emoji: "🔥", desc: "You live for adventure and spontaneous fun" };
    } else {
      return { type: "Perfect Balance Goddess", emoji: "✨", desc: "You're the best of both worlds - zen and wild" };
    }
  };

  const getChoiceMessage = (category: string, choice: string) => {
    const messages = {
      environment: {
        nature: "Nice choice! Someone loves peace 😌",
        city: "Urban vibes! You picked the hustle 🏙️"
      },
      food: {
        cafe: "Cute and cozy! My kind of person ☕",
        fastfood: "No regrets gang! I respect that 🍟"
      },
      activity: {
        chill: "Chill mode activated! Let's vibe 🧘‍♀️",
        random: "Adventure seeker! Let's get lost 🗺️"
      },
      movie: {
        artsy: "Deep soul detected! Prepare for feels 🎭",
        action: "You picked chaos! Let's go wild 💥"
      }
    };
    return messages[category as keyof typeof messages][choice as keyof any] || "";
  };

  const allAnswered = Object.values(answers).every(answer => answer !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Music className="text-pink-400 animate-pulse" size={24} />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
             Pick Your Poison - Acci
            </h1>
            <Music className="text-pink-400 animate-pulse" size={24} />
          </div>
      <p className="text-lg text-gray-600">
   DISCLAIMER : This thing plans our day so I don’t lose brain cells arguing with you. 
</p>
<p className="text-md text-gray-500">
  Also, it’s cheaper than therapy. 
</p>
        </div>

        {/* Welcome Note */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-pink-200 shadow-lg">
          <div className="text-center">
            <Heart className="mx-auto mb-3 text-pink-400" size={32} />
            <div className="space-y-2 text-gray-700 leading-relaxed">
        <p className="font-medium">Today I’m meeting the girl who made me feel like the hero after just one 3-hour call.</p>
<p>I felt like the main character on the phone... now I’m just hoping for survival. 😬</p>
<p><p>Jo bhi hoga... bahut hi weird hoga, (no mango cheese cake) baki jo hoga, so hoga. Chill hai 😌</p></p>

            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {/* Question 1: Environment */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Greenery or Building Vibes?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('environment', 'nature')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  answers.environment === 'nature'
                    ? 'border-green-400 bg-green-50 shadow-lg'
                    : 'border-green-200 bg-white hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <div className="text-6xl mb-3">🌿</div>
                <div className="font-semibold text-gray-800">Nature and trees, please</div>
              </button>
              <button
                onClick={() => handleAnswer('environment', 'city')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  answers.environment === 'city'
                    ? 'border-blue-400 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="text-6xl mb-3">🏙</div>
                <div className="font-semibold text-gray-800">Skyscraper scene</div>
              </button>
            </div>
            {answers.environment && (
              <div className="mt-4 text-center p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                <p className="text-sm font-medium text-purple-700">
                  {getChoiceMessage('environment', answers.environment)}
                </p>
              </div>
            )}
          </div>

          {/* Question 2: Food */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Food Vibe
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('food', 'cafe')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  answers.food === 'cafe'
                    ? 'border-pink-400 bg-pink-50 shadow-lg'
                    : 'border-pink-200 bg-white hover:border-pink-300 hover:bg-pink-50'
                }`}
              >
                <div className="text-6xl mb-3">🍰</div>
                <div className="font-semibold text-gray-800">Small bites, no jungli</div>
              </button>
              <button
                onClick={() => handleAnswer('food', 'fastfood')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  answers.food === 'fastfood'
                    ? 'border-yellow-400 bg-yellow-50 shadow-lg'
                    : 'border-yellow-200 bg-white hover:border-yellow-300 hover:bg-yellow-50'
                }`}
              >
                <div className="text-6xl mb-3">🍕</div>
                <div className="font-semibold text-gray-800">Fast food, bahut jungli</div>
              </button>
            </div>
            {answers.food && (
              <div className="mt-4 text-center p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                <p className="text-sm font-medium text-purple-700">
                  {getChoiceMessage('food', answers.food)}
                </p>
              </div>
            )}
          </div>

          {/* Question 3: Activity */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Activity Mood
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('activity', 'chill')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  answers.activity === 'chill'
                    ? 'border-purple-400 bg-purple-50 shadow-lg'
                    : 'border-purple-200 bg-white hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                <div className="text-6xl mb-3">🧘</div>
                <div className="font-semibold text-gray-800">Let's chill and talk</div>
              </button>
              <button
                onClick={() => handleAnswer('activity', 'random')}
                className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  answers.activity === 'random'
                    ? 'border-red-400 bg-red-50 shadow-lg'
                    : 'border-red-200 bg-white hover:border-red-300 hover:bg-red-50'
                }`}
              >
                <div className="text-6xl mb-3">🏃</div>
                <div className="font-semibold text-gray-800">Let's go somewhere random</div>
              </button>
            </div>
            {answers.activity && (
              <div className="mt-4 text-center p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                <p className="text-sm font-medium text-purple-700">
                  {getChoiceMessage('activity', answers.activity)}
                </p>
              </div>
            )}
          </div>

          {/* Question 4: Movie */}
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-200 shadow-lg">
  <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
    Movie Mood (optional, don't overthink)
  </h2>

  <div className="grid md:grid-cols-2 gap-4">
    <button
      onClick={() => handleAnswer('movie', 'artsy')}
      className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
        answers.movie === 'artsy'
          ? 'border-indigo-400 bg-indigo-50 shadow-lg'
          : 'border-indigo-200 bg-white hover:border-indigo-300 hover:bg-indigo-50'
      }`}
    >
      <div className="text-6xl mb-3">🎬</div>
      <div className="font-semibold text-gray-800">Peaceful, soul-healing waali</div>
    </button>

    <button
      onClick={() => handleAnswer('movie', 'action')}
      className={`p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
        answers.movie === 'action'
          ? 'border-red-400 bg-red-50 shadow-lg'
          : 'border-gray-200 bg-white hover:border-red-300 hover:bg-red-50'
      }`}
    >
      <div className="text-6xl mb-3">🔫</div>
      <div className="font-semibold text-gray-800">Maar-dhaad, 2000s Bollywood chaos</div>
    </button>
  </div>

  {/* Skip Option */}
  <div className="text-center mt-4">
    <button
      onClick={() => handleAnswer('movie', 'skip')}
      className="text-sm text-gray-500 underline hover:text-purple-600"
    >
      Skip it, not in the mood for reels today
    </button>
  </div>

  {/* Response Message */}
  {answers.movie && (
    <div className="mt-4 text-center p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
      <p className="text-sm font-medium text-purple-700">
        {answers.movie === 'skip'
          ? "Okay okay chill. No movie today. Just vibes 🎧"
          : getChoiceMessage('movie', answers.movie)}
      </p>
    </div>
  )}
</div>

      </div>

        {/* Results */}
        {allAnswered && (
          <div className="mt-8 space-y-6">
            {/* Summary Card */}
            <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-2xl p-8 border border-pink-300 shadow-xl">
              <div className="text-center">
                <Sparkles className="mx-auto mb-4 text-purple-600" size={40} />
                <h3 className="text-3xl font-bold mb-4 text-gray-800">Your vibe is:</h3>
                <div className="text-5xl mb-4">{getPersonalityType().emoji}</div>
                <h4 className="text-2xl font-bold text-purple-700 mb-2">
                  {getPersonalityType().type}
                </h4>
                <p className="text-gray-700 text-lg">
                  {getPersonalityType().desc}
                </p>
              </div>
            </div>

            {/* Final Button */}
            <div className="text-center">
              <button
                onClick={() => setShowFinal(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                Let's Go! 🚀
              </button>
            </div>

            {/* Final Message */}
            {showFinal && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-300 shadow-xl animate-fade-in">
                <div className="text-center">
              <div className="flex flex-col items-center mb-4">
 
            <div className="mt-6 flex justify-center">
  <span className="animate-bounce text-[80px]">🌻</span>
</div>
</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  <p>Your plan is ready. As confusing as you are. 😵‍💫</p>
                  </h3>
                  <p className="text-lg text-gray-700">
                    No refunds on awkward silences 😉
                  </p>
    
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
<p className="text-sm text-gray-500 text-center">
  Made with 💻, vibes, and dramatic coding struggles — by a guy who still shows up with full heart.
</p>

<p className="text-sm text-gray-500 text-center mt-2">
  If you're curious how I looked before emotional eating kicked in...
</p>

<div className="flex justify-center mt-2">
  <a 
    href="https://res.cloudinary.com/dwlsmj5se/image/upload/v1750491322/AnujJainPhotoBelawli_i9ypuo.jpg" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group"
  >
    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300 shadow-sm group-hover:scale-105 transition-transform">
      <img 
        src="https://res.cloudinary.com/dwlsmj5se/image/upload/v1750491322/AnujJainPhotoBelawli_i9ypuo.jpg" 
        alt="Past Me" 
        className="w-full h-full object-cover opacity-30 group-hover:opacity-90"
      />
    </div>
  </a>
</div>

<p className="text-xs text-gray-400 text-center mt-1 italic">
  Click to reveal the legend. Proceed with caution. 😎
</p>

        </div>
      </div>
    </div>
  );
}

export default App;
