import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAdvertisementsByPlacement } from '../../hooks/useAdvertisements';
import { usePostBySlug, usePostsByCategory } from '../../hooks/usePosts';
import { AD_PLACEMENTS } from '../../utils/categoryUtils';
import Header from '../Header';
import Footer from '../Footer';
import BannerDetail from '../../assets/detail-hero.png'
import ads from '../../assets/burger.png'


const PLACEHOLDER_IMAGE =
  'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80';

const AD_PLACEHOLDER_LEFT_1 = 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=300&h=600&q=80';
const AD_PLACEHOLDER_LEFT_2 = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&h=600&q=80';
const AD_PLACEHOLDER_RIGHT_1 = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=300&h=600&q=80';
const AD_PLACEHOLDER_RIGHT_2 = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=300&h=600&q=80';

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
  <div className="animate-pulse">
    <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/4 mb-10"></div>
    <div className="h-[450px] w-full bg-gray-200 rounded mb-10"></div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
  </div>
);

export default function PostDetail() {
  const { id: slug } = useParams();

  // Fetch the post by slug
  const { data: post, loading, error } = usePostBySlug(slug);

  // Fetch related posts for navigation and Must Read section
  const { data: relatedPostsResponse } = usePostsByCategory(post?.category?.slug || '', 1, 5);

  const nextPost = useMemo(() => {
    if (!relatedPostsResponse?.data) return null;
    const currentIdx = relatedPostsResponse.data.findIndex(p => p.slug === slug);
    return relatedPostsResponse.data[currentIdx + 1] || relatedPostsResponse.data[0];
  }, [relatedPostsResponse, slug]);

  if (error) {
    return (
      <>
        <Header showSlider={false} />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center p-10 bg-white shadow-xl rounded-lg">
            <h1 className="text-2xl font-black mb-4">Post not found</h1>
            <p className="text-gray-500 mb-6">{error}</p>
            <Link to="/" className="inline-block bg-black text-white px-8 py-3 font-bold uppercase transition hover:bg-gray-800">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />

      </>

    );
  }

  return (
    <>
      <Header showSlider={false} />
      <main className="min-h-screen bg-gray-50 pt-10 pb-20">
        <img
          src={BannerDetail}
          alt="banner detail"
          className="h-full w-full mb-[50px] "
        />

        {/* SECTION 1: ARTICLE + SIDEBARS */}
        <div className="mx-auto max-w-[1440px] px-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* LEFT ADS COLUMN */}
            <aside className="hidden xl:flex flex-col gap-6 w-[280px] shrink-0">
              <div className="overflow-hidden rounded-sm shadow-sm border border-gray-100">
                <img src={AD_PLACEHOLDER_LEFT_1} alt="Ad 1" className="w-full object-cover h-[500px]" />
              </div>
              <div className="overflow-hidden rounded-sm shadow-sm border border-gray-100">
                <img src={AD_PLACEHOLDER_LEFT_2} alt="Ad 2" className="w-full object-cover h-[450px]" />
              </div>
            </aside>

            {/* MAIN ARTICLE */}
            <article className="flex-1 bg-white p-8 md:p-12 lg:p-16 shadow-sm border border-gray-100 rounded-sm w-full overflow-hidden">
              {loading ? (
                <PostSkeleton />
              ) : post ? (
                <>
                  {/* TITLE */}
                  <h1 className="text-[32px] md:text-[42px] font-black text-black leading-[1.1] mb-6">
                    {post.title}
                  </h1>

                  {/* META */}
                  <div className="flex items-center gap-2 text-gray-400 text-[14px] font-medium mb-10">
                    <span>By {post.author?.name || 'kalpeshb'}</span>
                    <span>/</span>
                    <time>{formatDate(post.published_at)}</time>
                  </div>

                  {/* FEATURED IMAGE */}
                  <div className="mb-12 overflow-hidden rounded-sm">
                    <img
                      src={post.featured_image || PLACEHOLDER_IMAGE}
                      alt={post.title}
                      className="w-full h-auto object-cover max-h-[550px]"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="prose prose-lg max-w-none mb-16">
                    <div
                      className="text-[#333] text-[17px] md:text-[18px] leading-[1.8] space-y-6 post-content"
                      dangerouslySetInnerHTML={{
                        __html: post.content || post.excerpt || '<p>Content not available</p>',
                      }}
                    />

                    {/* Styled Blockquote Placeholder - if not in content */}
                    {!post.content?.includes('blockquote') && (
                      <blockquote className="border-l-4 border-gray-100 pl-8 my-10 italic text-gray-500 text-[18px] leading-relaxed">
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
                      </blockquote>
                    )}
                  </div>

                  {/* NAVIGATION */}
                  {nextPost && (
                    <div className="flex justify-end border-t border-gray-100 pt-10 mt-10">
                      <Link to={`/news/${nextPost.slug}`} className="group text-right">
                        <span className="text-[12px] font-black text-gray-400 uppercase tracking-widest block mb-2 group-hover:text-black transition-colors">
                          Next →
                        </span>
                        <h4 className="text-[16px] font-bold text-black max-w-[300px] leading-tight group-hover:text-[#0085CA] transition-colors">
                          {nextPost.title}
                        </h4>
                      </Link>
                    </div>
                  )}
                </>
              ) : null}
            </article>

            {/* RIGHT ADS COLUMN */}
            <aside className="hidden lg:flex flex-col gap-6 w-[280px] shrink-0">
              <div className="overflow-hidden rounded-sm shadow-sm border border-gray-100">
                <img src={AD_PLACEHOLDER_RIGHT_1} alt="Ad 3" className="w-full object-cover h-[550px]" />
              </div>
              <div className="overflow-hidden rounded-sm shadow-sm border border-gray-100">
                <img src={AD_PLACEHOLDER_RIGHT_2} alt="Ad 4" className="w-full object-cover h-[500px]" />
              </div>
            </aside>
          </div>
        </div>

        {/* SECTION 2: MUST READ (Centered, No Sidebars) */}
        <div className="mx-auto max-w-[840px] px-6 mb-12">
          <section className="bg-white p-10 md:p-12 shadow-sm border border-gray-100 rounded-sm">
            <h3 className="text-[24px] font-black text-black mb-8">Must Read</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {(relatedPostsResponse?.data?.length > 0 ? relatedPostsResponse.data.slice(0, 2) : []).map((p) => (
                <Link to={`/news/${p.slug}`} key={p.id} className="group">
                  <div className="overflow-hidden rounded-sm mb-4 h-[200px]">
                    <img src={p.featured_image || PLACEHOLDER_IMAGE} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-[18px] font-black text-black leading-tight mb-3 group-hover:text-[#0085CA] transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">
                    {p.category?.name} | {formatDate(p.published_at)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* SECTION 3: FULL WIDTH AD BANNER */}
        <div className="w-full mb-12">
          <img
            src={ads}
            alt="Full Width Ad"
            className="w-full h-auto object-cover "
          />
        </div>

        {/* SECTION 4: LEAVE A COMMENT (Centered, No Sidebars) */}
        <div className="mx-auto max-w-[840px] px-6">
          <section className="bg-white p-10 md:p-12 shadow-sm border border-gray-100 rounded-sm">
            <h3 className="text-[24px] font-black text-black mb-4">Leave a Comment</h3>
            <p className="text-gray-500 text-[14px] mb-8">Your email address will not be published. Required fields are marked *</p>

            <form className="space-y-6">
              <div>
                <textarea
                  placeholder="Type here.."
                  rows={8}
                  className="w-full border border-gray-200 p-4 focus:outline-none focus:border-black rounded-sm bg-gray-50/50"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Name*" className="border border-gray-200 p-4 focus:outline-none focus:border-black rounded-sm bg-gray-50/50" />
                <input type="email" placeholder="Email*" className="border border-gray-200 p-4 focus:outline-none focus:border-black rounded-sm bg-gray-50/50" />
                <input type="text" placeholder="Website" className="border border-gray-200 p-4 focus:outline-none focus:border-black rounded-sm bg-gray-50/50" />
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="save-info" className="w-4 h-4 accent-black" />
                <label htmlFor="save-info" className="text-gray-500 text-[13px]">Save my name, email, and website in this browser for the next time I comment.</label>
              </div>
              <button className="bg-[#df432b] text-white font-bold uppercase px-8 py-4 hover:bg-black transition-colors rounded-sm">
                Post Comment
              </button>
            </form>
          </section>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
        .post-content p { margin-bottom: 1.5rem; }
        .post-content blockquote { 
          border-left: 4px solid #f3f4f6;
          padding-left: 2rem;
          margin: 2.5rem 0;
          font-style: italic;
          color: #6b7280;
          font-size: 1.125rem;
        }
      `}} />
      </main>
      <Footer />
    </>

  );
}
