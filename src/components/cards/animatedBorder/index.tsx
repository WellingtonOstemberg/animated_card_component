import "./styles.css";
export const AnimatedBorderCard = ({
  title,
  message,
  path,
}: {
  title: string;
  message: string;
  path: string;
}) => {
  return (
    <div className="box">
      <div className="text-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <a href={path}>Veja Mais</a>
      </div>
    </div>
  );
};
