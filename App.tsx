import React, { useState } from 'react';
import Layout from './components/Layout';
import ModelSelector from './components/ModelSelector';
import PromptInput from './components/PromptInput';
import ResultDisplay from './components/ResultDisplay';
import { TargetModel, OptimizationResult } from './types';
import { optimizePrompt } from './services/geminiService';
import { AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState<TargetModel>(TargetModel.CHATGPT);
  const [inputPrompt, setInputPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OptimizationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOptimize = async () => {
    if (!inputPrompt.trim()) return;
    if (!apiKey.trim()) {
      setError('Ingresá tu API key de Gemini. La clave no se guarda ni se incorpora al sitio.');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await optimizePrompt(inputPrompt, selectedModel, apiKey);
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Prompt<span className="gradient-text">Master</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl mx-auto">
            Selecciona tu IA, ingresa una idea simple y obtén el prompt perfecto al instante.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
          <ModelSelector 
            selectedModel={selectedModel} 
            onSelect={setSelectedModel} 
            disabled={loading}
          />

          <div className="mb-6">
            <label htmlFor="api-key" className="block text-sm font-medium text-zinc-300 mb-2">
              API key de Gemini
            </label>
            <input
              id="api-key"
              type="password"
              autoComplete="off"
              value={apiKey}
              onChange={(event) => {
                setApiKey(event.target.value);
                if (error) setError(null);
              }}
              disabled={loading}
              placeholder="Pegá tu clave para esta sesión"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50"
            />
            <p className="mt-2 text-xs text-zinc-600">
              Se conserva sólo en la memoria de esta pestaña y se envía directamente a Google Gemini.
            </p>
          </div>

          <PromptInput 
            value={inputPrompt} 
            onChange={setInputPrompt} 
            onSubmit={handleOptimize}
            loading={loading}
          />

          {error && (
            <div className="mt-6 p-4 bg-red-500/5 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-300 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <ResultDisplay result={result} />
        </div>
      </div>
    </Layout>
  );
};

export default App;
