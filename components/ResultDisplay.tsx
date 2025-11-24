import React, { useState } from 'react';
import { Copy, CheckCircle2, Info, Lightbulb, Check } from 'lucide-react';
import { OptimizationResult } from '../types';

interface ResultDisplayProps {
  result: OptimizationResult | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(result.optimizedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-10 space-y-6 animate-fade-in border-t border-zinc-800 pt-8">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-primaryLight rounded-full"></div>
        <h2 className="text-xl font-bold text-white">Resultado Optimizado</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Prompt Area */}
        <div className="lg:col-span-2 space-y-2">
          <div className="bg-zinc-800/30 border border-primary/20 rounded-xl p-1">
            <div className="bg-black/60 rounded-lg p-6 relative min-h-[200px]">
               <button
                onClick={handleCopy}
                className={`absolute top-4 right-4 p-2 rounded-lg border transition-all duration-200 ${copied ? 'bg-primary/10 border-primary text-primary' : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                title="Copiar"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              
              <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Prompt Final</h3>
              <p className="text-zinc-100 text-lg leading-relaxed font-mono whitespace-pre-wrap selection:bg-primary/30">
                {result.optimizedPrompt}
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar: Explanation & Tips */}
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3 text-secondary">
              <Info className="w-4 h-4" />
              <h3 className="font-semibold text-zinc-200 text-sm">Cambios realizados</h3>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              {result.explanation}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3 text-amber-500">
              <Lightbulb className="w-4 h-4" />
              <h3 className="font-semibold text-zinc-200 text-sm">Tips</h3>
            </div>
            <ul className="space-y-3">
              {result.tips.map((tip, idx) => (
                <li key={idx} className="flex gap-3 text-xs text-zinc-400">
                  <span className="text-amber-500/50 mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;