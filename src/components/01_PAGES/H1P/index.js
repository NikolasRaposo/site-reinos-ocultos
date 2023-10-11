import style from "./style.module.css";

export default function H1P({ titulo, texto, h1fs }) {
  return (
    <div className={style.config}>
      <style type="text/css">
        {`
        h1 {
            font-size: {fs};
        }
      `}
      </style>
      <h1>{titulo}</h1>
      <p>{texto}</p>
    </div>
  );
}
