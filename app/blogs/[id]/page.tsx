'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { getBlogPostById } from "@/data/blogdata";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : null;

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

      <article className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
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
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-white/10">
            <div className="flex justify-between items-center">
              <Link href="/blogs">
                <Button variant="outline" className="border-white/20 hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Posts
                </Button>
              </Link>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Share this post
              </Button>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;