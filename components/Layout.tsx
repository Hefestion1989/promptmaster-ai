import React from 'react';
import { Sparkles } from 'lucide-react';
import { APP_NAME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-zinc-300 selection:bg-primary/20 selection:text-white">
      {/* Header */}
      <header className="border-b border-border bg-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
              <Sparkles className="w-5 h-5 text-primaryLight" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              {APP_NAME}
            </h1>
          </div>
          <div className="flex gap-4 text-xs font-mono text-zinc-500">
             <span>v1.0.2</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10 bg-black/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-zinc-600 text-sm">
            Potenciado por <span className="text-zinc-500 font-medium">Gemini 2.5</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;