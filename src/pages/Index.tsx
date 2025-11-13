import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ExternalLink
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-primary opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Ilef Bennour
            </h1>
            <p className="text-xl md:text-3xl mb-4 font-light">
              AI Engineering Student
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Computer Vision • Deep Learning • NLP
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:ilef.bennour@ensi-uma.tn">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Me
                </Button>
              </a>
              <a href="https://github.com/ilefbnr" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Ben Arous, Tunisia
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +216 23 128 032
              </span>
              <a href="https://linkedin.com/in/ilef-bennour-92b97a1b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Profile</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Computer science engineering student specialized in <span className="font-semibold text-primary">Computer Vision</span>, 
              <span className="font-semibold text-primary"> Deep Learning</span>, and <span className="font-semibold text-primary">NLP</span>. 
              Skilled in developing intelligent multi-agent systems, real-time image processing, and language models. 
              Hands-on experience in deploying embedded and value-generating AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">AI & Technical Skills</h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Deep Learning & Computer Vision</h3>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "TensorFlow", "Keras", "YOLO", "OpenCV", "TensorFlow Lite"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">NLP & LLMs</h3>
              <div className="flex flex-wrap gap-2">
                {["Transformers", "BERT", "GPT", "Whisper", "spaCy", "RAG"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">ML & Data Science</h3>
              <div className="flex flex-wrap gap-2">
                {["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Generative AI & Agents</h3>
              <div className="flex flex-wrap gap-2">
                {["Multi-agent systems", "DeepFace", "OCR", "Speech Synthesis"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "Dart", "C/C++"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Streamlit", "Flutter", "React", "Git", "Docker", "Jupyter", "Linux"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            AI Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">AI Engineer – Multi-Agent Systems & NLP</h3>
                  <p className="text-muted-foreground">Talan Tunisia (Portalyze)</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">Jul. 2025 – Aug. 2025</span>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Developed an AI multi-agent system integrating LLMs and RAG for automating strategic analysis (Porter's 5 Forces)</li>
                <li>Implemented intelligent agents: web scraping, contextual enrichment via Retrieval-Augmented Generation, and strategic recommendations</li>
                <li>Used LLM as evaluator for self-assessment and built an expert chatbot for business strategy consulting</li>
              </ul>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">Computer Vision Engineer – SmartPark</h3>
                  <p className="text-muted-foreground">Personal Project</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">Jun. 2025 – Present</span>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Designed and deployed an optimized YOLO model for real-time parking occupancy detection on video streams</li>
                <li>Optimized inference on edge devices using TensorFlow Lite and OpenCV video processing pipeline</li>
              </ul>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">Web Developer – Summer Internship</h3>
                  <p className="text-muted-foreground">RIADI Research Lab, University of Manouba</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">Jul. 2024 – Aug. 2024</span>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Developed a full-stack web application using React with role-based authentication (Admin, Moderator, Participant)</li>
                <li>Implemented a conflict resolution algorithm to aggregate expert evaluations</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Code className="h-8 w-8 text-primary" />
            AI Projects
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-primary">Intelligent Visual Assistance System</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                Mobile app using Computer Vision for visually impaired assistance: object detection (YOLO), real-time OCR, and voice-guided navigation. 
                End-to-end AI architecture integrating computer vision, speech synthesis, and geospatial APIs.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-xs">YOLO</Badge>
                <Badge variant="outline" className="text-xs">OCR</Badge>
                <Badge variant="outline" className="text-xs">Flutter</Badge>
                <Badge variant="outline" className="text-xs">TensorFlow</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Jan. 2025 – Apr. 2025</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-primary">Pitch Lab – AI Communication Coach</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                AI-powered coaching platform with Whisper (transcription), DeepFace (emotion analysis), and NLP (clarity/diction assessment). 
                Multimodal ML pipeline (audio + video) with report generation and progress visualization.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-xs">Whisper</Badge>
                <Badge variant="outline" className="text-xs">DeepFace</Badge>
                <Badge variant="outline" className="text-xs">NLP</Badge>
                <Badge variant="outline" className="text-xs">Transformers</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Jan. 2025 – Present</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-primary">SmartPark – Intelligent Parking System</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                Embedded Computer Vision system for real-time parking monitoring with YOLO optimized for edge devices. 
                High-performance video pipeline (OpenCV) and TensorFlow Lite deployment on constrained hardware.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-xs">YOLO</Badge>
                <Badge variant="outline" className="text-xs">OpenCV</Badge>
                <Badge variant="outline" className="text-xs">TensorFlow Lite</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Jun. 2025 – Present</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-primary">National School of Computer Science (ENSI)</h3>
                  <p className="text-muted-foreground">Engineering Cycle in Computer Science</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">2023 – Present</span>
              </div>
              <p className="text-sm text-muted-foreground">Manouba, Tunisia</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-primary">Preparatory Institute for Engineering Studies (IPEIT)</h3>
                  <p className="text-muted-foreground">Preparatory Cycle – Mathematics and Physics</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">2020 – 2023</span>
              </div>
              <p className="text-sm text-muted-foreground">Tunis, Tunisia</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            Certifications & Learning
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-primary mb-2">Fundamentals of Deep Learning</h3>
              <p className="text-muted-foreground text-sm mb-1">NVIDIA</p>
              <p className="text-xs text-muted-foreground">Feb. 2025</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-primary mb-2">Machine Learning Specialization</h3>
              <p className="text-muted-foreground text-sm mb-1">Stanford / Coursera</p>
              <p className="text-xs text-muted-foreground">In Progress</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg mb-8 text-white/90">
              Interested in collaborating on AI projects or discussing opportunities? Feel free to reach out!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:ilef.bennour@ensi-uma.tn">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Email Me
                </Button>
              </a>
              <a href="https://linkedin.com/in/ilef-bennour-92b97a1b1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/ilefbnr" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 Ilef Bennour. AI Engineer specializing in Computer Vision, Deep Learning & NLP.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
