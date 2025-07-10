import { Shield, Truck, Heart, Sparkles } from "lucide-react";
import "./styles/Features.css";

const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-160q-50 0-85-35t-35-85H80q-17 0-28.5-11.5T40-320v-400q0-33 23.5-56.5T120-800h480q33 0 56.5 23.5T680-720v80h80q19 0 36 8.5t28 23.5l88 117q4 5 6 11t2 13v147q0 17-11.5 28.5T880-280h-40q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240Zm480 0q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120Z"/></svg>,
    title: "Envío Gratuito",
    description: "En pedidos superiores a $1800.00",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-84q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z"/></svg>,
    title: "Garantía Premium",
    description: "30 días de devolución gratuita",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z"/></svg>,
    title: "Atención Personal",
    description: "Asesoramiento de estilo exclusivo",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M760-360q12-12 28.5-12t28.5 12l63 64q12 12 12 28t-12 28q-12 12-28 12t-28-12l-64-63q-12-12-12-28.5t12-28.5Zm40-480q12 12 12 28.5T800-783l-63 63q-12 12-28.5 12T680-720q-12-12-12-28.5t12-28.5l64-63q12-12 28-12t28 12Zm-640 0q12-12 28.5-12t28.5 12l63 64q12 12 12 28t-12 28q-12 12-28.5 12T223-720l-63-63q-12-12-12-28.5t12-28.5Zm40 480q12 12 12 28.5T200-303l-63 63q-12 12-28.5 12T80-240q-12-12-12-28.5T80-297l64-63q12-12 28-12t28 12Zm280 91L314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"/></svg>,
    title: "Calidad Excepcional",
    description: "Materiales de la más alta calidad",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="features__card">
              <div className="features__icon">
                {feature.icon}
              </div>
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
