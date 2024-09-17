import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation()
  const {
    about_title1,
    about_title2,
  } = t('about')
  const {
    service_title1,
    service_title2,
  } = t('service')
  const {
    funfact_title1,
    funfact_title2
  } = t('funfact')
  return (
    <section id="about" className="w-full">
      <Title title={about_title1} subTitle={about_title2} />
      <AboutMe />
      <Title title={service_title1} subTitle={service_title2} />
      <MyServices />
      <Title title={funfact_title1} subTitle={funfact_title2} />
      <FunFact />
    </section>
  );
};

export default About;
