import { useForm } from "react-hook-form";

export default function Comment() {
  const { register } = useForm();

  return (
    <>
      <form>
        <label htmlFor="comment">
          Commentaire
          <input type="text" {...register("comment")} id="comment" />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}
