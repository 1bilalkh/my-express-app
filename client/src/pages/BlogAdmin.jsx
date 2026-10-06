import { useState } from "react";

function BlogAdmin() {
    const [formData, setFormData] = useState({
        heading: "",
        image: "",
        content: "",
        hashtags: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const hashtagsArray = formData.hashtags
                .split(" ")
                .map((tag) => tag.trim())
                .filter((tag) => tag !== "");

            const response = await fetch(
                "https://my-express-api-pi.vercel.app/api/blogs",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        heading: formData.heading,
                        image: formData.image,
                        content: formData.content,
                        hashtags: hashtagsArray,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to create blog"
                );
            }

            console.log("Created blog:", data.blog);

            setMessage("Blog created successfully!");

            setFormData({
                heading: "",
                image: "",
                content: "",
                hashtags: "",
            });
        } catch (error) {
            console.error("Create blog error:", error);

            setMessage(error.message);
        }
    };

    return (
        <section className="max-w-3xl mx-auto p-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    Create Blog
                </h1>

                <p className="text-gray-600 mt-2">
                    Create and publish a new blog post.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white border rounded-xl p-6 shadow-sm space-y-6"
            >
                {/* Heading */}
                <div>
                    <label
                        htmlFor="heading"
                        className="block text-sm font-medium mb-2"
                    >
                        Heading
                    </label>

                    <input
                        id="heading"
                        type="text"
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                        placeholder="Enter blog heading"
                        required
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Image */}
                <div>
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium mb-2"
                    >
                        Image URL
                    </label>

                    <input
                        id="image"
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        required
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Content */}
                <div>
                    <label
                        htmlFor="content"
                        className="block text-sm font-medium mb-2"
                    >
                        Content
                    </label>

                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Write your blog content..."
                        rows="10"
                        required
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Hashtags */}
                <div>
                    <label
                        htmlFor="hashtags"
                        className="block text-sm font-medium mb-2"
                    >
                        Hashtags
                    </label>

                    <input
                        id="hashtags"
                        type="text"
                        name="hashtags"
                        value={formData.hashtags}
                        onChange={handleChange}
                        placeholder="#react #javascript #webdevelopment"
                        required
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />

                    <p className="text-sm text-gray-500 mt-2">
                        Separate hashtags with spaces.
                    </p>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Submit Blog
                </button>

                {/* Message */}
                {message && (
                    <p className="text-green-600">
                        {message}
                    </p>
                )}
            </form>
        </section>
    );
}

export default BlogAdmin;