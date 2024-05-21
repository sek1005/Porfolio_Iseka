import Title from "../components/Title";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./contact .scss";
import { Helmet } from "react-helmet";

function Contact() {
    const [feedback, setFeedback] = useState("");
    const [feedbackGood, setFeedbackGood] = useState("");
    const navigate = useNavigate();

    const yupSchema = yup.object({
        name: yup.string().required("Ce champ est obligatoire"),
        firstname: yup.string().required("Ce champ est obligatoire "),
        email: yup
            .string()
            .required("Ce champ est obligatoire")
            .matches(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                "Votre email n'est pas valide"
            ),
        subject: yup.string().required("Ce champ est obligatoire "),
        message: yup.string().required("Ce champ est obligatoire"),
        rules: yup
            .boolean()
            .oneOf([true], 'Veuillez cocher la case si vous souhaitez envoyer votre message'),
    });
    const defaultValues = {
        name: "",
        firstname: "",
        email: "",
        subject: "",
        message: "",
        rules: false
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(yupSchema),
    });

    const submit = async (values) => {
        try {
            console.log(values);
            const response = await fetch('https://ines.seka.vercel.app/api/contact/send', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                setFeedbackGood("Votre message a bien été envoyé");
                reset(defaultValues);
                setTimeout(() => {
                    setFeedbackGood("");
                    navigate("/");
                }, 5000);
            }
        } catch (error) {
            setFeedback("Une erreur est survenue");
            console.error(error);
        }
    };
    return (
        <>
            <Helmet>
                <title>Contact | Iseka</title>
                <meta name="description" content="Contact site Iseka" />
            </Helmet>
            <Title title="Contact" />
            <div className="cadre_contact">
            <form onSubmit={handleSubmit(submit)} className="contact">
                <input type="text" id="name" {...register("name")} title="Nom" placeholder="Nom" />
                {errors?.name && <p className="form-error">{errors.name.message}</p>}

                <input type="text" id="firstname" {...register("firstname")} title="Prénom" placeholder="Prénom" />
                {errors?.firstname && <p className="form-error">{errors.firstname.message}</p>}

                <input type="text" id="email" {...register("email")} title="Email" placeholder="Email" />
                {errors?.email && <p className="form-error">{errors.email.message}</p>}

                <input type="text" id="subject" {...register("subject")} title="Sujet de votre demande" placeholder="Sujet de votre demande" />
                {errors?.subject && <p className="form-error">{errors.subject.message}</p>}

                <textarea type="text" id="name" {...register("message")} title="message" placeholder="Votre message" />
                {errors?.message && <p className="form-error">{errors.message.message}</p>}

                <section className="rules">
                    <input type="checkbox" id="rules" {...register("rules")} />
                    <p>En soumettant ce formulaire, j’accepte que mes informations soient utilisées exclusivement dans le cadre de ma demande</p>
                </section>
                {errors?.rules && <p className="form-error text-center">{errors.rules.message}</p>}

                <button className="mt20" title="Soumettre le formulaire">Envoyer votre message</button>
                {feedback && <p className={`form-error mt20`}>{feedback}</p>}
                {feedbackGood && <p className="feedbackGood">{feedbackGood}</p>}
            </form >
            </div>
        </>
    );
}
export default Contact;