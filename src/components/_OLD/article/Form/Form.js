//REACT
import { useState, useEffect } from "react";
//COMPONENTS
import Input from "../../dashboard/Input/Input";
import Select from "../../dashboard/Select/Select";
import Submit from "../../dashboard/Submit/Submit";
//import EditorMCE from "../Editor/EditorMCE";
//STYLES
import styles from "./Form.module.css";

export default function Form({ handleSubmit, btnText, articleData }) {
  const [article, setArticle] = useState(articleData || {});
  const [tag, setTag] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tags", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTag(data);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault(); //Não executa o formulario quando recarregar a página
    handleSubmit(article);
  };

  function handleChange(e) {
    //Adiciona no objeto article uma propriedade com o nome do input, e o valor do input. 
    //Exemplo: article{ articleName: "Ola Mundo" }
    setArticle({ ...article, [e.target.name]: e.target.value });
  }

  function handleTag(e) {
    //Adiciona no objeto article uma propriedade com o nome tag, que é um objeto com as propriedades id e name. 
    //Exemplo: article{ tag{ id:1, name:"lore" } }
    setArticle({
      ...article,
      tag: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Titulo do Artigo"
        name="articleName"
        placeholder="Insira o nome do Artigo"
        handleOnChange={handleChange}
        value={article.articleName ? article.articleName : ""}
      />
      <Input
        type="text"
        text="Texto do Artigo"
        name="articleText"
        placeholder="Insira o Texto do Artigo"
        handleOnChange={handleChange}
        value={article.articleText ? article.articleText : ""}
      />
      <Select
        name="articleTag"
        text="Selecione a Tag"
        options={tag}
        handleOnChange={handleTag}
        value={article.tag ? article.tag.id : ""}
      />
      <Submit text={btnText} />
    </form>
  );
}
