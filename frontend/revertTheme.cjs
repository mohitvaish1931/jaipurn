const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\mohit\\.gemini\\antigravity\\scratch\\jaipur-netralaya\\frontend\\src\\components';
const appFile = 'C:\\Users\\mohit\\.gemini\\antigravity\\scratch\\jaipur-netralaya\\frontend\\src\\App.tsx';

const files = fs.readdirSync(dir).map(f => path.join(dir, f));
files.push(appFile);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf-8');
    
    content = content.replace(/text-slate-800/g, 'text-white/80');
    content = content.replace(/text-slate-600/g, 'text-white/50');
    content = content.replace(/text-slate-500/g, 'text-white/40');
    content = content.replace(/text-slate-400/g, 'text-white/30');
    content = content.replace(/text-slate-300/g, 'text-white/20');
    content = content.replace(/text-slate-900/g, 'text-white');
    
    content = content.replace(/bg-slate-900\/([0-9]+)/g, 'bg-white/$1');
    content = content.replace(/bg-slate-100/g, 'bg-white/10');
    content = content.replace(/bg-slate-900/g, 'bg-white');
    
    content = content.replace(/border-slate-900\/([0-9]+)/g, 'border-white/$1');
    content = content.replace(/border-slate-200/g, 'border-white/10');
    
    // Revert accent back if they want the teal, we will handle that in tailwind.config.js
    // Revert button text in specific components:
    
    fs.writeFileSync(file, content, 'utf-8');
  }
});
console.log('Revert complete.');
