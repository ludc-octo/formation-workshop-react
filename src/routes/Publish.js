import Button from "../components/Button/Button";
import './publish.css'
function Publish() {
  return (
    <>
      <h1>Nouvel article</h1>
      <form action="">
        <label htmlFor="titre">Titre</label>
        <input type="text" name="titre" id="titre" />
          <label htmlFor="contenu">Contenu</label>
          <textarea name="contenu" id="contenu" cols="30" rows="10"></textarea>
          <Button type="submit">Publier l'article</Button>
      </form>
    </>
  );
}

export default Publish;
