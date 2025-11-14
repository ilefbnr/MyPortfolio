import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.ensi.degree'),
      school: t('education.ensi.school'),
      location: t('education.ensi.location'),
      period: '2023 - Present',
    },
    {
      degree: t('education.ipeit.degree'),
      school: t('education.ipeit.school'),
      location: t('education.ipeit.location'),
      period: '2020 - 2023',
    },
  ];

  return (
    <section id="education" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              {t('education.title')}
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-3">{edu.school}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 bg-card rounded-xl p-6 shadow-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <div>
                  <span className="font-medium text-foreground">Fundamentals of Deep Learning</span>
                  <span className="text-sm"> — NVIDIA (Feb 2025)</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <div>
                  <span className="font-medium text-foreground">Machine Learning Specialization</span>
                  <span className="text-sm"> — Stanford University & DeepLearning.AI (In progress)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
