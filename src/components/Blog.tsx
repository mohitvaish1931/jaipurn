import { Link } from 'react-router-dom';

const posts = [
  { date: 'Oct 12, 2025', title: 'The Silent Thief of Sight: A Doctor’s Guide to Glaucoma', link: '/blogs/glaucoma-guide' },
  { date: 'Sep 28, 2025', title: 'Precision Light: A Retina Specialist’s Guide to Laser Therapy', link: '/blogs/laser-therapy-retina' },
  { date: 'Aug 15, 2025', title: 'The Sight-Saving Needle: A Retina Specialist’s Guide to Intravitreal Injections', link: '/blogs/intravitreal-injections' }
];

export default function Blog() {
  return (
    <section className="py-32 bg-background relative" id="blog">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-4 block">Vision Care Blog</span>
            <h2 className="font-display text-5xl md:text-6xl font-medium text-slate-900 tracking-tight">
              Latest <span className="text-slate-500">Insights.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <Link key={i} to={post.link} className="group block border-t border-slate-200 pt-8 hover:border-accent-500 transition-colors duration-300">
              <span className="font-sans text-xs uppercase tracking-widest text-accent-500 block mb-4">
                {post.date}
              </span>
              <h3 className="font-display text-2xl text-slate-800 group-hover:text-slate-900 mb-6 leading-tight transition-colors">
                {post.title}
              </h3>
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
    </section>
  );
}
