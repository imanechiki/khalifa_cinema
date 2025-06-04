"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import FullNameInput from "@/components/form/full-name-input";
import EmailInput from "@/components/form/email-input";
import PhoneInput from "@/components/form/phone-input";
import MessageTextarea from "@/components/form/message-textarea";

export default function ContactSection() {
  const [fields, setFields] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  // InView logic
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  function validate() {
    const newErrors: any = {};
    if (!fields.fullname.trim())
      newErrors.fullname = "Le nom complet est requis.";
    if (!fields.email.trim()) newErrors.email = "L'adresse e-mail est requise.";
    else if (!/^\S+@\S+\.\S+$/.test(fields.email))
      newErrors.email = "Format d'e-mail invalide.";
    if (!fields.phone.trim())
      newErrors.phone = "Le numéro de téléphone est requis.";
    else if (!/^\+?\d{8,15}$/.test(fields.phone.replace(/\s/g, "")))
      newErrors.phone = "Format de téléphone invalide.";
    if (!fields.message.trim()) newErrors.message = "Le message est requis.";
    else if (fields.message.trim().length < 10)
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, handle submission (e.g., send to API)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col items-center justify-center"
    >
      <motion.h1
        className="font-contralto text-5xl md:text-6xl text-black mb-10 text-center leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        REMPLISSEZ LE <br /> FORMULAIRE
      </motion.h1>
      <motion.form
        className="w-full max-w-3xl flex flex-col gap-4 md:gap-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
        noValidate
      >
        <FullNameInput
          value={fields.fullname}
          onChange={handleChange}
          error={submitted && errors.fullname}
          name="fullname"
        />
        <EmailInput
          value={fields.email}
          onChange={handleChange}
          error={submitted && errors.email}
          name="email"
        />
        <PhoneInput
          value={fields.phone}
          onChange={handleChange}
          error={submitted && errors.phone}
          name="phone"
        />
        <MessageTextarea
          value={fields.message}
          onChange={handleChange}
          error={submitted && errors.message}
          name="message"
        />
        <Button
          type="submit"
          name="submit"
          className="w-full rounded-full bg-black text-white text-2xl py-6 mt-2 hover:white hover:text-black transition-all duration-200"
        >
          Envoyer
        </Button>
      </motion.form>
      <motion.p
        className="mt-10 text-center text-base md:text-lg text-black/90 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Pour toute demande d'information, de consultation ou pour planifier une
        visite, n'hésitez pas à nous contacter via les coordonnées ci-dessus.
        <br />
        Nous serons ravis de vous répondre !
      </motion.p>
    </section>
  );
}
