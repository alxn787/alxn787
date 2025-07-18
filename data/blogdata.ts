
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Commonsense & Investing",
    excerpt: "No fancy stuff. All it takes is commonsense. How to close green on a calendar year",
    content: `
# Step 1 

First step to trading is to STAY AWAY FROM OPTIONS! so that you don't lose all your money and stop the next day.

We're not here to gamble or be rich in a day or a month. If yes, go ahead and play dream11 or stake. 

This is to make you close in green so that you have the confidence to play with options.

I'll get back to options and indices on the next blogs.

## Investing Rules

### 1. Find a long term uptrend and its retracements

![Trading Strategy](/invest1.png "Basic trading strategy")

The image is self-explanatory .Now this is Nifty . Lets take the fall from the recent highs

26,272 to 21,741 - 17% fall .

At the same time 

tata motors fell from 1100 to 540 ~ 50%

Hindalco from 765 to 550 - 27%

Bel from 308 to 240 - 22%

Its obvious the Indices are going to retrace to the highs, and when it does the individual stocks will too.

The cool thing about this is , if a stock falls 50% and then retraces to the highs , then our returns would be 100%

Basic math: 100 -> 50 ->100 100% returns

Bel now at 394 - 64%
Hindalco at 640 - 19% 

All in a matter of 6 months and the highs havent been retraced yet

This is the case of large cap stocks. Mid and small caps falls harder, gains even more . Do what you can with that info. 


### 2. Confirm your Conviction with results

There are possibilities that the company itself is going to shit and thats the reason it drops, to avoid such blunders take the financial reports for the past 3 years and check the growth(for small and midcap).

### 3. It's okay to not catch the extremes

Nobody can catch every bottom or peak. average your buys and deal with it. Market was here before you were born and its gonna be here after you are dead. Its okay to miss executions, more will come .

## Takeaways

Risk management and Position sizing is the key. Know how much you can afford to lose.

Don't listen to finfluencers. Everyone's parroting the same book — “Don't buy a car,” “Rent instead of buying a house,” blah blah blah. Mf, am I supposed to take my girlfriend on a drive in a mutual fund? Life isn't a spreadsheet, smart money isn't just about ROI — it's also about living. A car might depreciate, but memories don't.

For people wondering why i'm making this public. For every 1k visits about 50 will take it seriously. 10 will try to implement it and maybe 1-2 will stick with it until they see some results. Information is never the limiting reagent to success, discipline is.

    `,
    image: "/placeholder.svg",
    date: "2025-06-15",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: "2",
    title: "Fuck Rust",
    excerpt: "Me trying not to kill myself trying to write smart contracts.",
    content: `
# Fighting the urge to not smash my macbook away

    `,
    image: "/placeholder.svg",
    date: "2025-06-15",
    readTime: "4 min read",
    tags: ["TypeScript", "Programming", "Developer Tools"]
  }
];

// Function to simulate adding a new blog post
export const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
  const newPost: BlogPost = {
    ...post,
    id: (blogPosts.length + 1).toString()
  };
  blogPosts.push(newPost);
  return newPost;
};

// Function to get a blog post by ID
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
