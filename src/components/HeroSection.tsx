import { Button } from "@/components/ui/button";
import aiHeroImage from "@/assets/ai-hero-image.jpg";

export const HeroSection = () => {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-primary-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-block bg-gradient-primary px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground mb-6 animate-glow">
                🔹 Анонс курса «ИИ для детей»
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Искусственный интеллект
              </span>
              <br />
              <span className="text-foreground">для детей</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Хотите, чтобы ваш ребёнок не просто пользовался ИИ как решебником, а умел применять его с умом и для реальной пользы?
            </p>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-12">
              <p className="text-lg text-muted-foreground mb-4">
                Запускаем первый онлайн-курс по искусственному интеллекту для детей от автора курсов по ИИ для учителей
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-warning">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">с сотнями довольных выпускников и отзывами</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToEnroll}
                className="min-w-[200px]"
              >
                Записаться на курс
              </Button>
              <Button 
                variant="glow" 
                size="xl"
                className="min-w-[200px]"
              >
                Узнать подробнее
              </Button>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={aiHeroImage} 
                alt="Дружелюбный ИИ-робот для детей - иллюстрация к курсу искусственного интеллекта"
                className="w-full max-w-lg rounded-2xl shadow-card hover:shadow-glow transition-smooth transform hover:scale-105"
                loading="eager"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};