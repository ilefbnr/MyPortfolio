import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-lg text-primary-foreground/80 tracking-wide">{t('hero.greeting')}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
              Ilef Bennour
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
              {t('hero.role')}
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              {t('hero.specialties')}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all hover:scale-105"
            >
              {t('hero.cta')}
            </Button>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105"
            >
              {t('hero.contact')}
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/ilefbnr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/ilef-bennour-92b97a1b1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:ilef.bennour@ensi-uma.tn"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
