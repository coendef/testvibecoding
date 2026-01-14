'use client'

import { useState } from 'react'

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Interactief Spel
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Welkom bij je nieuwe game! Wat gaan we bouwen?
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {!gameStarted ? (
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Kies je spel
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setGameStarted(true)}
                    className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 hover:border-blue-400 transition-all"
                  >
                    <div className="text-4xl mb-2">🎯</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Quiz Spel</h3>
                    <p className="text-sm text-gray-600">Test je kennis met vragen</p>
                  </button>

                  <button
                    onClick={() => setGameStarted(true)}
                    className="p-6 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 hover:border-green-400 transition-all"
                  >
                    <div className="text-4xl mb-2">🎮</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Adventure Spel</h3>
                    <p className="text-sm text-gray-600">Ga op avontuur</p>
                  </button>

                  <button
                    onClick={() => setGameStarted(true)}
                    className="p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl hover:bg-yellow-100 hover:border-yellow-400 transition-all"
                  >
                    <div className="text-4xl mb-2">🧩</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Memory Spel</h3>
                    <p className="text-sm text-gray-600">Match de kaarten</p>
                  </button>

                  <button
                    onClick={() => setGameStarted(true)}
                    className="p-6 bg-red-50 border-2 border-red-200 rounded-xl hover:bg-red-100 hover:border-red-400 transition-all"
                  >
                    <div className="text-4xl mb-2">🎲</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Spel</h3>
                    <p className="text-sm text-gray-600">Maak je eigen spel</p>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800">Spel geladen</h2>
                  <button
                    onClick={() => setGameStarted(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Terug
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <p className="text-gray-700 mb-4">
                    Je game staat klaar om gebouwd te worden!
                  </p>
                  <p className="text-sm text-gray-600">
                    Vertel me welk type spel je wilt maken en ik help je verder.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
