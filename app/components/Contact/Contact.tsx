"use client";

import styles from "./Contact.module.scss";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { RefObject, useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import useNotify from "@components/Notify/UseNotify";
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  objet: string;
  message: string;
}

const Contact = (): JSX.Element => {
  const { showNotification, NotificationComponent } = useNotify();

  const themeContext = useContext(ThemeContext);
  const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const isDarkMode = themeContext!.isDarkMode;

  useEffect(() => {
    if (document.getElementById("contact") !== null) {
      const componentForCssChange = [
        {
          htmlElement: document.getElementById("contact"),
          name: "contact",
          scss: styles,
        },
      ];
      themeContext?.changeDarkLightMode(componentForCssChange);
    }
  }, [themeContext, isDarkMode]);

  const schema = yup
    .object({
      lastname: yup
        .string()
        .matches(
          /^([a-zA-Z àâäéèêëïîôöùûüç,.'-]{1,20}-{0,1})?([a-zA-Z àâäéèêëïîôöùûüç,.'-]{3,20})$/,
          "Veuillez saisir un nom valide"
        )
        .required("Veuillez saisir votre nom."),
      firstname: yup
        .string()
        .matches(
          /^([a-zA-Z àâäéèêëïîôöùûüç,.'-]{1,20}-{0,1})?([a-zA-Z àâäéèêëïîôöùûüç,.'-]{3,20})$/,
          "Veuillez saisir un prénom valide"
        )
        .required("Veuillez saisir votre prénom."),
      email: yup
        .string()
        .email("Veuillez entrer un email valide.")
        .matches(
          /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/,
          "Veuillez saisir un email valide"
        )
        .required("Veuillez saisir votre email."),
      tel: yup
        .string()
        .matches(/^(?:(?:\+|00)33|0)\d{9}$/, {
          message: "Veuillez saisir un numéro de téléphone valide",
          excludeEmptyString: true,
        })
        .required("Veuillez saisir votre numéro de téléphone."),
      objet: yup
        .string()
        .matches(
          /^.{1,50}$/,
          "Veuillez saisir un objet comportant entre 1 et 50 caractères."
        )
        .required("Veuillez entrer un objet."),
      message: yup
        .string()
        .matches(
          /^[\s\S]{0,500}$/,
          "Veuillez saisir un message comportant entre 1 et 500 caractères."
        )
        .required("Veuillez entrer votre message."),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  function onSubmit() {
    showNotification(
      "success",
      "Votre message a bien été envoyé. Vous recevrez une réponse prochainement. Merci."
    );
    reset();
  }

  const sendEmail = async () => {
    try {
      await schema.validate(getValues());
      await emailjs.sendForm(
        "service_3q9gau9",
        "template_ydx2aq3",
        form.current as HTMLFormElement,
        "hXMSreLWs3gOf-51k"
      );
    } catch (e) {
      showNotification(
        "error",
        "Vos informations sont incorrectes, veuillez les corriger afin de pouvoir envoyer votre message."
      );
    }
  };

  // Animations gsap
  useEffect(() => {
    animationSlideScrollToBottom("contact", 0.3, 0.5, 0, 75, 25);
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <div id="container" className={styles["container-formulaire"]}>
        <h2 id="contactTitle" className={styles.title}>
          Contact
        </h2>
        <NotificationComponent />
        <form
          ref={form}
          className={styles.form__contact}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={styles.label} htmlFor="lastName">
            Nom:
            <input
              className={styles.input}
              placeholder="&#128100; Saisir votre nom"
              type="text"
              id="lastName"
              {...register("lastname")}
            />
            {errors.lastname && (
              <span className={styles.errors}>{errors.lastname.message}</span>
            )}
          </label>
          <label className={styles.label} htmlFor="firstName">
            Prénom:
            <input
              className={styles.input}
              placeholder="&#128100; Saisir votre prénom"
              type="text"
              id="firstName"
              {...register("firstname")}
            />
            {errors.firstname && (
              <span className={styles.errors}>{errors.firstname.message}</span>
            )}
          </label>
          <label className={styles.label} htmlFor="email">
            E-mail:
            <input
              className={styles.input}
              placeholder="&#128234; Saisir votre email"
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <span className={styles.errors}>{errors.email.message}</span>
            )}
          </label>
          <label className={styles.label} htmlFor="tel">
            Téléphone :
            <input
              className={styles.input}
              placeholder="&#128241; Saisir votre téléphone"
              type="text"
              id="tel"
              {...register("tel")}
            />
            {errors.tel && (
              <span className={styles.errors}>{errors.tel.message}</span>
            )}
          </label>
          <label className={styles.label} htmlFor="objet">
            Objet :
            <input
              className={styles.input}
              placeholder="&#10002; Saisir l'objet de votre message"
              type="text"
              id="objet"
              {...register("objet")}
            />
            {errors.objet && (
              <span className={styles.errors}>{errors.objet.message}</span>
            )}
          </label>
          <label className={styles.label}>
            Message :
            <textarea
              placeholder="&#10002; Saisir ici votre message"
              className={styles.textarea}
              {...register("message")}
            />
            {errors.message && (
              <span className={styles.errors}>{errors.message.message}</span>
            )}
          </label>
          <button className={styles.send} type="submit" onClick={sendEmail}>
            Envoyer
          </button>
          <div className={styles.elipse}></div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
