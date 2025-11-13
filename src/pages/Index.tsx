import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  ArrowDown,
  Sparkles
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
            opacity: 0.15
          }}
        />
        <div className="absolute inset-0 gradient-primary opacity-95" />
        
        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="animate-slide-down">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <Sparkles className="h-4 w-4 animate-glow" />
                <span className="text-sm font-medium">Available for Opportunities</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in tracking-tight">
              Ilef Bennour
            </h1>
            <p className="text-2xl md:text-4xl mb-4 font-light animate-fade-in" style={{ animationDelay: "0.1s" }}>
              AI Engineering Student
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent mx-auto mb-6 rounded-full animate-scale-in" style={{ animationDelay: "0.2s" }} />
            <p className="text-lg md:text-2xl mb-12 text-white/90 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Computer Vision • Deep Learning • NLP
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a href="mailto:ilef.bennour@ensi-uma.tn">
                <Button size="lg" variant="secondary" className="gap-2 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                  <Mail className="h-5 w-5" />
                  Contact Me
                </Button>
              </a>
              <a href="https://github.com/ilefbnr" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm">
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/ilef-bennour-92b97a1b1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Ben Arous, Tunisia
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +216 23 128 032
              </span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-float"
          aria-label="Scroll to content"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </section>

      {/* Profile Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Profile
              </h2>
              <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/50 border-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Computer science engineering student specialized in{" "}
                  <span className="font-semibold text-primary gradient-text">Computer Vision</span>,{" "}
                  <span className="font-semibold text-primary gradient-text">Deep Learning</span>, and{" "}
                  <span className="font-semibold text-primary gradient-text">NLP</span>. 
                  Skilled in developing intelligent multi-agent systems, real-time image processing, and language models. 
                  Hands-on experience in deploying embedded and value-generating AI solutions.
                </p>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI & Technical Skills
            </h2>
          </ScrollReveal>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Deep Learning & Computer Vision", skills: ["PyTorch", "TensorFlow", "Keras", "YOLO", "OpenCV", "TensorFlow Lite"], delay: 0 },
              { title: "NLP & LLMs", skills: ["Transformers", "BERT", "GPT", "Whisper", "spaCy", "RAG"], delay: 100 },
              { title: "ML & Data Science", skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"], delay: 200 },
              { title: "Generative AI & Agents", skills: ["Multi-agent systems", "DeepFace", "OCR", "Speech Synthesis"], delay: 300 },
              { title: "Programming Languages", skills: ["Python", "JavaScript", "Dart", "C/C++"], delay: 400 },
              { title: "Frameworks & Tools", skills: ["Streamlit", "Flutter", "React", "Git", "Docker", "Jupyter", "Linux"], delay: 500 },
            ].map((category, idx) => (
              <ScrollReveal key={idx} delay={category.delay}>
                <Card className="p-6 h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary/50 hover:border-l-primary">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 group-hover:scale-150 transition-transform" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-muted/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center flex items-center justify-center gap-4">
              <Briefcase className="h-10 w-10 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Experience</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16">Professional journey in artificial intelligence</p>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "AI Engineer – Multi-Agent Systems & NLP",
                company: "Talan Tunisia (Portalyze)",
                period: "Jul. 2025 – Aug. 2025",
                points: [
                  "Developed an AI multi-agent system integrating LLMs and RAG for automating strategic analysis (Porter's 5 Forces)",
                  "Implemented intelligent agents: web scraping, contextual enrichment via Retrieval-Augmented Generation, and strategic recommendations",
                  "Used LLM as evaluator for self-assessment and built an expert chatbot for business strategy consulting"
                ],
                delay: 0
              },
              {
                title: "Computer Vision Engineer – SmartPark",
                company: "Personal Project",
                period: "Jun. 2025 – Present",
                points: [
                  "Designed and deployed an optimized YOLO model for real-time parking occupancy detection on video streams",
                  "Optimized inference on edge devices using TensorFlow Lite and OpenCV video processing pipeline"
                ],
                delay: 200
              },
              {
                title: "Web Developer – Summer Internship",
                company: "RIADI Research Lab, University of Manouba",
                period: "Jul. 2024 – Aug. 2024",
                points: [
                  "Developed a full-stack web application using React with role-based authentication (Admin, Moderator, Participant)",
                  "Implemented a conflict resolution algorithm to aggregate expert evaluations"
                ],
                delay: 400
              }
            ].map((exp, idx) => (
              <ScrollReveal key={idx} delay={exp.delay}>
                <Card className="p-8 group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-l-4 border-l-transparent hover:border-l-primary bg-gradient-to-r from-card to-card/50">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 whitespace-nowrap">
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center flex items-center justify-center gap-4">
              <Code className="h-10 w-10 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16">Innovative solutions powered by artificial intelligence</p>
          </ScrollReveal>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligent Visual Assistance System",
                description: "Mobile app using Computer Vision for visually impaired assistance: object detection (YOLO), real-time OCR, and voice-guided navigation. End-to-end AI architecture integrating computer vision, speech synthesis, and geospatial APIs.",
                tags: ["YOLO", "OCR", "Flutter", "TensorFlow"],
                period: "Jan. 2025 – Apr. 2025",
                delay: 0
              },
              {
                title: "Pitch Lab – AI Communication Coach",
                description: "AI-powered coaching platform with Whisper (transcription), DeepFace (emotion analysis), and NLP (clarity/diction assessment). Multimodal ML pipeline (audio + video) with report generation.",
                tags: ["Whisper", "DeepFace", "NLP", "Transformers"],
                period: "Jan. 2025 – Present",
                delay: 200
              },
              {
                title: "SmartPark – Intelligent Parking",
                description: "Embedded Computer Vision system for real-time parking monitoring with YOLO optimized for edge devices. High-performance video pipeline and TensorFlow Lite deployment.",
                tags: ["YOLO", "OpenCV", "TensorFlow Lite"],
                period: "Jun. 2025 – Present",
                delay: 400
              }
            ].map((project, idx) => (
              <ScrollReveal key={idx} delay={project.delay}>
                <Card className="p-6 h-full flex flex-col group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80 border-2 hover:border-primary/50">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-primary/30 hover:bg-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">{project.period}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-muted/40 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center flex items-center justify-center gap-4">
              <GraduationCap className="h-10 w-10 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16">Academic foundation in computer science</p>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                school: "National School of Computer Science (ENSI)",
                degree: "Engineering Cycle in Computer Science",
                location: "Manouba, Tunisia",
                period: "2023 – Present",
                delay: 0
              },
              {
                school: "Preparatory Institute for Engineering Studies (IPEIT)",
                degree: "Preparatory Cycle – Mathematics and Physics",
                location: "Tunis, Tunisia",
                period: "2020 – 2023",
                delay: 200
              }
            ].map((edu, idx) => (
              <ScrollReveal key={idx} delay={edu.delay}>
                <Card className="p-8 group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-r from-card to-card/50">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {edu.school}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-1">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <Badge variant="outline" className="whitespace-nowrap">
                      {edu.period}
                    </Badge>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center flex items-center justify-center gap-4">
              <Award className="h-10 w-10 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16">Continuous learning and professional development</p>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Fundamentals of Deep Learning",
                issuer: "NVIDIA",
                date: "Feb. 2025",
                status: "Completed",
                delay: 0
              },
              {
                title: "Machine Learning Specialization",
                issuer: "Stanford / Coursera",
                date: "In Progress",
                status: "In Progress",
                delay: 200
              }
            ].map((cert, idx) => (
              <ScrollReveal key={idx} delay={cert.delay}>
                <Card className="p-6 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 border-l-4 border-l-primary/50 hover:border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant={cert.status === "Completed" ? "default" : "secondary"} className="text-xs">
                          {cert.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
              <div className="h-1 w-24 bg-white/50 mx-auto mb-8 rounded-full" />
              <p className="text-lg md:text-xl mb-12 text-white/90 leading-relaxed">
                Interested in collaborating on AI projects or discussing opportunities?<br className="hidden md:block" />
                Feel free to reach out!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:ilef.bennour@ensi-uma.tn">
                  <Button size="lg" variant="secondary" className="gap-2 hover:scale-105 transition-transform shadow-xl hover:shadow-2xl">
                    <Mail className="h-5 w-5" />
                    Email Me
                  </Button>
                </a>
                <a href="https://linkedin.com/in/ilef-bennour-92b97a1b1" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://github.com/ilefbnr" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm">
                    <Github className="h-5 w-5" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t relative">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Ilef Bennour. AI Engineer specializing in Computer Vision, Deep Learning & NLP.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
