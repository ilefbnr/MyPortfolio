import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, MessageSquare, Rocket, Code, Wrench } from "lucide-react";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Brain,
      title: t('skills.deeplearning'),
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'Transformers', 'YOLO', 'CNN architectures'],
    },
    {
      icon: Eye,
      title: t('skills.computervision'),
      skills: ['OpenCV', 'TensorFlow Lite', 'Image Processing', 'Object Detection'],
    },
    {
      icon: MessageSquare,
      title: t('skills.nlp'),
      skills: ['BERT', 'GPT', 'Whisper', 'spaCy', 'RAG', 'Text generation'],
    },
    {
      icon: Rocket,
      title: t('skills.deployment'),
      skills: ['Multi-agent systems', 'Edge AI', 'TensorFlow Lite', 'Model quantization'],
    },
    {
      icon: Code,
      title: t('skills.programming'),
      skills: ['Python', 'JavaScript', 'Dart', 'C/C++', 'Bash'],
    },
    {
      icon: Wrench,
      title: t('skills.frameworks'),
      skills: ['Streamlit', 'Flutter', 'React', 'Git', 'Docker', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            {t('skills.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
