'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { getBlogPostById } from "@/data/blogdata";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : null;
  const router = useRouter();

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Mf theres nothing here</h1>
          <Link href="/blogs">
            <Button>Back to Blogs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}

      <article className="pt-24 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between">
                <div className="relative left-0 top-0 mb-5 cursor-pointer hover:text-white/80" onClick={()=>router.back()}>
                    <ArrowLeft/>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                    })}</span>
                </div>
                </div>
            </div>
          {/* Post Header */}
          <header className="mb-8">   
            <h1 className="flex justify-center text-4xl md:text-5xl font-bold m-4 bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
          </header>

          {/* Post Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 text-white">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold mb-3 mt-6 text-white">{children}</h3>,
                  p: ({ children }) => <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">{children}</ul>,
                  li: ({ children }) => <li className="text-gray-300">{children}</li>,
                  code: ({ children }) => <code className="bg-gray-800 px-2 py-1 rounded text-blue-300 text-sm">{children}</code>,
                  pre: ({ children }) => <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700">{children}</pre>,
                  img: ({ src, alt, title }) => (
                    <div className="my-8 flex justify-center">
                      <div className="relative max-w-full">
                        <img
                          src={src}
                          alt={alt || "Blog image"}
                          title={title}
                          className="rounded-lg shadow-2xl border border-gray-700 max-w-full h-auto"
                          style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                        {alt && (
                          <p className="text-center text-sm text-gray-400 mt-2 italic">
                            {alt}
                          </p>
                        )}
                      </div>
                    </div>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;