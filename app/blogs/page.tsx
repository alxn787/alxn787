'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogdata";
import Link from "next/link";

const Blogs = () => {


  // Filter posts based on search term and selected tag


  return (
    <div className="min-h-screen bg-gradient-to-br w-screen from-gray-900 via-black to-gray-900 text-white scroll-smooth">
      {/* Navigation */}
      <div className="h-20"></div>
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white/50 white/20 bg-clip-text text-transparent animate-fade-in">
              Thoughts
            </h1>
          </div>
          <div className="mb-8 space-y-4"></div>

          <div className="flex flex-col gap-8 ">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.id}`}>
                <Card className="bg-neutral-800/30 border-white/10 backdrop-blur-sm hover:bg-black/100 transition-all duration-300 hover-scale group h-full">
                  <CardContent className="p-0">
                    
                    <div className="p-6">
                      <h3 className=" flex justify-center text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="flex justify-center text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Blogs;
