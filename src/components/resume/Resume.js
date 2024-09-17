import React from "react";
import Title from "../home/Title";
import Education from "./Education";
import Skills from "./Skills";
import { Trans, useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation()

  const {
    resume_common_title,
    resume_title2,
    resume_title3,
  } = t('resume')

  return (
    <section id="resume">
      <Title title={<Trans i18nKey={resume_common_title} values={resume_common_title} />} subTitle={<Trans i18nKey={resume_title2} values={resume_title2} />} />
      <Education />
      <Title title={<Trans i18nKey={resume_common_title} values={resume_common_title} />} subTitle={<Trans i18nKey={resume_title3} values={resume_title3} />} />
      <Skills />
    </section>
  );
};

export default Resume;
