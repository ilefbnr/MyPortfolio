import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Car, Eye } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      icon: Mic,
      title: t('projects.pitchlab.title'),
      description: t('projects.pitchlab.desc'),
      tags: ['Python', 'Whisper', 'DeepFace', 'Transformers', 'NLP'],
      period: 'Aug 2025 - Oct 2025',
    },
    {
      icon: Car,
      title: t('projects.smartpark.title'),
      description: t('projects.smartpark.desc'),
      tags: ['YOLO', 'OpenCV', 'TensorFlow Lite', 'Edge AI'],
      period: 'Jun 2025 - Sep 2025',
    },
    {
      icon: Eye,
      title: t('projects.visual.title'),
      description: t('projects.visual.desc'),
      tags: ['YOLO', 'OCR', 'Flutter', 'Computer Vision', 'TensorFlow'],
      period: 'Jan 2025 - Apr 2025',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            {t('projects.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary"
                >
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {project.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
