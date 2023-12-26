import { IJoinCall } from "../../../../application/interfaces";
import Input from "../../../../components/Input";
import Svg from "../../../../components/Svg";
import { Icons } from "../../../../components/Svg/iconsPack";
import styles from "./join-call.module.css";
import Typed from "typed.js";
import { ChangeEvent, FormEvent, RefObject, useEffect, useRef } from "react";
import { Image } from "../../../../components/Image";

export const JoinCall = ({
  setInCall,
  setFormValues,
  imgUser,
  user,
  formValues,
}: IJoinCall) => {


  const handleImageChange = (newImageUrl: string) => {
    setFormValues({
      ...formValues,
      imgUser: newImageUrl,
    });
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const joinCall = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInCall(true);
  };

  const goToVideoCall = () => {
    return (window.location.href = "/");
  };
  const spanRef: RefObject<HTMLSpanElement> = useRef(null);

  useEffect(() => {
    const typed = new Typed(spanRef?.current, {
      strings: ["CONECTAR", "LLAMAR", "INTERACTUAR"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section className={styles["section-join-call"]}>
        <div className={styles["wrapper-join-call"]}>
          <div className={styles["header-join-call"]}>
            <button onClick={goToVideoCall}>
              <Svg icon={Icons.back} />
              <p>Volver</p>
            </button>
            <h3>urpi</h3>
          </div>
          <div className={styles["main-join-call"]}>
            <div className={styles["form-join-call"]}>
              <form action="" onSubmit={joinCall}>
                <Image
                  accept=".png, .jpg, .jpeg, .svg"
                  textAllowed={
                    "Archivos permitidos para el avatar: png, jpg, jpeg, svg."
                  }
                  name={"imgUser"}
                  value={imgUser}
                  onImageChange={handleImageChange}
                />
                <Input
                  type="text"
                  name="user"
                  value={user}
                  onChange={handleInputChange}
                  placeholder="Ingrese su nombre o usuario"
                  autocomplete="off"
                />
                <button type="submit" disabled={user === "" ? true : false}>
                  Unirse a la llamada
                </button>
              </form>
            </div>
            <div className={styles["bg-join-call"]}>
              <h3>
                Estás a un paso de acceder al lugar donde podrás{" "}
                <span ref={spanRef}></span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
