import React, { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";
import emailjs from '@emailjs/browser'
import { keys } from '../../config/key'
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation()
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const form = useRef();

  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  // ================= Error Messages End here ===================
  const [seuccessMsg, setSuccessMsg] = useState("");
  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ================= Email Validation End here =================

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      const templateParams = {
        user_name: clientName,
        user_email: email,
        message: messages
      }
      emailjs
        .send(keys.SERVICE_ID, keys.TEMPLATE_ID, templateParams, {
          publicKey: keys.PUBLIC_KEY,
        })
        .then(
          () => {
            setSuccessMsg(
              `Hello dear ${clientName}, Your messages has been sent successfully. Thank you for your time!`
            );
            setClientName("");
            setEmail("");
            setMessages("");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );


    }
  };
  return (
    <div className="w-full">
      <Title title={t('contact.title1')} subTitle={t('contact.title2')} />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              {t('about.about_address_title')}:
            </span>
            {t('contact.address')}
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              {t('contact.phone_title')}:
            </span>
            +91 8319868762
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
            {t('contact.email_title')}:
            </span>
            pradeepbiswas41813@gmail.com
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
            {t('about.about_freelance_title')}:
            </span>
            {t('about.about_freelance')}
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title={t('contact.sub-title1')} subTitle={t('contact.sub-title2')} />
        {seuccessMsg ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
            {seuccessMsg}
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/e18ee560-5133-4cfe-9a48-eddb6f012a9f"
            method="POST"
            className="p-6 flex flex-col gap-6"
            ref={form}
          >
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={`${errClientName
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                // className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
                type="text"
                placeholder={t('contact.ph_name')}
                name="user_name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${errEmail
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="email"
                placeholder={t('contact.ph_email')}
                name="user_email"
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`${errMessages
                ? "border-red-600 focus-visible:border-red-600"
                : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
              placeholder={t('contact.ph_message')}
              rows="4"
              name="message"
            ></textarea>
            <button
              onClick={handleSend}
              className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
            >
              {t('contact.btn')}{" "}
              <span className="mt-1 text-designColor">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
