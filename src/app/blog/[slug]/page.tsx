import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, generateStaticSlugs, getAllPosts } from "@/lib/blog";
import type { ContentBlock } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return generateStaticSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      locale: "sr_RS",
      type: "article",
      publishedTime: post.dateISO,
    },
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={index} className="text-[#94a3b8] leading-relaxed mb-5 text-base md:text-lg">
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2
          key={index}
          className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4"
          style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 800 }}
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={index}
          className="text-xl font-bold text-white mt-6 mb-3"
          style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 700 }}
        >
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul key={index} className="space-y-2.5 mb-6 ml-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#94a3b8] text-base">
              <svg
                className="w-5 h-5 text-[#e63946] shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      );

    case "tip":
      return (
        <div
          key={index}
          className="bg-[#f59e0b]/10 border-l-4 border-[#f59e0b] rounded-r-xl px-5 py-4 mb-6"
          role="note"
        >
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-[#f59e0b] text-sm leading-relaxed font-medium">
              {block.text}
            </p>
          </div>
        </div>
      );

    case "cta":
      return (
        <div
          key={index}
          className="bg-[#1a1f2e] border border-[#e63946]/20 rounded-2xl px-6 py-6 my-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="text-white font-bold text-lg"
            style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 800 }}
          >
            {block.text}
          </p>
          <a
            href={block.href}
            className="shrink-0 inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 whitespace-nowrap"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {block.label}
          </a>
        </div>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.dateISO,
    author: {
      "@type": "Organization",
      name: "Autoservis i Šlep Služba Živković",
    },
    publisher: {
      "@type": "Organization",
      name: "Autoservis i Šlep Služba Živković",
    },
    inLanguage: "sr",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0f1117]">
        {/* Post header */}
        <header className="bg-[#1a1f2e] border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 md:pt-40 md:pb-16">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-sm text-[#64748b] mb-6 flex-wrap"
              aria-label="Putanja"
            >
              <Link href="/" className="hover:text-[#94a3b8] transition-colors">
                Početna
              </Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/blog" className="hover:text-[#94a3b8] transition-colors">
                Blog
              </Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#94a3b8] truncate max-w-[200px]">{post.category}</span>
            </nav>

            {/* Meta row */}
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#e63946]/10 text-[#e63946] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-[#64748b] text-sm">·</span>
              <time dateTime={post.dateISO} className="text-[#64748b] text-sm">
                {post.date}
              </time>
              <span className="text-[#64748b] text-sm">·</span>
              <span className="text-[#64748b] text-sm">{post.readingTime} min čitanja</span>
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
            >
              {post.title}
            </h1>

            <p className="mt-4 text-[#94a3b8] text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <article>
            {post.content.map((block, i) => renderBlock(block, i))}
          </article>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-white transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Nazad na blog
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section
            className="bg-[#1a1f2e] border-t border-white/5 py-16"
            aria-labelledby="related-heading"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="related-heading"
                className="text-2xl md:text-3xl font-black text-white mb-8"
                style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif", fontWeight: 900 }}
              >
                Možda vas zanima i ovo
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
