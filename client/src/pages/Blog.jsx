import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";

function Blog() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 6;

  const handleCreateBlog = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/blog-admin");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setError("");

        const cacheKey = `blogs-page-${currentPage}`;
        const cachedBlogs = sessionStorage.getItem(cacheKey);

        if (cachedBlogs) {
          const cachedData = JSON.parse(cachedBlogs);

          setBlogs(cachedData.blogs);
          setTotalPages(cachedData.totalPages);
          setLoading(false);
        }

        const response = await fetch(
          `https://my-express-api-pi.vercel.app/api/blogs?page=${currentPage}&limit=${limit}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch blogs");
        }

        setBlogs(data.blogs);
        setTotalPages(data.totalPages);

        sessionStorage.setItem(
          cacheKey,
          JSON.stringify(data)
        );
      } catch (error) {
        console.error("Fetch blogs error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  return (
    <section className="min-h-screen bg-[#fafafa] py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Our Blog
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Discover stories &
              <span className="block text-gray-500">
                fresh ideas.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              Explore useful insights, creative ideas, and
              stories from our community.
            </p>
          </div>

          {/* Create Blog */}
          <button
            onClick={handleCreateBlog}
            className="group flex h-12 w-fit items-center gap-2 rounded-full bg-black px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg active:scale-95"
          >
            <Plus
              size={18}
              className="transition-transform duration-300 group-hover:rotate-90"
            />

            Create a Blog
          </button>
        </div>


        {/* ================= LOADING ================= */}
        {loading && blogs.length === 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <div className="h-60 animate-pulse bg-gray-200" />

                <div className="space-y-4 p-6">
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                  <div className="h-7 w-3/4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        )}


        {/* ================= ERROR ================= */}
        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="font-medium text-red-600">
              {error}
            </p>
          </div>
        )}


        {/* ================= EMPTY ================= */}
        {!loading && !error && blogs.length === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-20 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              No blogs available yet
            </h2>

            <p className="mt-2 text-gray-500">
              Be the first person to share a story.
            </p>

            <button
              onClick={handleCreateBlog}
              className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Create your first blog
            </button>
          </div>
        )}


        {/* ================= BLOG CARDS ================= */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog, index) => (
              <article
                key={blog._id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.heading}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Blog Number */}
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
                    #{(currentPage - 1) * limit + index + 1}
                  </div>
                </div>


                {/* Content */}
                <div className="p-6">

                  {/* Date / label */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Featured Story
                  </p>

                  {/* Heading */}
                  <h2 className="mt-2 line-clamp-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 transition group-hover:text-gray-600">
                    {blog.heading}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                    {blog.content}
                  </p>


                  {/* Hashtags */}
                  {blog.hashtags?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {blog.hashtags.map((tag, index) => (
                        <span
                          key={`${tag}-${index}`}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition hover:bg-gray-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}


                  {/* Read More */}
                  <button
                    onClick={() =>
                      navigate(`/blog/${blog._id}`)
                    }
                    className="group/button mt-6 flex items-center gap-2 text-sm font-semibold text-gray-900"
                  >
                    Read More

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </button>

                </div>
              </article>
            ))}

          </div>
        )}


        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button
              onClick={() =>
                setCurrentPage((prev) => prev - 1)
              }
              disabled={currentPage === 1}
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Previous
            </button>

            <div className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white">
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => prev + 1)
              }
              disabled={currentPage === totalPages}
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next →
            </button>

          </div>
        )}

      </div>
    </section>
  );
}

export default Blog;