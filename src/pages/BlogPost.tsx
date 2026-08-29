import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen">
        <h1 className="text-4xl font-display text-slate-900 mb-4">Article Not Found</h1>
        <Link to="/blogs" className="text-accent-500 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <SEO 
        title={`${post.title} | Jaipur Netralaya`}
        description={post.excerpt}
      />

      <div className="container mx-auto px-6 max-w-3xl">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 font-sans tracking-widest text-xs uppercase mb-12 transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Articles
        </Link>
        
        <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-4 block">
          {post.date}
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-8">
          {post.title}
        </h1>
        
        <div className="prose prose-slate prose-lg max-w-none font-sans font-light">
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Eye health is a critical component of overall well-being. Conditions such as glaucoma, diabetic retinopathy, and macular degeneration can quietly damage your vision over time. That is why routine comprehensive eye examinations are essential for early diagnosis and treatment. By leveraging cutting-edge imaging technologies and advanced therapeutic approaches, our specialists can halt disease progression and protect your precious eyesight.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            At Jaipur Netralaya, our commitment to clinical excellence ensures that every patient receives a personalized treatment plan. Whether you require micro-incision cataract surgery, specialized laser therapy, or intravitreal injections, our team is equipped with the knowledge and technology to deliver outstanding outcomes. We believe in educating our patients so they can make informed decisions about their vision care journey.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you are experiencing any changes in your vision, such as blurriness, dark spots, or difficulty seeing at night, do not delay seeking professional advice. Early intervention is the key to preserving your sight. Contact our clinic today to schedule a consultation with one of our esteemed retina and cataract specialists.
          </p>
        </div>
      </div>
    </div>
  );
}
