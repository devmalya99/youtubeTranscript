import { useState } from "react";
import {
  Sun,
  Moon,
  Star,
  ListFilter,
  Eye,
  Utensils,
  Timer,
} from "lucide-react";
import { NavLink } from "react-router";

export default function RecipeSnapApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  const userFlowSteps = [
    {
      step: 1,
      title: "Upload Video",
      description: "Paste a YouTube link to start.",
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "AI extracts key recipe content.",
    },
    {
      step: 3,
      title: "Filter & Adjust",
      description: "Apply your dietary filters.",
    },
    {
      step: 4,
      title: "Save & Cook",
      description: "Save and start cooking instantly.",
    },
  ];

  const reviews = [
    {
      name: "Alex",
      role: "Home Cook",
      content: "Amazing! Recipes from videos in seconds.",
      rating: 5,
    },
    {
      name: "Samira",
      role: "Nutritionist",
      content: "Love the dietary filter feature.",
      rating: 5,
    },
    {
      name: "Jordan",
      role: "Food Blogger",
      content: "No more rewinding to note ingredients.",
      rating: 4,
    },
  ];

  const faqs = [
    {
      question: "Is it free?",
      answer: "Yes! You can try RecipeSnap AI for free.",
    },
    {
      question: "What videos work best?",
      answer: "Any cooking video with clear instructions works well.",
    },
    {
      question: "Can I download recipes?",
      answer: "Absolutely! Save or download them as PDF.",
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      <header
        className={`sticky top-0 z-50 shadow-sm ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-amber-500" />
            <h1 className="text-xl font-bold tracking-tight">RecipeSnap AI</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            {["features", "how-it-works", "reviews", "faq"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === tab ? "text-amber-500" : ""
                }`}
              >
                {tab
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button className="px-4 py-2 rounded-md bg-amber-400 text-white font-medium hover:bg-amber-500">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              AI-Powered Recipe Discovery
            </h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Turn YouTube cooking videos into structured recipes with
              ingredients tailored to your diet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/user/requirements"
                className="px-6 py-3 rounded-md bg-amber-500 text-white font-medium hover:bg-amber-600"
              >
                Experience
              </NavLink>

              <NavLink 
              to="/login"
              className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white">
                login
              </NavLink>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="AI Recipe Demo"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Smart Recipe Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ListFilter />,
                title: "Instant Ingredient Lists",
                desc: "No scrubbing videos. Get structured ingredients instantly.",
              },
              {
                icon: <Utensils />,
                title: "Dietary Filters",
                desc: "Filter by Vegan, Gluten-Free and more.",
              },
              {
                icon: <Timer />,
                title: "Meal Timing",
                desc: "Breakfast to midnight snacks, sorted.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple 4-Step Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {userFlowSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center text-2xl font-bold bg-white dark:bg-gray-700 text-amber-500 shadow-md">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-amber-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {review.content}
                </p>
                <div className="font-medium">
                  <p>{review.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-white dark:bg-gray-700 shadow-sm"
              >
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 rounded-xl text-center bg-white dark:bg-gray-800 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Join thousands of home cooks discovering better recipes with AI.
          </p>
          <button className="px-8 py-3 rounded-md bg-amber-500 text-white font-medium text-lg hover:bg-amber-600">
            Get Started - It's Free
          </button>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white">RecipeSnap AI</h2>
            </div>
            <p className="text-sm">
              Smart recipe discovery powered by artificial intelligence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} RecipeSnap AI. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
