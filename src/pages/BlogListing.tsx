import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function BlogListing() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <SEO 
        title="Eye Care Blog & Insights | Jaipur Netralaya"
        description="Read the latest insights from Jaipur's top eye specialists. Learn about glaucoma, cataract surgery, and retinal health from the experts at Jaipur Netralaya."
      />
      
      <div className="container mx-auto px-6">
        <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-4 block">Knowledge Hub</span>
        <h1 className="font-display text-5xl md:text-7xl font-medium text-slate-900 tracking-tight mb-20">
          Vision Care <span className="text-slate-500">Insights.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Link key={post.id} to={`/blogs/${post.id}`} className="group block border-t border-slate-200 pt-8 hover:border-accent-500 transition-colors duration-300">
              <span className="font-sans text-xs uppercase tracking-widest text-accent-500 block mb-4">
                {post.date}
              </span>
              <h3 className="font-display text-2xl text-slate-800 group-hover:text-slate-900 mb-4 leading-tight transition-colors">
                {post.title}
              </h3>
              <p className="font-sans text-slate-600 font-light mb-6">
                {post.excerpt}
              </p>
              <div className="font-sans text-sm tracking-widest text-slate-500 group-hover:text-accent-500 flex items-center gap-2 uppercase transition-colors">
                Read Article
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transform group-hover:translate-x-2 transition-transform duration-300">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
