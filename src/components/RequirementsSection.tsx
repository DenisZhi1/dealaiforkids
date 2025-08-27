import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const requirements = [
  {
    icon: "💻",
    title: "Стационарный компьютер или ноутбук",
    description: "Для комфортной работы с ИИ-инструментами"
  },
  {
    icon: "🌐", 
    title: "Интернет и Zoom",
    description: "Стабильное соединение для онлайн-занятий"
  }
];

const schedule = [
  {
    icon: "📅",
    day: "Четверг",
    time: "15:00 (МСК)",
    group: "группа 4–5 класс",
    color: "primary"
  },
  {
    icon: "📅",
    day: "Пятница", 
    time: "15:30 (МСК)",
    group: "группа 6–8 класс",
    color: "accent"
  }
];

export const RequirementsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Requirements */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Что потребуется
              </h2>
              <p className="text-lg text-muted-foreground">
                Минимальные технические требования для участия в курсе
              </p>
            </div>

            <div className="space-y-6">
              {requirements.map((req, index) => (
                <Card key={index} className="bg-card/50 border-border/30 hover:border-primary/30 transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{req.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{req.title}</h3>
                        <p className="text-muted-foreground">{req.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
                Расписание
              </h2>
              <p className="text-lg text-muted-foreground">
                Удобное время занятий для школьников
              </p>
            </div>

            <div className="space-y-6">
              {schedule.map((item, index) => (
                <Card key={index} className={`bg-card/50 border-border/30 hover:border-${item.color}/30 transition-smooth hover:shadow-card`}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className={`text-${item.color}`}>{item.day}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {item.time}
                    </div>
                    <div className={`text-${item.color} font-medium`}>
                      {item.group}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};