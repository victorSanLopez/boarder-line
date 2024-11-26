import { useState } from "react";
import { useForm } from "react-hook-form";
import type { commentProps } from "../../assets/lib/definition";
import type { gameDetailsType } from "../../assets/lib/definition";
import DisplayComment from "../displayComment/DisplayComment";
import style from "./comment.module.css";
// import { useLocation } from "react-router-dom";

export default function Comment({
  gameDetails,
}: { gameDetails: gameDetailsType }) {
  const [displayForm, setDisplayForm] = useState(false);
  const { register, handleSubmit } = useForm<commentProps>();
  const [userInput, setUserInput] = useState<commentProps[] | []>(
    JSON.parse(localStorage.getItem(gameDetails.gameId.toString()) || "[]"),
  );
  // const reset = useRef(userInput.reset());

  //Affichage du formulaire
  const handleClick = () => setDisplayForm(!displayForm);

  //Recupération des données formulaire
  const userSubmit = (data: commentProps) => {
    setUserInput([...userInput, data]);

    localStorage.setItem(
      gameDetails.gameId.toString(),
      JSON.stringify([...userInput, data]),
    );
  };
  // const location = useLocation();
  //Stockage des données dans le localStorage
  // useEffect(() => {
  //   setUserInput(
  //     JSON.parse(localStorage.getItem(gameDetails.gameId.toString()) || "[]"),
  //   );
  // }, [location, gameDetails]);

  return (
    <>
      <section className={style.comment}>
        {userInput.map((u) => (
          <DisplayComment item={u} key={u.id} />
        ))}
      </section>
      <button className={style.button} type="button" onClick={handleClick}>
        Add Comment
      </button>
      {displayForm && (
        <form className={style.form} onSubmit={handleSubmit(userSubmit)}>
          <div className={style.divInfo}>
            <label className={style.userInfo} htmlFor="firstname">
              First Name
              <input
                className={style.inputUserInfo}
                type="text"
                {...register("firstname", { required: true, minLength: 2 })}
                id="firstname"
              />
            </label>
            <label className={style.userInfo} htmlFor="lastname">
              Last Name
              <input
                className={style.inputUserInfo}
                type="text"
                {...register("lastname", { required: true, minLength: 2 })}
                id="lastname"
              />
            </label>
          </div>
          <textarea
            className={style.input}
            {...register("comment", { required: true, minLength: 3 })}
            id="comment"
            placeholder="Add your comment..."
          />

          <button className={style.buttonSubmit} type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
}
