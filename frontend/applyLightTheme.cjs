const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\mohit\\.gemini\\antigravity\\scratch\\jaipur-netralaya\\frontend\\src\\components';
const appFile = 'C:\\Users\\mohit\\.gemini\\antigravity\\scratch\\jaipur-netralaya\\frontend\\src\\App.tsx';

const files = fs.readdirSync(dir).map(f => path.join(dir, f));
files.push(appFile);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Text colors
    content = content.replace(/text-white\/80/g, 'text-slate-800');
    content = content.replace(/text-white\/70/g, 'text-slate-700');
    content = content.replace(/text-white\/60/g, 'text-slate-600');
    content = content.replace(/text-white\/50/g, 'text-slate-600');
    content = content.replace(/text-white\/40/g, 'text-slate-500');
    content = content.replace(/text-white\/30/g, 'text-slate-400');
    content = content.replace(/text-white\/20/g, 'text-slate-300');
    content = content.replace(/text-white\/10/g, 'text-slate-200');
    content = content.replace(/text-white\/5/g, 'text-slate-100');
    content = content.replace(/text-white/g, 'text-slate-900');
    
    // Backgrounds & Borders
    content = content.replace(/bg-white\/5/g, 'bg-white shadow-sm border border-slate-200');
    content = content.replace(/bg-white\/10/g, 'bg-slate-200');
    content = content.replace(/border-white\/10/g, 'border-slate-200');
    content = content.replace(/border-white\/5/g, 'border-slate-100');
    content = content.replace(/border-white\/\[0\.02\]/g, 'border-slate-200');

    // Buttons that were originally bg-white text-black or text-white
    content = content.replace(/bg-white text-slate-900/g, 'bg-accent-500 text-white'); 
    content = content.replace(/bg-white text-black/g, 'bg-accent-500 text-white'); 
    
    // Specific fixes
    content = content.replace(/text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-900\/80 to-accent-500\/50/g, 'text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600');
    
    fs.writeFileSync(file, content, 'utf-8');
  }
});
console.log('Light Theme applied.');
