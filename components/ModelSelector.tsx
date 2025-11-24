import React from 'react';
import { TargetModel } from '../types';
import { MODEL_OPTIONS } from '../constants';
import { Check } from 'lucide-react';

interface ModelSelectorProps {
  selectedModel: TargetModel;
  onSelect: (model: TargetModel) => void;
  disabled?: boolean;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onSelect, disabled }) => {
  return (
    <div className="space-y-4">
      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">
        1. Elige tu IA
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {MODEL_OPTIONS.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedModel === option.value;
          
          return (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              disabled={disabled}
              className={`
                relative flex flex-col items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 group
                ${isSelected 
                  ? 'bg-primary/5 border-primaryLight/50 shadow-[0_0_15px_-5px_rgba(45,212,191,0.2)]' 
                  : 'bg-card border-border hover:border-zinc-600 hover:bg-zinc-800/80'}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <div className={`p-2 rounded-lg transition-colors ${isSelected ? 'bg-primaryLight text-black' : 'bg-zinc-800 text-zinc-400 group-hover:text-zinc-200'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0 w-full">
                <div className={`font-semibold text-sm truncate ${isSelected ? 'text-primaryLight' : 'text-zinc-300'}`}>
                  {option.label}
                </div>
                <div className="text-[10px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed font-medium">
                  {option.description}
                </div>
              </div>
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className="bg-primaryLight rounded-full p-0.5">
                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ModelSelector;