import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/blogs/${id}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch blog"
          );
        }

        setBlog(data.blog);
      } catch (error) {
        console.error("Fetch blog error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <section className="max-w-4xl mx-auto p-8">
        <p className="text-gray-600">
          Loading blog...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-4xl mx-auto p-8">
        <p className="text-red-600">
          {error}
        </p>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="max-w-4xl mx-auto p-8">
        <p className="text-gray-600">
          Blog not found.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-8">

      {/* Back */}
      <button
        onClick={() => navigate("/blog")}
        className="mb-6 text-sm text-gray-600 hover:text-black"
      >
        ← Back to Blog
      </button>

      {/* Blog */}
      <article>

        {/* Image */}
        <img
          src={blog.image}
          alt={blog.heading}
          className="w-full h-96 object-cover rounded-xl"
        />

        {/* Content */}
        <div className="mt-8">

          <p className="text-sm text-gray-500">
            Blog #{blog.blogNumber}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {blog.heading}
          </h1>

          {/* Author */}
          {blog.author && (
            <div className="mt-4 text-gray-600">
              <p>
                By {blog.author.name}
              </p>

              <p className="text-sm">
                {blog.author.email}
              </p>
            </div>
          )}

          {/* Date */}
          <p className="text-sm text-gray-500 mt-3">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {blog.hashtags?.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="text-sm bg-gray-100 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Blog Content */}
          <div className="mt-8 text-gray-700 leading-8 whitespace-pre-line">
            {blog.content}
          </div>

        </div>

      </article>

    </section>
  );
}

export default BlogDetail;