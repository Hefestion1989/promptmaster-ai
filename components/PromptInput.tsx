import React from 'react';
import { Wand2 } from 'lucide-react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ value, onChange, onSubmit, loading }) => {
  return (
    <div className="space-y-4 mt-8">
      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">
        2. Tu Idea
      </label>
      <div className="relative group">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ej: Un logo para una cafetería futurista..."
          disabled={loading}
          className="w-full h-32 bg-card border border-border rounded-xl p-4 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-primaryLight focus:border-primaryLight transition-all resize-none font-sans text-base leading-relaxed"
        />
        <div className="absolute bottom-4 right-4">
           <span className={`text-xs font-medium ${value.length > 10 ? 'text-primary' : 'text-zinc-600'}`}>
             {value.length} chars
           </span>
        </div>
      </div>
      
      <button
        onClick={onSubmit}
        disabled={loading || value.trim().length === 0}
        className={`
          w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg transition-all duration-300
          ${loading || value.trim().length === 0 
            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700' 
            : 'bg-white text-black hover:bg-primaryLight hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] border border-transparent'}
        `}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-zinc-500">Optimizando...</span>
          </>
        ) : (
          <>
            <Wand2 className="w-5 h-5" strokeWidth={2.5} />
            Mejorar Prompt
          </>
        )}
      </button>
    </div>
  );
};

export default PromptInput;