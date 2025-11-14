import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t('experience.talan.role'),
      company: t('experience.talan.company'),
      location: t('experience.talan.location'),
      period: 'Jul 2025 - Aug 2025',
      descriptions: [
        t('experience.talan.desc1'),
        t('experience.talan.desc2'),
        t('experience.talan.desc3'),
      ],
    },
    {
      role: t('experience.riadi.role'),
      company: t('experience.riadi.company'),
      location: t('experience.riadi.location'),
      period: 'Jul 2024 - Aug 2024',
      descriptions: [
        t('experience.riadi.desc1'),
        t('experience.riadi.desc2'),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              {t('experience.title')}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                  <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.descriptions.map((desc, descIndex) => (
                        <li key={descIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
