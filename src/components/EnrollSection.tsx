import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const EnrollSection = () => {
  return (
    <section id="enroll" className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-glow/20 rounded-full blur-2xl animate-glow"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Записаться на курс
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Дайте своему ребёнку преимущество в цифровом мире. Запишитесь сейчас и получите место в одной из групп!
        </p>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-smooth hover:shadow-card mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-semibold text-lg mb-2">16 уроков</div>
                <div className="text-muted-foreground">Полная программа обучения</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-semibold text-lg mb-2">Маленькие группы</div>
                <div className="text-muted-foreground">Индивидуальный подход</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                className="min-w-[250px]"
                onClick={() => window.open('https://t.me/your_telegram', '_blank')}
              >
                Записаться в Telegram
              </Button>
              <Button 
                variant="glow" 
                size="xl"
                className="min-w-[250px]"
                onClick={() => window.location.href = 'mailto:info@example.com'}
              >
                Написать на почту
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-muted-foreground">
          <p className="mb-4">
            ⚡ Быстрая обратная связь в течение нескольких часов
          </p>
          <p className="text-sm">
            Остались вопросы? Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </div>
    </section>
  );
};