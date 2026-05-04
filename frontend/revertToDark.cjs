const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\mohit\\.gemini\\antigravity\\scratch\\jaipur-netralaya\\frontend\\src\\components';
const appFile = 'C:\\Users\\mohit\\.gemini\\antigravity\\scratch\\jaipur-netralaya\\frontend\\src\\App.tsx';

const files = fs.readdirSync(dir).map(f => path.join(dir, f));
files.push(appFile);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Reverse Backgrounds & Borders first (because they use slate classes)
    content = content.replace(/bg-white shadow-sm border border-slate-200/g, 'bg-white/5');
    content = content.replace(/bg-slate-200/g, 'bg-white/10');
    content = content.replace(/border-slate-200/g, 'border-white/10');
    content = content.replace(/border-slate-100/g, 'border-white/5');
    content = content.replace(/bg-slate-100/g, 'bg-white/5');

    // Reverse Text colors
    content = content.replace(/text-slate-800/g, 'text-white/80');
    content = content.replace(/text-slate-700/g, 'text-white/70');
    content = content.replace(/text-slate-600/g, 'text-white/50');
    content = content.replace(/text-slate-500/g, 'text-white/40');
    content = content.replace(/text-slate-400/g, 'text-white/30');
    content = content.replace(/text-slate-300/g, 'text-white/20');
    content = content.replace(/text-slate-200/g, 'text-white/10');
    content = content.replace(/text-slate-100/g, 'text-white/5');
    content = content.replace(/text-slate-900/g, 'text-white');
    
    // Buttons
    content = content.replace(/bg-accent-500 text-white/g, 'bg-white text-black'); 
    
    fs.writeFileSync(file, content, 'utf-8');
  }
});
console.log('Dark Theme Re-applied.');
