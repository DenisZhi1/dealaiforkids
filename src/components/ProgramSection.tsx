import { CourseCard } from "./CourseCard";

const courseModules = [
  {
    number: "1",
    title: "Что такое ИИ и промпт",
    description: "Дети узнают, где используется ИИ и как он понимает команды.",
    benefit: "Понимание основ, чтобы не бояться технологий."
  },
  {
    number: "2", 
    title: "Домашка с ИИ — с умом",
    description: "Учимся использовать ИИ как помощника, а не решебник.",
    benefit: "Ребёнок станет эффективнее и самостоятельнее."
  },
  {
    number: "3",
    title: "Ролевые промпты", 
    description: "ИИ в роли учителя, пирата или мультиперсонажа.",
    benefit: "Развитие воображения и умение проверять ответы."
  },
  {
    number: "4",
    title: "Как улучшать результат",
    description: "Учимся «докручивать» ответы ИИ пошагово.",
    benefit: "Умение добиваться точного результата."
  },
  {
    number: "5",
    title: "Шаблоны промптов",
    description: "Создаём свои заготовки для однотипных задач.",
    benefit: "Экономия времени и системное мышление."
  },
  {
    number: "6-10",
    title: "Работа с картинками",
    description: "Генерация картинок, редактирование, стикеры, персонажи и истории.",
    benefit: "Дети развивают креативность и визуальное мышление.",
    variant: "highlight" as const
  },
  {
    number: "11",
    title: "Презентации с ИИ",
    description: "Как за 5 минут сделать презентацию по теме.",
    benefit: "Лёгкая подготовка к школе и конкурсам."
  },
  {
    number: "12",
    title: "Инфографика",
    description: "Учимся представлять сложное в картинках и схемах.",
    benefit: "Развитие структурного мышления."
  },
  {
    number: "13",
    title: "Защита проекта",
    description: "Ребёнок учится выступать уверенно и интересно.",
    benefit: "Полезный навык для школы и будущих выступлений."
  },
  {
    number: "14-15",
    title: "Создание сайтов",
    description: "Делаем сайт-визитку и многостраничный сайт.",
    benefit: "Практический опыт в цифровых профессиях.",
    variant: "highlight" as const
  }
];

export const ProgramSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Программа курса
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            16 увлекательных уроков, которые познакомят детей с миром искусственного интеллекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {courseModules.map((module, index) => (
            <CourseCard key={index} {...module} />
          ))}
        </div>

        <div className="bg-gradient-card border border-border/50 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-accent-foreground">🏆</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-accent">Финал: Дипломный проект</h3>
          <p className="text-muted-foreground mb-4">
            Ребёнок создаёт свой полноценный проект с ИИ.
          </p>
          <div className="bg-accent/10 text-accent border border-accent/20 rounded-lg p-4 inline-block">
            👉 Гордость за результат и уверенность в себе
          </div>
        </div>
      </div>
    </section>
  );
};