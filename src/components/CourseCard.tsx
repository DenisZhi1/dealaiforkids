import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CourseCardProps {
  number: string;
  title: string;
  description: string;
  benefit: string;
  variant?: 'default' | 'highlight';
}

export const CourseCard = ({ number, title, description, benefit, variant = 'default' }: CourseCardProps) => {
  return (
    <Card className={`bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth group hover:shadow-card ${variant === 'highlight' ? 'ring-2 ring-accent/20' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
            variant === 'highlight' 
              ? 'bg-gradient-accent text-accent-foreground' 
              : 'bg-gradient-primary text-primary-foreground'
          }`}>
            {number}
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-smooth">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        <div className={`text-sm font-medium p-3 rounded-lg ${
          variant === 'highlight' 
            ? 'bg-accent/10 text-accent border border-accent/20' 
            : 'bg-primary/10 text-primary border border-primary/20'
        }`}>
          👉 {benefit}
        </div>
      </CardContent>
    </Card>
  );
};