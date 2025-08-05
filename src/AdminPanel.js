import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  collection, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc,
  addDoc,
  query,
  orderBy,
  setDoc
} from "firebase/firestore";

function AdminPanel() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [callbackRequests, setCallbackRequests] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [aboutUs, setAboutUs] = useState({});
  const [homepage, setHomepage] = useState({});
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  // Fetch data
  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    try {
      // Fetch callback requests
      const callbackSnapshot = await getDocs(
        query(collection(db, "callback-requests"), orderBy("timestamp", "desc"))
      );
      setCallbackRequests(callbackSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));

      // Fetch testimonials
      const testimonialsSnapshot = await getDocs(collection(db, "testimonials"));
      setTestimonials(testimonialsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));

      // Fetch projects
      const projectsSnapshot = await getDocs(collection(db, "projects"));
      setProjects(projectsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));

      // Fetch services
      const servicesSnapshot = await getDocs(collection(db, "services"));
      setServices(servicesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));

      // Fetch about us content
      const aboutUsDoc = await getDocs(collection(db, "about-us"));
      if (!aboutUsDoc.empty) {
        setAboutUs(aboutUsDoc.docs[0].data());
      }

      // Fetch homepage content
      const homepageDoc = await getDocs(collection(db, "homepage"));
      if (!homepageDoc.empty) {
        setHomepage(homepageDoc.docs[0].data());
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateRequestStatus = async (requestId, status) => {
    try {
      await updateDoc(doc(db, "callback-requests", requestId), { status });
      fetchData();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const deleteTestimonial = async (testimonialId) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        await deleteDoc(doc(db, "testimonials", testimonialId));
        fetchData();
      } catch (error) {
        console.error("Error deleting testimonial:", error);
      }
    }
  };

  const addTestimonial = async (testimonialData) => {
    try {
      await addDoc(collection(db, "testimonials"), {
        ...testimonialData,
        timestamp: new Date()
      });
      fetchData();
    } catch (error) {
      console.error("Error adding testimonial:", error);
    }
  };

  const updateAboutUs = async (aboutData) => {
    try {
      await setDoc(doc(db, "about-us", "content"), {
        ...aboutData,
        updatedAt: new Date()
      });
      fetchData();
    } catch (error) {
      console.error("Error updating about us:", error);
    }
  };

  const updateHomepage = async (homepageData) => {
    try {
      await setDoc(doc(db, "homepage", "content"), {
        ...homepageData,
        updatedAt: new Date()
      });
      fetchData();
    } catch (error) {
      console.error("Error updating homepage:", error);
    }
  };

  const addService = async (serviceData) => {
    try {
      await addDoc(collection(db, "services"), {
        ...serviceData,
        timestamp: new Date()
      });
      fetchData();
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  const deleteService = async (serviceId) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteDoc(doc(db, "services", serviceId));
        fetchData();
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  const addProject = async (projectData) => {
    try {
      await addDoc(collection(db, "projects"), {
        ...projectData,
        timestamp: new Date()
      });
      fetchData();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const deleteProject = async (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteDoc(doc(db, "projects", projectId));
        fetchData();
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: "dashboard", name: "Dashboard" },
              { id: "callbacks", name: "Callback Requests" },
              { id: "testimonials", name: "Testimonials" },
              { id: "services", name: "Services" },
              { id: "projects", name: "Projects" },
              { id: "about", name: "About Us" },
              { id: "homepage", name: "Homepage" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "dashboard" && (
          <Dashboard 
            callbackRequests={callbackRequests}
            testimonials={testimonials}
            projects={projects}
          />
        )}
        {activeTab === "callbacks" && (
          <CallbackRequests 
            requests={callbackRequests}
            onUpdateStatus={updateRequestStatus}
          />
        )}
        {activeTab === "testimonials" && (
          <Testimonials 
            testimonials={testimonials}
            onDelete={deleteTestimonial}
            onAdd={addTestimonial}
          />
        )}
        {activeTab === "services" && (
          <Services 
            services={services}
            onAdd={addService}
            onDelete={deleteService}
          />
        )}
        {activeTab === "projects" && (
          <Projects 
            projects={projects}
            onAdd={addProject}
            onDelete={deleteProject}
          />
        )}
        {activeTab === "about" && (
          <AboutUs 
            aboutUs={aboutUs}
            onUpdate={updateAboutUs}
          />
        )}
        {activeTab === "homepage" && (
          <Homepage 
            homepage={homepage}
            onUpdate={updateHomepage}
          />
        )}
      </div>
    </div>
  );
}

// Dashboard Component
function Dashboard({ callbackRequests, testimonials, projects }) {
  const pendingRequests = callbackRequests.filter(req => req.status === "pending");
  const recentRequests = callbackRequests.slice(0, 5);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Total Callbacks</h3>
          <p className="text-3xl font-bold text-blue-600">{callbackRequests.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Pending Requests</h3>
          <p className="text-3xl font-bold text-yellow-600">{pendingRequests.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Testimonials</h3>
          <p className="text-3xl font-bold text-green-600">{testimonials.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Projects</h3>
          <p className="text-3xl font-bold text-purple-600">{projects.length}</p>
        </div>
      </div>

      {/* Recent Requests */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Callback Requests</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentRequests.map((request) => (
                <tr key={request.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.timestamp?.toDate?.()?.toLocaleDateString() || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      request.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                      request.status === "contacted" ? "bg-blue-100 text-blue-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Callback Requests Component
function CallbackRequests({ requests, onUpdateStatus }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Callback Requests</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{request.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.timestamp?.toDate?.()?.toLocaleDateString() || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      request.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                      request.status === "contacted" ? "bg-blue-100 text-blue-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <select
                      value={request.status}
                      onChange={(e) => onUpdateStatus(request.id, e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Testimonials Component
function Testimonials({ testimonials, onDelete, onAdd }) {
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    location: "",
    message: "",
    rating: 5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTestimonial);
    setNewTestimonial({ name: "", location: "", message: "", rating: 5 });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
      
      {/* Add New Testimonial */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Testimonial</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newTestimonial.name}
            onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={newTestimonial.location}
            onChange={(e) => setNewTestimonial({...newTestimonial, location: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <textarea
            placeholder="Message"
            value={newTestimonial.message}
            onChange={(e) => setNewTestimonial({...newTestimonial, message: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2 md:col-span-2"
            rows="3"
            required
          />
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Rating:</label>
            <select
              value={newTestimonial.rating}
              onChange={(e) => setNewTestimonial({...newTestimonial, rating: parseInt(e.target.value)})}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {[1,2,3,4,5].map(rating => (
                <option key={rating} value={rating}>{rating} Star{rating !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Testimonial
          </button>
        </form>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
              <button
                onClick={() => onDelete(testimonial.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
            <p className="text-gray-700 mb-4">{testimonial.message}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < (testimonial.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Services Component
function Services({ services, onAdd, onDelete }) {
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    icon: "",
    imageUrl: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newService);
    setNewService({ title: "", description: "", icon: "", imageUrl: "" });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Services Management</h2>
      
      {/* Add New Service */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Service</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Service Title"
            value={newService.title}
            onChange={(e) => setNewService({...newService, title: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Icon (e.g., 🏗️)"
            value={newService.icon}
            onChange={(e) => setNewService({...newService, icon: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newService.imageUrl}
            onChange={(e) => setNewService({...newService, imageUrl: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <textarea
            placeholder="Service Description"
            value={newService.description}
            onChange={(e) => setNewService({...newService, description: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2 md:col-span-2"
            rows="3"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Service
          </button>
        </form>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{service.icon}</span>
                <h3 className="font-semibold text-gray-800">{service.title}</h3>
              </div>
              <button
                onClick={() => onDelete(service.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
            <p className="text-gray-700 mb-4">{service.description}</p>
            {service.imageUrl && (
              <img src={service.imageUrl} alt={service.title} className="w-full h-32 object-cover rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Projects Component
function Projects({ projects, onAdd, onDelete }) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "",
    imageUrl: "",
    client: "",
    location: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newProject);
    setNewProject({ title: "", description: "", category: "", imageUrl: "", client: "", location: "" });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Projects Management</h2>
      
      {/* Add New Project */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Project</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Project Title"
            value={newProject.title}
            onChange={(e) => setNewProject({...newProject, title: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={newProject.category}
            onChange={(e) => setNewProject({...newProject, category: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Client"
            value={newProject.client}
            onChange={(e) => setNewProject({...newProject, client: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Location"
            value={newProject.location}
            onChange={(e) => setNewProject({...newProject, location: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProject.imageUrl}
            onChange={(e) => setNewProject({...newProject, imageUrl: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2 md:col-span-2"
          />
          <textarea
            placeholder="Project Description"
            value={newProject.description}
            onChange={(e) => setNewProject({...newProject, description: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2 md:col-span-2"
            rows="3"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Project
          </button>
        </form>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
              <button
                onClick={() => onDelete(project.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover rounded mb-2" />
            )}
            <div className="text-sm text-gray-600">
              <p><strong>Client:</strong> {project.client}</p>
              <p><strong>Location:</strong> {project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// About Us Component
function AboutUs({ aboutUs, onUpdate }) {
  const [aboutData, setAboutData] = useState({
    title: "",
    subtitle: "",
    description: "",
    mission: "",
    vision: "",
    values: "",
    teamImage: "",
    companyImage: ""
  });

  useEffect(() => {
    if (aboutUs) {
      setAboutData(aboutUs);
    }
  }, [aboutUs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(aboutData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">About Us Management</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Edit About Us Content</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Page Title"
              value={aboutData.title || ""}
              onChange={(e) => setAboutData({...aboutData, title: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Subtitle"
              value={aboutData.subtitle || ""}
              onChange={(e) => setAboutData({...aboutData, subtitle: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <textarea
            placeholder="Main Description"
            value={aboutData.description || ""}
            onChange={(e) => setAboutData({...aboutData, description: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            rows="4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea
              placeholder="Mission Statement"
              value={aboutData.mission || ""}
              onChange={(e) => setAboutData({...aboutData, mission: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2"
              rows="3"
            />
            <textarea
              placeholder="Vision Statement"
              value={aboutData.vision || ""}
              onChange={(e) => setAboutData({...aboutData, vision: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2"
              rows="3"
            />
          </div>
          <textarea
            placeholder="Company Values"
            value={aboutData.values || ""}
            onChange={(e) => setAboutData({...aboutData, values: e.target.value})}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            rows="3"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Team Image URL"
              value={aboutData.teamImage || ""}
              onChange={(e) => setAboutData({...aboutData, teamImage: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Company Image URL"
              value={aboutData.companyImage || ""}
              onChange={(e) => setAboutData({...aboutData, companyImage: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update About Us
          </button>
        </form>
      </div>
    </div>
  );
}

// Homepage Component
function Homepage({ homepage, onUpdate }) {
  const [homeData, setHomeData] = useState({
    heroTitle: "",
    heroSubtitle: "",
    heroDescription: "",
    heroImage: "",
    aboutTitle: "",
    aboutDescription: "",
    aboutImage: "",
    servicesTitle: "",
    servicesSubtitle: "",
    projectsTitle: "",
    projectsSubtitle: "",
    contactTitle: "",
    contactDescription: "",
    contactImage: ""
  });

  useEffect(() => {
    if (homepage) {
      setHomeData(homepage);
    }
  }, [homepage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(homeData);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Homepage Management</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Edit Homepage Content</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Hero Section */}
          <div className="border-b pb-4">
            <h4 className="text-lg font-medium text-gray-800 mb-3">Hero Section</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Hero Title"
                value={homeData.heroTitle || ""}
                onChange={(e) => setHomeData({...homeData, heroTitle: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Hero Subtitle"
                value={homeData.heroSubtitle || ""}
                onChange={(e) => setHomeData({...homeData, heroSubtitle: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <textarea
              placeholder="Hero Description"
              value={homeData.heroDescription || ""}
              onChange={(e) => setHomeData({...homeData, heroDescription: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2 w-full mt-2"
              rows="3"
            />
            <input
              type="text"
              placeholder="Hero Image URL"
              value={homeData.heroImage || ""}
              onChange={(e) => setHomeData({...homeData, heroImage: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2 w-full mt-2"
            />
          </div>

          {/* About Section */}
          <div className="border-b pb-4">
            <h4 className="text-lg font-medium text-gray-800 mb-3">About Section</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="About Title"
                value={homeData.aboutTitle || ""}
                onChange={(e) => setHomeData({...homeData, aboutTitle: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="About Image URL"
                value={homeData.aboutImage || ""}
                onChange={(e) => setHomeData({...homeData, aboutImage: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <textarea
              placeholder="About Description"
              value={homeData.aboutDescription || ""}
              onChange={(e) => setHomeData({...homeData, aboutDescription: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2 w-full mt-2"
              rows="3"
            />
          </div>

          {/* Services Section */}
          <div className="border-b pb-4">
            <h4 className="text-lg font-medium text-gray-800 mb-3">Services Section</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Services Title"
                value={homeData.servicesTitle || ""}
                onChange={(e) => setHomeData({...homeData, servicesTitle: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Services Subtitle"
                value={homeData.servicesSubtitle || ""}
                onChange={(e) => setHomeData({...homeData, servicesSubtitle: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Projects Section */}
          <div className="border-b pb-4">
            <h4 className="text-lg font-medium text-gray-800 mb-3">Projects Section</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Projects Title"
                value={homeData.projectsTitle || ""}
                onChange={(e) => setHomeData({...homeData, projectsTitle: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Projects Subtitle"
                value={homeData.projectsSubtitle || ""}
                onChange={(e) => setHomeData({...homeData, projectsSubtitle: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-3">Contact Section</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Contact Title"
                value={homeData.contactTitle || ""}
                onChange={(e) => setHomeData({...homeData, contactTitle: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Contact Image URL"
                value={homeData.contactImage || ""}
                onChange={(e) => setHomeData({...homeData, contactImage: e.target.value})}
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <textarea
              placeholder="Contact Description"
              value={homeData.contactDescription || ""}
              onChange={(e) => setHomeData({...homeData, contactDescription: e.target.value})}
              className="border border-gray-300 rounded px-3 py-2 w-full mt-2"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Homepage
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPanel; 