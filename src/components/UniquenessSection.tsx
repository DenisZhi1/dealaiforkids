import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🧠",
    title: "Умное использование ИИ",
    description: "Дети научатся пользоваться ИИ с умом, а не для списывания"
  },
  {
    icon: "📈", 
    title: "Уверенность в учёбе",
    description: "Станут увереннее в учёбе и смогут улучшить свои результаты"
  },
  {
    icon: "🚀",
    title: "Навыки будущего",
    description: "Освоят навыки будущего: работа с текстами, картинками, презентациями, сайтами"
  }
];

export const UniquenessSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Уникальность курса
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Что делает наш курс особенным и почему дети полюбят изучение ИИ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth hover:shadow-card group text-center">
              <CardContent className="p-8">
                <div className="text-6xl mb-6 group-hover:animate-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};