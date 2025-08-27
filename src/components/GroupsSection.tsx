import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const GroupsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Для кого курс
          </h2>
          <p className="text-xl text-muted-foreground">
            Два возрастных потока для максимальной эффективности обучения
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 md:place-items-stretch">
          <Card className="w-full max-w-[560px] md:max-w-none bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth hover:shadow-card group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <CardTitle className="text-2xl text-primary">Первая группа</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-foreground mb-4">4–5 класс</div>
              <p className="text-muted-foreground">
                Базовое знакомство с ИИ через игровые задания и простые проекты
              </p>
            </CardContent>
          </Card>

          <Card className="w-full max-w-[560px] md:max-w-none bg-gradient-card border-border/50 hover:border-accent/30 transition-smooth hover:shadow-card group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-accent transition-smooth">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <CardTitle className="text-2xl text-accent">Вторая группа</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-foreground mb-4">6–8 класс</div>
              <p className="text-muted-foreground">
                Углубленное изучение с практическими проектами и продвинутыми техниками
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
