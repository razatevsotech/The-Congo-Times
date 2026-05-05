import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { usePostsByCategory } from '../../hooks/usePosts';

const PLACEHOLDER_IMAGE =
  'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80';

/**
 * Format date from API format
 */
const formatDate = (dateString) => {
  if (!dateString) return 'Recently';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return 'Recently';
  }
};

/**
 * Loading skeleton
 */
const PostSkeleton = () => (
  <div className="animate-pulse flex flex-col gap-3">
    <div className="h-[220px] w-full bg-gray-200 rounded-sm"></div>
    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    <div className="h-6 bg-gray-200 rounded w-full"></div>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
  </div>
);

export const CategoryPage = ({ category, categoryTitle, categoryLabel }) => {
  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  // Fetch posts for the category
  const { data: postsResponse, loading, error } = usePostsByCategory(category, page, postsPerPage);

  const posts = Array.isArray(postsResponse?.data) ? postsResponse.data : [];
  const meta = postsResponse?.meta || null;

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-[1350px] px-6 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT: MAIN CONTENT */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="mb-10">
              <h1 className="text-[42px] font-black text-black leading-tight mb-4">
                {categoryTitle}
              </h1>
              <div className="h-[1px] w-full bg-[#ccc]"></div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 mb-8 text-[14px] font-bold border-l-4 border-red-500">
                Error loading posts: {error}
              </div>
            )}

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {loading ? (
                Array(6).fill(0).map((_, i) => <PostSkeleton key={i} />)
              ) : posts.length > 0 ? (
                posts.map((post) => (
                  <article key={post.id} className="flex flex-col group">
                    <Link to={`/news/${post.slug}`} className="block mb-4 overflow-hidden rounded-sm">
                      <img
                        src={post.featured_image || PLACEHOLDER_IMAGE}
                        alt={post.title}
                        className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    <span className="text-[#0085CA] text-[12px] font-black uppercase tracking-widest mb-3">
                      {post.category?.name || categoryLabel}
                    </span>

                    <Link to={`/news/${post.slug}`}>
                      <h2 className="text-[20px] font-black text-black leading-[1.2] mb-3 group-hover:text-[#0085CA] transition-colors">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-[#888] text-[13px] mb-4">
                      {formatDate(post.published_at)}
                    </p>

                    <p className="text-[#555] text-[15px] leading-relaxed line-clamp-3">
                      {post.excerpt || post.content?.substring(0, 150) + '...'}
                    </p>
                  </article>
                ))
              ) : !loading && (
                <div className="col-span-full py-20 text-center">
                  <p className="text-[#999] text-[18px]">No posts found in this category.</p>
                </div>
              )}
            </div>

            {/* PAGINATION */}
            {meta && meta.last_page > 1 && (
              <div className="flex justify-center items-center gap-6 mt-16 border-t pt-10">
                <button
                  onClick={() => {
                    setPage(Math.max(1, page - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={page === 1}
                  className="px-6 py-2 border border-black font-black text-[14px] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-all uppercase"
                >
                  Previous
                </button>

                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-medium text-gray-500">Page</span>
                  <span className="text-[16px] font-black text-black">{meta.current_page}</span>
                  <span className="text-[14px] font-medium text-gray-500">of {meta.last_page}</span>
                </div>

                <button
                  onClick={() => {
                    setPage(page + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={page >= meta.last_page}
                  className="px-6 py-2 border border-black font-black text-[14px] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-all uppercase"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: SIDEBAR */}
          <aside className="lg:w-[350px] lg:pl-10 lg:border-l border-gray-200">
            {/* Search */}
            <div className="mb-12">
              <label className="block text-[12px] font-bold text-gray-400 mb-3 uppercase tracking-widest">
                Searcher
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:border-black rounded-sm"
                />
                <button className="bg-[#FFD100] px-6 py-2 font-black text-black uppercase text-[14px] hover:bg-yellow-400 transition-colors rounded-sm">
                  Search
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mb-12">
              <h3 className="text-[22px] font-black text-black mb-8">Recent Posts</h3>
              <ul className="space-y-6">
                {(posts.length > 0 ? posts.slice(0, 5) : []).map((p) => (
                  <li key={p.id} className="group">
                    <Link to={`/news/${p.slug}`} className="text-[15px] font-medium text-[#444] leading-snug group-hover:text-[#0085CA] transition-colors line-clamp-2">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-[22px] font-black text-black text-center mb-8 uppercase tracking-tight">Categories</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Art', count: 4 },
                  { name: 'Business', count: 2 },
                  { name: 'Health', count: 5 },
                  { name: 'Politics', count: 2 },
                  { name: 'Science', count: 2 },
                  { name: 'Sports', count: 2 },
                  { name: 'World', count: 2 }
                ].map((cat) => (
                  <li key={cat.name}>
                    <Link to={`/${cat.name.toLowerCase()}`} className="flex justify-between items-center text-[15px] text-gray-600 hover:text-black transition-colors py-1">
                      <span>{cat.name} ({cat.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
