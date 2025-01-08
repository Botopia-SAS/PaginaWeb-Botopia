import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import { useTranslation } from "react-i18next"; // Hook de i18next para idioma dinámico

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const { t } = useTranslation(); // Hook para traducciones dinámicas

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_5h93uqj",
        "template_v8xt1a4",
        {
          from_name: form.name,
          to_name: "Botopia",
          from_email: form.email,
          to_email: "botopia.sas@gmail.com",
          message: `${form.message}\n\n\nMi nombre es: ${form.name}\nMi teléfono es: ${form.phone}\nMi email es: ${form.email}`,
        },
        "W6EZWFENOrmXlCRcx"
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: t("contact.alerts.success"), // Traducción correcta
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
              phone: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: t("contact.alerts.error"), // Traducción correcta
            type: "danger",
          });
        }
      );
  };

  return (
    <section id="contact" className="w-full">
      <h3 className="text-lg font-bold mb-4">{t("contact.title")}</h3>
      {alert.show && <Alert {...alert} />}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 w-full max-w-full"
      >
        <label className="flex flex-col w-full">
          <span className="text-sm font-medium">{t("contact.labels.name")}</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
            placeholder={t("contact.placeholders.name")}
          />
        </label>
        <label className="flex flex-col w-full">
          <span className="text-sm font-medium">{t("contact.labels.email")}</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
            placeholder={t("contact.placeholders.email")}
          />
        </label>
        <label className="flex flex-col w-full">
          <span className="text-sm font-medium">{t("contact.labels.phone")}</span>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
            placeholder={t("contact.placeholders.phone")}
          />
        </label>
        <label className="flex flex-col w-full">
          <span className="text-sm font-medium">{t("contact.labels.message")}</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
            placeholder={t("contact.placeholders.message")}
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-[#9165f3] text-white rounded hover:bg-[#7e53c1] transition flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          {loading ? t("contact.loading") : t("contact.button")}
          {!loading && (
            <img
              src="/assets/arrow-up.png"
              alt="arrow-up"
              className="w-4 h-4"
            />
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
