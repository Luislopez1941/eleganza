import { Shield, Truck, Heart, Sparkles } from "lucide-react";
import "./styles/Features.css";

const features = [
  {
    icon: Truck,
    title: "Envío Gratuito",
    description: "En pedidos superiores a $1800.00",
  },
  {
    icon: Shield,
    title: "Garantía Premium",
    description: "30 días de devolución gratuita",
  },
  {
    icon: Heart,
    title: "Atención Personal",
    description: "Asesoramiento de estilo exclusivo",
  },
  {
    icon: Sparkles,
    title: "Calidad Excepcional",
    description: "Materiales de la más alta calidad",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="features__card">
                <div className="features__icon">
                  <IconComponent />
                </div>
                <h3 className="features__title">{feature.title}</h3>
                <p className="features__description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
