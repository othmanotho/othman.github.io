import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slides = [
    // Slide 0: Title
    {
      title: "La Communication Interpersonnelle",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            La Communication
          </div>
          <div className="text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Interpersonnelle
          </div>
          <div className="mt-12 text-2xl text-gray-600">
            Comprendre l'art de communiquer efficacement
          </div>
        </div>
      )
    },
    // Slide 1: Définition
    {
      title: "1. Définition",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
            <p className="text-xl leading-relaxed">
              La communication interpersonnelle est <span className="font-bold text-blue-600">l'échange d'informations, de sentiments et d'émotions</span> entre deux personnes ou plus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2 text-green-700">Objectifs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Établir une relation</li>
                <li>• Comprendre l'autre</li>
                <li>• Se faire comprendre</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="font-bold text-lg mb-2 text-purple-700">Processus bidirectionnel</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <span className="font-semibold">Émetteur</span> : envoie le message</li>
                <li>• <span className="font-semibold">Récepteur</span> : reçoit et interprète</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Slide 2: Les éléments
    {
      title: "2. Les éléments de la communication",
      content: (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "👤", title: "L'émetteur", desc: "Personne qui envoie le message" },
            { icon: "💬", title: "Le message", desc: "Information transmise" },
            { icon: "📡", title: "Le canal", desc: "Moyen de communication" },
            { icon: "👥", title: "Le récepteur", desc: "Personne qui reçoit" },
            { icon: "🔤", title: "Le code", desc: "Langage utilisé" },
            { icon: "🌍", title: "Le contexte", desc: "Environnement de l'échange" },
            { icon: "↩️", title: "Le feed-back", desc: "Réponse du récepteur" },
            { icon: "📢", title: "Le bruit", desc: "Perturbations diverses" }
          ].map((element, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white to-blue-50 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-4xl mb-2">{element.icon}</div>
              <h3 className="font-bold text-blue-700 mb-1">{element.title}</h3>
              <p className="text-sm text-gray-600">{element.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    // Slide 3: Types de communication
    {
      title: "3. Les types de communication interpersonnelle",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="font-bold text-2xl mb-3">Verbale</h3>
              <p className="text-blue-100">À travers les mots, le langage oral ou écrit</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-bold text-2xl mb-3">Non verbale</h3>
              <p className="text-purple-100">Gestes, mimiques, regard, posture...</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="font-bold text-2xl mb-3">Para-verbale</h3>
              <p className="text-pink-100">Intonation, rythme, volume, silences</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500 mt-8">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">💡</span>
              <p className="text-xl font-bold text-gray-800">
                Remarque : <span className="text-orange-600">70% de la communication humaine est non verbale !</span>
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: Fonctions
    {
      title: "4. Les fonctions de la communication interpersonnelle",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: "📢", title: "Informer", desc: "Transmettre un message ou une idée", color: "blue" },
            { icon: "💭", title: "Exprimer", desc: "Partager ses émotions, opinions", color: "purple" },
            { icon: "🎯", title: "Influencer", desc: "Convaincre ou persuader", color: "green" },
            { icon: "⚖️", title: "Réguler", desc: "Organiser les échanges et relations", color: "orange" },
            { icon: "🤝", title: "Créer du lien", desc: "Maintenir la relation sociale", color: "pink" }
          ].map((func, idx) => (
            <div key={idx} className={`bg-gradient-to-br from-${func.color}-50 to-${func.color}-100 p-6 rounded-xl shadow-lg border-l-4 border-${func.color}-500 hover:scale-105 transition-transform`}>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{func.icon}</div>
                <div>
                  <h3 className={`font-bold text-xl text-${func.color}-700 mb-2`}>{func.title}</h3>
                  <p className="text-gray-700">{func.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    // Slide 5: Obstacles
    {
      title: "5. Les obstacles à la communication",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "📢", text: "Le bruit (distraction, environnement)", color: "red" },
              { icon: "🚫", text: "Les préjugés et stéréotypes", color: "orange" },
              { icon: "🙉", text: "Le manque d'écoute", color: "yellow" },
              { icon: "❓", text: "La mauvaise interprétation du message", color: "purple" },
              { icon: "😤", text: "Les émotions (colère, peur, stress...)", color: "pink" }
            ].map((obstacle, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-400 flex items-center space-x-4">
                <div className="text-3xl">{obstacle.icon}</div>
                <p className="text-gray-700 font-medium">{obstacle.text}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-2xl shadow-xl mt-8">
            <div className="flex items-center space-x-4">
              <span className="text-5xl">🎯</span>
              <div>
                <h3 className="font-bold text-2xl mb-2">Solution</h3>
                <p className="text-xl text-green-50">
                  Une bonne communication nécessite de <span className="font-bold">l'écoute active</span>, de <span className="font-bold">l'empathie</span> et de la <span className="font-bold">clarté</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Compétences essentielles
    {
      title: "6. Les compétences essentielles",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { 
              icon: "👂", 
              title: "L'écoute active", 
              desc: "Comprendre réellement ce que l'autre dit",
              color: "from-blue-500 to-blue-600"
            },
            { 
              icon: "❤️", 
              title: "L'empathie", 
              desc: "Se mettre à la place de l'autre",
              color: "from-red-500 to-pink-600"
            },
            { 
              icon: "💪", 
              title: "L'assertivité", 
              desc: "Exprimer son opinion clairement et avec respect",
              color: "from-green-500 to-teal-600"
            },
            { 
              icon: "🔄", 
              title: "La reformulation", 
              desc: "Redire avec ses mots pour vérifier la compréhension",
              color: "from-purple-500 to-indigo-600"
            },
            { 
              icon: "✅", 
              title: "La congruence", 
              desc: "Être cohérent entre ce qu'on dit et ce qu'on montre",
              color: "from-orange-500 to-yellow-600"
            }
          ].map((skill, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${skill.color} text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform`}>
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="font-bold text-2xl mb-2">{skill.title}</h3>
              <p className="text-white/90">{skill.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    // Slide 7: École de Palo Alto
    {
      title: "7. L'École de Palo Alto",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-5xl">🌱</span>
              <div>
                <h3 className="font-bold text-3xl">L'École de Palo Alto</h3>
                <p className="text-indigo-100">Californie, années 1950 - Approche systémique</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-xl text-gray-800 mb-3">Chercheurs principaux :</h4>
            <div className="flex flex-wrap gap-3">
              {["Gregory Bateson", "Paul Watzlawick", "Don Jackson", "Ray Birdwhistell", "Erving Goffman"].map((name, idx) => (
                <span key={idx} className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">
                  {name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-purple-700">Révolution</span> dans la compréhension de la communication humaine : étude des relations (famille, travail, conflits...)
            </p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-400">
            <p className="text-xl font-bold text-center text-gray-800">
              📘 Les 5 axiomes de Paul Watzlawick →
            </p>
          </div>
        </div>
      )
    },
    // Slide 8: Les 5 axiomes (partie 1)
    {
      title: "Les 5 axiomes de Watzlawick (1/2)",
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-start space-x-4">
              <span className="text-4xl font-bold">1</span>
              <div>
                <h3 className="font-bold text-2xl mb-2">On ne peut pas ne pas communiquer</h3>
                <p className="text-blue-100">➡️ Même le silence, le geste ou le regard transmettent un message.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-start space-x-4">
              <span className="text-4xl font-bold">2</span>
              <div>
                <h3 className="font-bold text-2xl mb-2">Deux aspects : contenu et relation</h3>
                <div className="space-y-2 text-purple-100">
                  <p>➡️ <span className="font-semibold">Le contenu</span> : ce que l'on dit.</p>
                  <p>➡️ <span className="font-semibold">La relation</span> : la manière dont on le dit (ton, attitude...).</p>
                  <p className="text-yellow-200 font-medium mt-2">Le second détermine souvent comment le message est interprété.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-start space-x-4">
              <span className="text-4xl font-bold">3</span>
              <div>
                <h3 className="font-bold text-2xl mb-2">La ponctuation des séquences</h3>
                <p className="text-pink-100 mb-2">➡️ Chacun interprète la conversation selon son point de vue.</p>
                <div className="bg-pink-700/50 p-3 rounded-lg text-sm">
                  <p className="italic">"Je crie parce que tu ne m'écoutes pas."</p>
                  <p className="italic">"Je ne t'écoute pas parce que tu cries."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 9: Les 5 axiomes (partie 2)
    {
      title: "Les 5 axiomes de Watzlawick (2/2)",
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-start space-x-4">
              <span className="text-4xl font-bold">4</span>
              <div>
                <h3 className="font-bold text-2xl mb-2">Deux modes : digital et analogique</h3>
                <div className="space-y-2 text-green-100">
                  <p>➡️ <span className="font-semibold">Digital (verbal)</span> : les mots.</p>
                  <p>➡️ <span className="font-semibold">Analogique (non verbal)</span> : gestes, ton, expressions.</p>
                  <p className="text-yellow-200 font-medium mt-2">Une contradiction entre les deux crée des malentendus.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-start space-x-4">
              <span className="text-4xl font-bold">5</span>
              <div>
                <h3 className="font-bold text-2xl mb-2">Échanges symétriques ou complémentaires</h3>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="bg-orange-700/50 p-4 rounded-lg">
                    <p className="font-semibold mb-1">Symétrique</p>
                    <p className="text-sm text-orange-100">Relation d'égalité (amis, collègues)</p>
                  </div>
                  <div className="bg-red-700/50 p-4 rounded-lg">
                    <p className="font-semibold mb-1">Complémentaire</p>
                    <p className="text-sm text-red-100">Relation de différence (parent/enfant, prof/élève)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl border-2 border-indigo-400">
            <p className="text-lg text-gray-800 text-center font-medium">
              Ces axiomes forment la base de la compréhension moderne de la communication
            </p>
          </div>
        </div>
      )
    },
    // Slide 10: Importance
    {
      title: "8. Importance de la communication interpersonnelle",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "🤝", text: "Favorise la compréhension mutuelle", color: "blue" },
              { icon: "💼", text: "Améliore les relations sociales et professionnelles", color: "purple" },
              { icon: "⚖️", text: "Permet de résoudre les conflits", color: "green" },
              { icon: "🌟", text: "Développe la confiance et la coopération", color: "orange" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl">{item.icon}</span>
                  <p className="text-lg font-medium text-gray-800">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl shadow-2xl mt-8">
            <div className="flex items-center space-x-4">
              <span className="text-6xl">🪞</span>
              <div>
                <h3 className="font-bold text-2xl mb-3">Exemple concret</h3>
                <p className="text-lg text-blue-50 mb-2">
                  👩‍🏫 Dans un entretien entre un enseignant et un étudiant :
                </p>
                <div className="space-y-2 text-blue-100">
                  <p>✅ Si le prof parle calmement et écoute attentivement → communication efficace et constructive.</p>
                  <p>❌ Si le prof crie ou ignore → rupture de communication (bruit, mauvaise relation).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 11: Conclusion
    {
      title: "10. Conclusion",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 rounded-3xl shadow-2xl max-w-4xl">
            <h3 className="text-3xl font-bold mb-6 text-center">La communication interpersonnelle</h3>
            <p className="text-xl leading-relaxed text-center text-indigo-100 mb-6">
              n'est pas qu'un simple échange de mots, c'est un <span className="font-bold text-yellow-300">acte relationnel complexe</span> influencé par le contexte, les émotions et la perception.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-green-400 max-w-4xl">
            <div className="flex items-start space-x-4">
              <span className="text-5xl">👉</span>
              <div>
                <p className="text-2xl font-bold text-gray-800 mb-3">Bien communiquer, c'est :</p>
                <ul className="space-y-2 text-xl text-gray-700">
                  <li>• Savoir <span className="font-bold text-blue-600">écouter</span></li>
                  <li>• Savoir <span className="font-bold text-purple-600">observer</span></li>
                  <li>• Savoir <span className="font-bold text-green-600">s'adapter</span> à l'autre</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400 max-w-4xl">
            <p className="text-lg text-center text-gray-800">
              Selon les principes de <span className="font-bold text-orange-600">l'école de Palo Alto</span>, toute relation est une forme de communication.
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        {/* Main Slide Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Slide Content */}
          <div className="p-12 min-h-[600px] flex flex-col">
            {/* Title */}
            {currentSlide > 0 && (
              <h2 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-500 pb-4">
                {slides[currentSlide].title}
              </h2>
            )}
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {slides[currentSlide].content}
            </div>
          </div>
          
          {/* Navigation Bar */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentSlide === 0
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-white text-blue-600 hover:bg-blue-50 hover:scale-105'
                }`}
              >
                ← Précédent
              </button>
              
              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-blue-300 hover:bg-blue-200'
                    }`}
                    title={`Slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Slide Counter */}
              <div className="text-white font-semibold text-lg">
                {currentSlide + 1} / {slides.length}
              </div>
              
              {/* Next Button */}
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentSlide === slides.length - 1
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-white text-purple-600 hover:bg-purple-50 hover:scale-105'
                }`}
              >
                Suivant →
              </button>
            </div>
          </div>
        </div>
        
        {/* Keyboard Shortcuts Info */}
        <div className="text-center mt-4 text-white/70 text-sm">
          Utilisez les flèches ← → du clavier pour naviguer
        </div>
      </div>
    </div>
  );
}

export default App;
