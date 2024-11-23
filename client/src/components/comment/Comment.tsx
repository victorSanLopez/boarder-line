import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import DisplayComment from "../displayComment/DisplayComment";
import style from "./comment.module.css";
import type { commentProps } from "../../assets/lib/definition";

export default function Comment() {
  const [displayForm, setDisplayForm] = useState(false);
  const { register, handleSubmit } = useForm<commentProps>();
  const [userInput, setUserInput] = useState<commentProps[]>([]);

  const userSubmit = (data: commentProps) => setUserInput([...userInput, data]);
  const handleClick = () =>
    displayForm ? setDisplayForm(false) : setDisplayForm(true);
  useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(userInput));
  }, [userInput]);

  return (
    <>
      <section className={style.comment}>
        {userInput.map((m) => (
          <DisplayComment item={m} key={m.comment} />
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
