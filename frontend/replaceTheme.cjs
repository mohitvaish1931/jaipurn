const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\mohit\\.gemini\\antigravity\\scratch\\jaipur-netralaya\\frontend\\src\\components';
const appFile = 'C:\\Users\\mohit\\.gemini\\antigravity\\scratch\\jaipur-netralaya\\frontend\\src\\App.tsx';

const files = fs.readdirSync(dir).map(f => path.join(dir, f));
files.push(appFile);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Specific exclusions (like "text-white" in App.tsx that should stay white if the background is dark, but wait, bg is white)
    // Replace text-white/opacity
    content = content.replace(/text-white\/([0-9]+)/g, (match, p1) => {
      const op = parseInt(p1);
      if (op >= 70) return 'text-slate-800';
      if (op >= 50) return 'text-slate-600';
      if (op >= 30) return 'text-slate-500';
      if (op >= 10) return 'text-slate-400';
      return 'text-slate-300';
    });
    
    // Replace text-white
    content = content.replace(/text-white/g, 'text-slate-900');
    
    // Replace bg-white/opacity
    content = content.replace(/bg-white\/([0-9]+)/g, 'bg-slate-900/$1');
    
    // Replace bg-white
    content = content.replace(/bg-white/g, 'bg-slate-900');
    
    // Replace border-white/opacity
    content = content.replace(/border-white\/([0-9]+)/g, 'border-slate-900/$1');
    
    // Now any place that we want to remain truly white (like button text which was black before)
    content = content.replace(/text-black/g, 'text-white');
    
    fs.writeFileSync(file, content, 'utf-8');
  }
});
console.log('Explicit replacement complete.');
