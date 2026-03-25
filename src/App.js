import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [page, setPage] = useState("home");

  // Scroll → go to about
  useEffect(() => {
    const handleScroll = () => {
      if (page === "home") setPage("about");
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [page]);

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden font-sans">

      {/* ===== HOME ===== */}
      {page === "home" && (
        <div className="h-screen w-full relative flex items-center justify-center bg-white">
          
         {/* 1. ANIMATED BACKGROUND DOODLE LAYER */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  
  {/* TOP LEFT: DRAWING PATHS */}
  <motion.svg 
    className="absolute -top-10 -left-10 w-[400px] h-[400px] opacity-40" 
    viewBox="0 0 300 300"
  >
    <motion.path 
      d="M0 250 Q 120 40 260 200" 
      stroke="#1e3a8a" strokeWidth="2" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path 
      d="M20 240 Q 140 60 280 220" 
      stroke="#3b82f6" strokeWidth="1.5" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
    />
  </motion.svg>

  {/* TOP RIGHT: GROWING CIRCLES */}
  <motion.svg 
    className="absolute -top-10 -right-10 w-[500px] h-[500px] opacity-40" 
    viewBox="0 0 300 300"
  >
    {[50, 75, 100, 125].map((r, i) => (
      <motion.circle 
        key={i} cx="250" cy="50" r={r} 
        stroke={i % 2 === 0 ? "#1e40af" : "#0ea5e9"} strokeWidth="1.5" fill="none" 
        strokeDasharray="5 5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: i * 0.2 }}
      />
    ))}
  </motion.svg>

  {/* BOTTOM LEFT: SPIRAL REVEAL */}
  <motion.svg 
    className="absolute -bottom-20 -left-10 w-[500px] h-[500px] opacity-40" 
    viewBox="0 0 300 300"
  >
    <motion.path 
      d="M80 250 a 40 40 0 1 1 80 0 a 30 30 0 1 0 -60 0 a 20 20 0 1 1 40 0" 
      stroke="#38bdf8" strokeWidth="1.5" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, ease: "linear" }}
    />
  </motion.svg>

  {/* BOTTOM RIGHT: FLOATING ELEMENTS */}
  <motion.svg 
    className="absolute -bottom-10 -right-10 w-[400px] h-[400px] opacity-40" 
    viewBox="0 0 300 300"
  >
    <motion.path 
      d="M50 250 Q 150 100 280 250" 
      stroke="#1d4ed8" strokeWidth="2" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 1 }}
    />
    <motion.circle 
      cx="220" cy="220" r="40" stroke="#fbbf24" strokeWidth="1.5" fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
    />
  </motion.svg>
</div>
          {/* 2. PROFILE IMAGE */}
          <div className="relative z-10 w-full h-[100vh] flex items-center justify-center">
            <motion.img
              src="/surya-photo.webp"
              alt="profile"
              className="max-h-full max-w-full object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* 3. NAME & NAVIGATION */}
          <div
            onClick={() => setPage("about")}
            className="absolute bottom-20 z-20 w-full text-left cursor-pointer"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl font-extrabold tracking-tighter text-black"
            >
             SURYA<span className="text-cyan-500"> PRAKASH</span> R
            </motion.h1>
            <p className="text-gray-400 font-medium tracking-widest uppercase text-xs mt-2 italic">Scroll to Explore</p>
          </div>
        </div>
      )}

      {/* Rest of your pages (About, Skills, etc.) remain unchanged */}
      {/* ===== ABOUT ===== */}
      {/* ===== ABOUT & INTERACTIVE TECH STACK ===== */}
{page === "about" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-screen w-full relative flex flex-col items-center justify-center bg-white overflow-hidden px-6"
  >
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute bottom-10 flex flex-col items-center gap-4"
    >
      <div className="flex gap-8 text-gray-500 font-medium">
        <span>📧 r.suryaprakash916@gmail.com</span>
        <span>📞 +91 9894676775</span>
      </div>
      </motion.footer>
    {/* 1. TEXT CONTENT (Stays centered) */}
    <div className="z-10 text-center pointer-events-none">
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-black mb-4 tracking-tight"
      >
        AI/ML <span className="text-cyan-600">ENGINEER</span>
      </motion.h2>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed"
      >
        Building Intelligent Systems with Machine Learning, Computer Vision & LLMs.
      </motion.p>
    </div>

    {/* 2. FLOATING INTERACTIVE TECH ICONS */}
    {[
      { name: "Python", color: "#3776AB", top: "15%", left: "20%" },
      { name: "PyTorch", color: "#EE4C2C", top: "25%", left: "70%" },
      { name: "TensorFlow", color: "#FF6F00", top: "60%", left: "15%" },
      { name: "OpenCV", color: "#5C3EE8", top: "75%", left: "80%" },
      { name: "LLMs", color: "#00A67E", top: "10%", left: "55%" },
      { name: "React", color: "#61DAFB", top: "80%", left: "30%" },
    ].map((skill, i) => (
      <motion.div
        key={i}
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileDrag={{ scale: 1.2, zIndex: 50 }}
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4 + i, // Different speeds for organic feel
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ 
          top: skill.top, 
          left: skill.left,
          backgroundColor: skill.color + "15", // 15% opacity background
          borderColor: skill.color,
          color: skill.color 
        }}
        className="absolute cursor-grab active:cursor-grabbing px-4 py-2 border-2 rounded-2xl font-bold text-sm shadow-sm flex items-center gap-2 backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }}></span>
        {skill.name}
      </motion.div>
    ))}

    {/* 3. NAVIGATION BUTTONS */}
    <div className="mt-12 flex flex-col items-center gap-6 z-20">
      {/* Primary Actions */}
      <div className="flex gap-4">
        <button onClick={() => setPage("skills")} className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-cyan-600 transition-all duration-300">
          Teckstack
        </button>
        <button onClick={() => setPage("projects")} className="px-6 py-3 border-2 border-black rounded-full font-bold hover:bg-gray-100 transition-all">
          projects
        </button>
      </div>

      {/* Social & Resume Row */}
      <div className="flex gap-3">
        <motion.a 
          href="https://github.com/Surya-Prakash25" 
          target="_blank"
          whileHover={{ y: -3 }}
          className="px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-bold flex items-center gap-2 shadow-md"
        >
          GitHub
        </motion.a>
        <motion.a 
          href="https://linkedin.com/in/surya-prakash-ramesh" 
          target="_blank"
          whileHover={{ y: -3 }}
          className="px-5 py-2 bg-[#0077b5] text-white rounded-full text-sm font-bold flex items-center gap-2 shadow-md"
        >
          LinkedIn
        </motion.a>
        <a 
          href="/Surya_Prakash_R_AIML.pdf" 
          className="px-5 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white transition"
        >
          Resume 
        </a>
      </div>
    </div>
  </motion.div>
  
)}

     {/* ===== PROJECTS & DYNAMIC NEURAL NETWORK ===== */}
{page === "projects" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-screen w-full relative flex flex-col items-center justify-center bg-white overflow-hidden"
  >
    {/* 1. DYNAMIC NEURAL NETWORK CANVAS (Background) */}
    <div className="absolute inset-0 z-0 opacity-20">
      <NeuralNetworkCanvas />
    </div>

    {/* 2. PROJECTS CONTENT (Foreground, z-10) */}
    <div className="z-10 text-center px-6">
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-black mb-8 tracking-tighter"
      >
        FEATURED <span className="text-cyan-600">PROJECTS</span>
      </motion.h2>
      
      {/* 3. INTERACTIVE PROJECT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { title: "AI Camera Validation", desc: "CNN + YOLO based real-time ballot detection system."},
          { title: "Enterprise Chatbot (RAG)", desc: "LLM chatbot with embeddings and vector search." },
          { title: "ERP Workflow Automation", desc: "Automated ERP processes using Frappe." },
          { title: "AI Image Generation", desc: "Generative model to create image from text." }
        ].map((p, i) => (
          <motion.div 
      key={i}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // This transition controls the initial entrance
      transition={{ delay: 0.1 + (i * 0.05) }} 
      
      // HIGH-RESPONSE HOVER SETTINGS
      whileHover={{ 
        y: -15, 
        scale: 1.03,
        transition: { 
          type: "spring", 
          stiffness: 400, // Higher = Faster start
          damping: 10,    // Lower = Snappier "bounce" at the top
          mass: 0.8       // Lower = Lighter feel
        }
      }}
      whileTap={{ scale: 0.98 }} // Quick feedback when clicked
      
      className="p-6 bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl shadow-lg cursor-pointer transition-shadow hover:shadow-2xl z-20"
    >
      <h3 className="text-xl font-bold mb-2 text-black">{p.title}</h3>
      <p className="text-gray-500 font-medium text-sm">{p.desc}</p>
      
      <motion.span 
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        className="text-xs font-bold text-cyan-600 mt-4 block uppercase tracking-wider"
      >
        Explore Build →
      </motion.span>
    </motion.div>
        ))}
      </div>

      {/* 4. BACK NAVIGATION */}
      <footer className="mt-12 z-20">
        <button 
          onClick={() => setPage("about")} 
          className="px-6 py-3 bg-gray-100 rounded-full font-bold flex items-center gap-2 hover:bg-black hover:text-white transition"
        >
          ← Back to About
        </button>
      </footer>
    </div>
  </motion.div>
)}

