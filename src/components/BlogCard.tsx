import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-[#161b27] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300">
      {/* Category + reading time bar */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <span className="inline-block bg-[#e63946]/10 text-[#e63946] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
          {post.category}
        </span>
        <span className="text-[#64748b] text-xs">{post.readingTime} min čitanja</span>
      </div>

      <div className="p-6 pt-4 flex flex-col h-full">
        {/* Title */}
        <h2
          className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#e63946] transition-colors"
          style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 800 }}
        >
          <Link href={`/blog/${post.slug}`} className="stretched-link">
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <time
            dateTime={post.dateISO}
            className="text-[#64748b] text-xs"
          >
            {post.date}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-[#e63946] hover:text-white text-sm font-semibold transition-colors"
            aria-label={`Pročitajte: ${post.title}`}
          >
            Pročitaj
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
