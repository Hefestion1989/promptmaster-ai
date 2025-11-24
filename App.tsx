import React, { useState } from 'react';
import Layout from './components/Layout';
import ModelSelector from './components/ModelSelector';
import PromptInput from './components/PromptInput';
import ResultDisplay from './components/ResultDisplay';
import { TargetModel, OptimizationResult } from './types';
import { optimizePrompt } from './services/geminiService';
import { AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<TargetModel>(TargetModel.CHATGPT);
  const [inputPrompt, setInputPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OptimizationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOptimize = async () => {
    if (!inputPrompt.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await optimizePrompt(inputPrompt, selectedModel);
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