{/* ===== SKILLS: NEURAL SKILL-CHAIN ===== */}
{page === "skills" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-screen w-full relative bg-white flex flex-col items-center justify-center overflow-hidden"
  >
    {/* 1. SECTION HEADER */}
    <div className="absolute top-20 text-center z-10">
      <h2 className="text-5xl font-black tracking-tighter">TECHNICAL <span className="text-cyan-600">STACk</span></h2>
      {/* <p className="text-gray-400 font-mono text-sm mt-2 underline decoration-cyan-500 underline-offset-4">Interactive Knowledge Graph</p> */}
    </div>

    {/* 2. THE SKILL NODES */}
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      {[
        { name: "Python", x: -200, y: -50, color: "#3776AB", connections: [1, 2, 4] },
        { name: "PyTorch", x: 0, y: -120, color: "#EE4C2C", connections: [0, 2, 3] },
        { name: "LLMs", x: 200, y: -50, color: "#00A67E", connections: [0, 1] },
        { name: "Computer Vision", x: -100, y: 100, color: "#5C3EE8", connections: [0, 1] },
        { name: "NLP", x: 100, y: 100, color: "#FF6F00", connections: [0, 2] },
      ].map((skill, i, allSkills) => (
        <React.Fragment key={i}>
          {/* Draw Lines to Connected Skills */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {skill.connections.map(connIndex => (
              <motion.line
                key={`${i}-${connIndex}`}
                x1={`calc(50% + ${skill.x}px)`}
                y1={`calc(50% + ${skill.y}px)`}
                x2={`calc(50% + ${allSkills[connIndex].x}px)`}
                y2={`calc(50% + ${allSkills[connIndex].y}px)`}
                stroke={skill.color}
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            ))}
          </svg>

          {/* Interactive Node */}
          <motion.div
            style={{ x: skill.x, y: skill.y }}
            whileHover={{ scale: 1.2, zIndex: 50 }}
            className="absolute p-5 rounded-2xl bg-white border-2 cursor-pointer shadow-xl group transition-all"
          >
            <span className="text-lg font-bold" style={{ color: skill.color }}>{skill.name}</span>
            {/* Pulsing Core */}
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
              style={{ backgroundColor: skill.color }}
            />
          </motion.div>
        </React.Fragment>
      ))}
    </div>

    {/* 3. FOOTER / CONTACT QUICK-LINK */}
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute bottom-10 flex flex-col items-center gap-4"
    >
      <div className="flex gap-8 text-gray-500 font-medium">
        <span>📧 r.suryaprakash916@gmail.com</span>
        <span>📞 +91 9894676775</span>
      </div>
      <button 
        onClick={() => setPage("about")} 
        className="px-8 py-2 border-b-2 border-black font-bold uppercase tracking-widest hover:text-cyan-600 hover:border-cyan-600 transition"
      >
        ← Back to About
      </button>
    </motion.footer>
  </motion.div>
)}
      {/* ===== CONTACT ===== */}
      {page === "contact" && (
        <div className="h-screen flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl mb-6">Contact</h2>
          <p>Email: r.suryaprakash916@gmail.com</p>
          <p>Phone: +91 9894676775</p>

          <footer className="absolute bottom-6">
            <button onClick={() => setPage("about")} className="underline">← Back</button>
          </footer>
        </div>
      )}
   
   
    </div>
  );
}

// A dynamic canvas component for the background effect
function NeuralNetworkCanvas() {
  const canvasRef = React.useRef(null);
  const mousePos = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set proper dimensions
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Node configuration
    const numNodes = 60; // How many "neurons" to draw
    const nodes = [];
    const colors = ['#0ea5e9', '#1e3a8a', '#94a3b8']; // The theme colors

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5, // Velocity x
        vy: (Math.random() - 0.5) * 1.5, // Velocity y
        radius: Math.random() * 2 + 1, // Node size
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Animation function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add a virtual "node" for the mouse position
      nodes[0].x = mousePos.current.x;
      nodes[0].y = mousePos.current.y;
      nodes[0].vx = 0; nodes[0].vy = 0; nodes[0].radius = 4; nodes[0].color = "#fbbf24"; // Gold for cursor node

      nodes.forEach((node, i) => {
        // Move the node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw the node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Draw the connections (synapses)
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only connect nodes that are close
          if (dist < 150) { 
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            
            // Fade the line based on distance
            ctx.strokeStyle = `rgba(14, 165, 233, ${1 - dist / 150})`; 
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };
    draw();

    // Mouse tracker
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}