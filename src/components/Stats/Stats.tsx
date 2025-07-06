import "./styles/Stats.css";

const statsData = [
  {
    number: "500+",
    label: "Diseños Únicos",
  },
  {
    number: "15K+",
    label: "Mujeres Elegantes",
  },
  {
    number: "24h",
    label: "Envío Express",
  },
];

export default function Stats() {
  return (
    <div className="stats">
      {statsData.map((stat, index) => (
        <div key={index} className="stats__item">
          <div className="stats__number">{stat.number}</div>
          <div className="stats__label">{stat.label}</div>
          <div className="stats__line"></div>
        </div>
      ))}
    </div>
  );
}
