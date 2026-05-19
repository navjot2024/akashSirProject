import { ArrowRight, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function BlogPage() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts = [
    {
      title: 'THE BIGGEST MISUNDERSTANDING ABOUT SMART SCHEDULING',
      excerpt: 'Most people think scheduling is about finding the one perfect time. Here\'s what actually works...',
      category: 'Smart Scheduling',
      author: 'Chad Ostrowski',
      date: 'Mar 15, 2024',
      image: '/src/3.jpg',
      readTime: '5 min read'
    },
    {
      title: 'HOW GROUPS ACTUALLY MAKE DECISIONS',
      excerpt: 'Spoiler alert: It\'s not about majority vote. Here\'s what psychology tells us about group decision making...',
      category: 'Decision Making',
      author: 'Emma Rodriguez',
      date: 'Mar 12, 2024',
      image: '/src/4.jpg',
      readTime: '7 min read'
    },
    {
      title: 'THE PERFECT WEEKEND PLANNING FORMULA',
      excerpt: 'We analyzed thousands of successful weekend plans. Here\'s the blueprint that works every time...',
      category: 'Weekend Planning',
      author: 'James Mitchell',
      date: 'Mar 10, 2024',
      image: '/src/5.jpg',
      readTime: '6 min read'
    },
    {
      title: 'TEAM COORDINATION 101: START HERE',
      excerpt: 'New to coordinating group activities? This guide covers everything you need to know...',
      category: 'Team Coordination',
      author: 'Sarah Chen',
      date: 'Mar 8, 2024',
      image: '/src/6.jpg',
      readTime: '4 min read'
    },
    {
      title: 'BUILDING SOCIAL CONNECTIONS THROUGH ACTIVITIES',
      excerpt: 'Learn how shared experiences strengthen friendships and create lasting bonds...',
      category: 'Social Connection',
      author: 'Michael Torres',
      date: 'Mar 5, 2024',
      image: '/src/7.jpg',
      readTime: '8 min read'
    },
    {
      title: 'CREATIVE IDEAS FOR MEMORABLE WEEKENDS',
      excerpt: 'Tired of the same old plans? Here are 50 unique activity ideas your friends will love...',
      category: 'Fun Ideas',
      author: 'Lisa Anderson',
      date: 'Mar 1, 2024',
      image: '/src/8.jpg',
      readTime: '10 min read'
    },
    {
      title: 'THE THING MOST PEOPLE GET WRONG ABOUT THE GROUP METHOD',
      excerpt: 'Why traditional group planning fails and how our algorithm solves it...',
      category: 'Group Activities',
      author: 'David Wilson',
      date: 'Feb 28, 2024',
      image: '/src/21.jpg',
      readTime: '6 min read'
    },
    {
      title: 'POLLING VS DEMOCRACY: WHICH WORKS BETTER?',
      excerpt: 'We compared different decision-making methods. The results might surprise you...',
      category: 'Decision Making',
      author: 'Rachel Green',
      date: 'Feb 25, 2024',
      image: '/src/22.jpg',
      readTime: '5 min read'
    },
    {
      title: 'CALENDAR SYNC HACKS EVERYONE SHOULD KNOW',
      excerpt: 'Master the scheduling features and never miss a weekend plan again...',
      category: 'Smart Scheduling',
      author: 'Tom Jackson',
      date: 'Feb 22, 2024',
      image: '/src/23.jpg',
      readTime: '4 min read'
    },
    {
      title: 'WHY MOST GROUP PLANS FAIL (AND HOW TO FIX IT)',
      excerpt: 'We analyzed 10,000 groups and found the 5 critical mistakes that kill weekend plans...',
      category: 'Weekend Planning',
      author: 'Alex Chen',
      date: 'Feb 20, 2024',
      image: '/src/24.jpg',
      readTime: '7 min read'
    },
    {
      title: 'THE PSYCHOLOGY OF GROUP COORDINATION',
      excerpt: 'Understanding how groups make decisions and how to leverage it for better planning...',
      category: 'Team Coordination',
      author: 'Dr. Sarah Mitchell',
      date: 'Feb 18, 2024',
      image: '/src/25.jpg',
      readTime: '9 min read'
    },
    {
      title: 'ADVENTURE IDEAS FOR EVERY BUDGET',
      excerpt: 'From budget-friendly to luxury experiences, we\'ve got ideas for every group...',
      category: 'Fun Ideas',
      author: 'Adventure Andy',
      date: 'Feb 16, 2024',
      image: '/src/26.jpg',
      readTime: '8 min read'
    },
    {
      title: 'VIRTUAL MEETUPS: PLANNING WHEN YOU\'RE APART',
      excerpt: 'How to use WeekendPlanning for coordinating virtual hangouts and online activities...',
      category: 'Group Activities',
      author: 'Virtual Victor',
      date: 'Feb 14, 2024',
      image: '/src/21.jpg',
      readTime: '5 min read'
    },
    {
      title: 'BUILDING BETTER FRIENDSHIPS THROUGH SHARED EXPERIENCES',
      excerpt: 'Research shows that coordinated group activities strengthen friendships. Here\'s why...',
      category: 'Social Connection',
      author: 'Connection Coach',
      date: 'Feb 12, 2024',
      image: '/src/22.jpg',
      readTime: '6 min read'
    },
    {
      title: 'TIME ZONE TRAVEL: PLANNING ACROSS CONTINENTS',
      excerpt: 'Planning with friends around the world? Here\'s our comprehensive guide...',
      category: 'Smart Scheduling',
      author: 'Global Gary',
      date: 'Feb 10, 2024',
      image: '/src/3.jpg',
      readTime: '7 min read'
    },
    {
      title: 'SEASONAL PLANNING: ACTIVITIES FOR EVERY SEASON',
      excerpt: 'Discover the best activities and planning strategies for spring, summer, fall, and winter...',
      category: 'Fun Ideas',
      author: 'Seasonal Sam',
      date: 'Feb 8, 2024',
      image: '/src/4.jpg',
      readTime: '6 min read'
    },
    {
      title: 'THE ULTIMATE GUIDE TO GROUP DYNAMICS',
      excerpt: 'Master the art of keeping everyone happy while planning group activities...',
      category: 'Team Coordination',
      author: 'Leadership Laura',
      date: 'Feb 5, 2024',
      image: '/src/5.jpg',
      readTime: '8 min read'
    },
    {
      title: 'SUSTAINABLE WEEKEND IDEAS FOR CONSCIOUS TRAVELERS',
      excerpt: 'Plan amazing weekends while being mindful of the environment. Here\'s how...',
      category: 'Adventure Ideas',
      author: 'Green Gregory',
      date: 'Feb 2, 2024',
      image: '/src/6.jpg',
      readTime: '7 min read'
    }
  ]

  const categories = ['All', 'Smart Scheduling', 'Decision Making', 'Weekend Planning', 'Team Coordination', 'Social Connection', 'Fun Ideas', 'Group Activities']

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate('/')}>WeekendPlanning</div>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="/" className="text-white font-semibold hover:text-yellow-400 transition text-lg">HOME</a>
            <a href="/about" className="text-white font-semibold hover:text-yellow-400 transition text-lg">ABOUT</a>
            <a href="/resources" className="text-white font-semibold hover:text-yellow-400 transition text-lg">RESOURCES</a>
            <a href="/features" className="text-white font-semibold hover:text-yellow-400 transition text-lg">FEATURES</a>
            <a href="/blog" className="text-yellow-400 font-semibold text-lg">BLOG</a>
            <a href="/contact" className="text-white font-semibold hover:text-yellow-400 transition text-lg">CONTACT</a>
            <button onClick={() => navigate('/login')} className="px-8 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-48 pb-32 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `url('/src/11.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '700px',
          backgroundColor: '#f0f0f0'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-16 bg-white px-16 py-12 rounded-3xl inline-block shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-black text-black">
              WeekendPlanning Blog
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-white font-bold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Tips, tricks, and insights for better weekend planning
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-20">
            {/* Search Bar */}
            <div className="mb-12 relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-8 py-6 text-2xl border-4 border-black rounded-3xl focus:outline-none focus:ring-4 focus:ring-lime-400"
              />
              <Search size={32} className="absolute right-6 top-6 text-black pointer-events-none" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-4 rounded-full text-xl font-black transition transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-lime-400 text-black border-4 border-black'
                      : 'bg-white text-black border-4 border-black hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {filteredPosts.map((post, i) => (
              <div
                key={i}
                className="group border-4 border-black rounded-3xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-black">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-white">
                  <h3 className="text-3xl md:text-4xl font-black text-black mb-4 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm font-bold text-gray-600">
                    <span>📅 {post.date}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>

                  {/* Author */}
                  <div className="pt-6 border-t-2 border-black">
                    <p className="text-lg font-black text-black">By {post.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-5xl font-black text-gray-700 mb-4">No articles found</h3>
              <p className="text-2xl text-gray-600">Try adjusting your search or category filter</p>
            </div>
          )}

          {/* Featured Article */}
          <div className="mt-32 pt-32 border-t-4 border-gray-300">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-black h-80">
                <img src="/src/11.jpg" alt="featured" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="inline-block bg-lime-400 text-black px-6 py-3 rounded-full font-black text-xl mb-6">
                  FEATURED
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-black mb-6">
                  The Complete Guide to Weekend Planning Success
                </h3>
                <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                  Everything you need to know to plan the perfect weekends with your friends. From scheduling to decision making, we cover it all in this comprehensive guide.
                </p>
                <div className="flex gap-6 items-center mb-8">
                  <span className="text-lg font-bold">By Expert Team</span>
                  <span className="text-lg font-bold">📅 Feb 1, 2024</span>
                  <span className="text-lg font-bold">⏱️ 15 min read</span>
                </div>
                <button className="px-8 py-4 bg-lime-400 text-black font-black text-xl rounded-full hover:bg-yellow-400 transition">
                  Read Full Article →
                </button>
              </div>
            </div>
          </div>

          {/* Author Spotlight */}
          <div className="mt-32">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">Meet Our Authors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Chad Ostrowski', articles: 12, image: '/src/21.jpg' },
                { name: 'Emma Rodriguez', articles: 8, image: '/src/22.jpg' },
                { name: 'James Mitchell', articles: 15, image: '/src/23.jpg' },
                { name: 'Sarah Chen', articles: 10, image: '/src/24.jpg' }
              ].map((author, i) => (
                <div key={i} className="text-center">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-black mb-6 h-64">
                    <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-3xl font-black text-black mb-2">{author.name}</h3>
                  <p className="text-lg font-bold text-lime-400">{author.articles} Articles</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Topics */}
          <div className="mt-32">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">Popular Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                'Scheduling Tips',
                'Group Dynamics',
                'Activity Ideas',
                'Decision Making',
                'Technology Tips',
                'Social Planning',
                'Budget Hacks',
                'Travel Planning',
                'Virtual Events',
                'Time Management'
              ].map((topic, i) => (
                <button key={i} className="p-6 border-4 border-black rounded-2xl hover:bg-lime-400 transition font-black text-lg text-black">
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Comments */}
          <div className="mt-32">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">Recent Comments</h2>
            <div className="space-y-8">
              {[
                {
                  author: 'John Smith',
                  comment: 'This article totally changed how I plan weekends with my friends!',
                  article: 'The Perfect Weekend Planning Formula',
                  rating: 5
                },
                {
                  author: 'Lisa Johnson',
                  comment: 'The tips about polling were super helpful. Love this resource!',
                  article: 'How Groups Actually Make Decisions',
                  rating: 5
                },
                {
                  author: 'Mike Davis',
                  comment: 'Finally, someone explains the psychology behind group decisions.',
                  article: 'The Psychology of Group Coordination',
                  rating: 5
                }
              ].map((item, i) => (
                <div key={i} className="p-8 border-4 border-black rounded-3xl hover:shadow-2xl transition">
                  <div className="flex gap-2 mb-4">
                    {[...Array(item.rating)].map((_, j) => (
                      <span key={j} className="text-2xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-2xl text-gray-700 font-bold mb-4">"{item.comment}"</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-black text-black">{item.author}</span>
                    <span className="text-lg font-bold text-gray-600">On: {item.article}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-black mb-8">Subscribe to Our Newsletter</h2>
          <p className="text-2xl md:text-3xl mb-12 leading-relaxed">Get the latest tips and insights delivered to your inbox</p>
          <div className="flex gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-8 py-6 text-2xl rounded-full text-black border-none focus:outline-none"
            />
            <button className="px-12 py-6 bg-lime-400 text-black font-black text-2xl rounded-full hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
