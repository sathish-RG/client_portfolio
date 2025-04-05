import React from "react";
import { saveAs } from "file-saver";
import Sathish_resume from "/Sathish_resume.pdf";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";


const MainPage = () => {
  const handleDownload = () => {
    saveAs(Sathish_resume, "sathish_resume.pdf");
    toast.success("Resume Downloaded Successfully!")
  };
  const skills = [
    { name: "React", icon: <FaReact className="w-full h-full" />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs className="w-full h-full" />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb className="w-full h-full" />, level: 80 },
    { name: "Express", icon: <SiExpress className="w-full h-full" />, level: 85 },
    { name: "JavaScript", icon: <DiJavascript1 className="w-full h-full" />, level: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-full h-full" />, level: 95 },
    { name: "Redux", icon: <SiRedux className="w-full h-full" />, level: 75 },
    { name: "HTML5/CSS3", icon: <div className="text-4xl font-bold">HTML5</div>, level: 95 },
  ];

  const projects = [
    
    {
      title: "Chat App",
      description: "Chating aplication with real-time updates using Socket.io and React with admin controles. ",
      tags: ["React", "Express", "Socket.io", "Tailwind","MongoDB","Nodejs"],
      githubLink: "https://github.com/sathish-RG/react-node-chat-app-main",
      liveLink: "https://spectacular-horse-0f5464.netlify.app/auth",
      image: "/ChatApp.png"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart, checkout, and admin dashboard built with MERN stack.",
      tags: ["React",  "Redux", "Tailwind CSS"],
      githubLink: "https://github.com/sathish-RG/Ecommerce",
      liveLink: "https://jade-choux-ab2228.netlify.app/",
      image: "/ecommerce.png"
    },
    {
      title: "Expense Traker",
      description: "Expense traker it is used to track expense and income created using javascript",
      tags: ["HTML5", "CSS", "JavaScript"],
      githubLink: "https://github.com/sathish-RG/TASK-4-JS-TO-DO-LIST",
      liveLink: "https://expance-tracker-mine.netlify.app/",
      image: "/expenceTraker.png"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio site showcasing projects and skills with responsive design.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/sathish-RG/client_portfolio",
      liveLink: "https://sathishrg.netlify.app/",
      image: "/portfolio.png"
    },
    {
      title: "Landing Page",
      description: "Mobile-first approach and optimized for all devices, showcasing clean UI/UX principles with vibrant travel imagery.",
      tags: ["HTML5", "CSS", "Flexbox","Grid"],
      githubLink: "https://github.com/sathish-RG/TASK-1-CSS-LANDING-PAGE/tree/main",
      liveLink: "https://reliable-profiterole-90d799.netlify.app/",
      image: "/landingPage.png"
    }
  ];
  
  return (
    <div>
      {/* Home page content goes here */}
      <section id="home" className="min-h-[520px] bg-blue-100 flex items-center justify-center py-16">
  <div className="text-center max-w-2xl mx-4">
    {/* Main Heading */}
    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
      I'm Sathish
    </h1>
    
    {/* Subheading */}
    <h2 className="text-2xl md:text-3xl text-blue-600 mb-8">
      Full-Stack MERN Developer
    </h2>
    
    {/* Action Buttons */}
    <div className="flex justify-center gap-4 mb-12">
      <button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center transition-all duration-300 hover:shadow-lg"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download Resume
      </button>
      
      <Link 
        smooth 
        to="#contact" 
        className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-lg inline-flex items-center transition-all duration-300 hover:shadow-lg"
      >
        Contact Me
      </Link>
    </div>
    
    {/* Social Links */}
    <div className="flex justify-center gap-4">
      <a 
        href="https://github.com/sathish-RG" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="bg-gray-200 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="text-gray-700 group-hover:text-white w-6 h-6"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>

      <a 
        href="https://www.linkedin.com/in/sathish-rg/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="bg-gray-200 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="text-gray-700 group-hover:text-white w-6 h-6"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
        </svg>
      </a>

      <a 
        href="#contact" 
        aria-label="Email"
        className="bg-gray-200 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="text-gray-700 group-hover:text-white w-6 h-6"
        >
          <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z" />
        </svg>
      </a>
    </div>
  </div>
</section>


      {/*About page content gose here */}
      <section id="about" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      About <span className="text-blue-600">Me</span>
    </h2>
    
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/3 flex justify-center">
        <div className="h-64 w-64 rounded-full bg-blue-100 overflow-hidden border-4 border-blue-200">
          {/* Replace with your image */}
          <img 
            src="/sathish.jpg" 
            alt="Sathish - MERN Stack Developer"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
      <div className="md:w-2/3">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          MERN Stack Developer with Passion for Building Web Solutions
        </h3>
        
        <p className="text-gray-600 mb-4">
          I'm Sathish, a dedicated Full Stack JavaScript developer specializing in the MERN stack 
          (MongoDB, Express.js, React, and Node.js). With a strong foundation in both frontend and 
          backend technologies, I create seamless, responsive, and scalable web applications.
        </p>
        
        <p className="text-gray-600 mb-6">
          My journey in web development began with a curiosity about how websites work, which evolved 
          into a passion for building digital experiences. I thrive on turning complex problems into 
          elegant solutions and enjoy every aspect of the development process from database design to 
          pixel-perfect UIs.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span>
            <span className="text-gray-700">MERN Stack</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span>
            <span className="text-gray-700">RESTful APIs</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span>
            <span className="text-gray-700">State Management</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span>
            <span className="text-gray-700">Authentication</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span>
            <span className="text-gray-700">Database Design</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span>
            <span className="text-gray-700">Responsive Design</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            React.js
          </div>
          <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Node.js
          </div>
          <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Express.js
          </div>
          <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            MongoDB
          </div>
          <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            JavaScript (ES6+)
          </div>
          <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/*Skills page content gose here */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are the technologies I work with to build amazing web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4 text-blue-600">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-blue-600"
                  ></motion.div>
                </div>
                <span className="mt-2 text-sm text-gray-600">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/*Projects page content gose here */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent works that demonstrate my skills and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/*Contacts page content gose here */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <FaMapMarkerAlt className="text-blue-600 text-xl mr-4" />
                <p className="text-gray-700">Chennai, India</p>
              </div>
              <div className="flex items-center mb-6">
                <FaEnvelope className="text-blue-600 text-xl mr-4" />
                <p className="text-gray-700">rsathishece@hotmail.com</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 text-xl mr-4" />
                <p className="text-gray-700">+91 9345835698</p>
              </div>
            </div>

            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
