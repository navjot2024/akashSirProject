import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import GroupScheduling from './pages/GroupScheduling'
import ActivitySuggestions from './pages/ActivitySuggestions'
import PollsVoting from './pages/PollsVoting'
import SocialConnections from './pages/SocialConnections'
import AdminDashboard from './pages/AdminDashboard'
import AboutPage from './pages/AboutPage'
import FeaturesPage from './pages/FeaturesPage'
import ResourcesPage from './pages/ResourcesPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = (user) => {
    setIsAuthenticated(true)
    setCurrentUser(user)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
  }

  return (
    <Router>
      {isAuthenticated ? (
        <div className="flex h-screen bg-gray-50">
          <Sidebar open={sidebarOpen} currentUser={currentUser} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} onLogout={handleLogout} currentUser={currentUser} />
            <main className="flex-1 overflow-auto">
              <Routes>
                <Route path="/dashboard" element={<Dashboard currentUser={currentUser} />} />
                <Route path="/scheduling" element={<GroupScheduling currentUser={currentUser} />} />
                <Route path="/activities" element={<ActivitySuggestions currentUser={currentUser} />} />
                <Route path="/polls" element={<PollsVoting currentUser={currentUser} />} />
                <Route path="/social" element={<SocialConnections currentUser={currentUser} />} />
                <Route path="/admin" element={<AdminDashboard currentUser={currentUser} />} />
           <Route path="/" element={<Dashboard currentUser={currentUser} />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/login" element={<AuthPage onLogin={handleLogin} />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      )}
    </Router>
  )
}

export default App
