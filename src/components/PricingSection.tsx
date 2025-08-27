import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Стоимость
          </h2>
          <p className="text-xl text-muted-foreground">
            Выберите удобный способ оплаты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Разовая оплата */}
          <Card className="bg-gradient-card border-2 border-primary/30 hover:border-primary/50 transition-smooth hover:shadow-primary group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold rounded-bl-lg">
              Выгодно!
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-primary mb-2">Разовая оплата</CardTitle>
              <div className="text-4xl font-bold text-foreground mb-2">14 400 ₽</div>
              <p className="text-muted-foreground">за весь курс (16 уроков)</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-primary/10 text-primary border border-primary/20 rounded-lg p-4 mb-6">
                <div className="font-semibold mb-2">900 ₽ за урок</div>
                <div className="text-sm">Экономия 1600 ₽</div>
              </div>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={scrollToEnroll}
              >
                Записаться со скидкой
              </Button>
            </CardContent>
          </Card>

          {/* Абонемент */}
          <Card className="bg-gradient-card border-border/50 hover:border-accent/30 transition-smooth hover:shadow-card group">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-accent mb-2">Абонемент</CardTitle>
              <div className="text-4xl font-bold text-foreground mb-2">1000 ₽</div>
              <p className="text-muted-foreground">за урок</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-accent/10 text-accent border border-accent/20 rounded-lg p-4 mb-6">
                <div className="font-semibold mb-2">Гибкая оплата</div>
                <div className="text-sm">Платите по мере прохождения</div>
              </div>
              <Button 
                variant="accent" 
                size="lg" 
                className="w-full"
                onClick={scrollToEnroll}
              >
                Записаться с абонементом
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-warning/10 text-warning border border-warning/20 rounded-lg p-6 inline-block">
            <div className="font-semibold text-lg mb-2">📢 Старт набора уже открыт!</div>
            <div>Количество мест ограничено, так как группы маленькие и работа идёт в интерактиве.</div>
          </div>
        </div>
      </div>
    </section>
  );
};