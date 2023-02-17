import Button from "../components/Button/Button";
import './publish.css'
import { v4 as uuidv4 } from 'uuid';

function Publish() {

  const sendNewArticle = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: uuidv4(),
        title: document.getElementById('input-title').value,
        content: document.getElementById('input-content').value,
      })
    })
  }

  return (
    <>
      <h1>Nouvel article</h1>
      <form action="">
        <label htmlFor="input-title">Titre</label>
        <input type="text" name="input-title" id="input-title" />
          <label htmlFor="input-content">Contenu</label>
          <textarea name="input-content" id="input-content" cols="30" rows="10"></textarea>
          <Button type="submit" onClick={(e) => sendNewArticle(e)}>Publier l'article</Button>
      </form>
    </>
  );
}

export default Publish;
