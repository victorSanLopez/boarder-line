import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { useLocation } from "react-router-dom";
import type { commentProps } from "../../assets/lib/definition";
import DisplayComment from "../displayComment/DisplayComment";
import style from "./comment.module.css";
import type { gameDetailsType } from "../../assets/lib/definition";

export default function Comment({
  gameDetails,
}: { gameDetails: gameDetailsType }) {
  const [displayForm, setDisplayForm] = useState(false);
  const { register, handleSubmit } = useForm<commentProps>();
  const [userInput, setUserInput] = useState<commentProps[] | []>(
    JSON.parse(localStorage.getItem(gameDetails.gameId.toString()) || "[]"),
  );

  //Affichage du formulaire
  const handleClick = () =>
    displayForm ? setDisplayForm(false) : setDisplayForm(true);

  //Recupération des données formulaire
  const userSubmit = (data: commentProps) => {
    setUserInput([...userInput, data]);
  };

  //Stockage des données dans le localStorage
  useEffect(() => {
    localStorage.setItem(
      gameDetails.gameId.toString(),
      JSON.stringify(userInput),
    );
  });

  // const loc = useLocation();

  // const urlId = Number(loc.pathname.replace("/details/", ""));

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
            placeholder="add your comment..."
          />

          <button className={style.button} type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
}
