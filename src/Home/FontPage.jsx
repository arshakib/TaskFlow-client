import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FontPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
            <span className="text-2xl font-bold text-gray-800">TaskFlow</span>
          </motion.div>

          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              <a href="/login">Login</a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <a href="/register">Register</a>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Organize Your Workflow with
              <span className="text-indigo-600"> Elegance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your productivity with our intuitive drag-and-drop task
              manager. Beautifully simple, powerfully efficient.
            </p>

            <motion.button
              onClick={() => navigate("/dashboard")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Go To The Dashboard
            </motion.button>
          </motion.div>

          {/* Animated Board Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-indigo-100 rounded-3xl transform rotate-3" />
            <div className="relative p-8 bg-white rounded-3xl shadow-lg">
              <div className="flex space-x-4 mb-6">
                <div className="w-1/3">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">
                    To-Do
                  </h3>
                  <motion.div
                    className="p-4 mb-4 bg-indigo-50 rounded-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="h-2 bg-indigo-200 rounded mb-2 w-3/4" />
                    <div className="h-2 bg-indigo-200 rounded w-1/2" />
                  </motion.div>
                </div>
                <div className="w-1/3">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">
                    In Progress
                  </h3>
                  <motion.div
                    className="p-4 mb-4 bg-blue-50 rounded-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="h-2 bg-blue-200 rounded mb-2 w-2/3" />
                    <div className="h-2 bg-blue-200 rounded w-1/3" />
                  </motion.div>
                </div>
                <div className="w-1/3">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">
                    Done
                  </h3>
                  <div className="p-4 mb-4 bg-green-50 rounded-lg">
                    <div className="h-2 bg-green-200 rounded mb-2 w-full" />
                    <div className="h-2 bg-green-200 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Why Choose TaskFlow?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.2 }}
            className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-6 h-6 bg-indigo-600 rounded" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Real-time Sync</h3>
            <p className="text-gray-600">
              Real-time synchronization in cybersecurity refers to the process
              of updating data, files, or information across multiple devices or
              systems simultaneously and automatically.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 * 0.2 }}
            className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-6 h-6 bg-indigo-600 rounded" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Drag & Drop</h3>
            <p className="text-gray-600">
              A drag and drop feature is a user interface element that allows
              users to select an object on a screen, grab it with their mouse or
              finger, and then drag it to a new location,
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 * 0.2 }}
            className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-6 h-6 bg-indigo-600 rounded" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cross-Platform</h3>
            <p className="text-gray-600">
              Cross-platform software is a type of software that can run on many
              different operating systems or computer architectures. Together,
              the combination of an operating system
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FontPage;
