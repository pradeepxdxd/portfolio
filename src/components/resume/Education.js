import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";
import { useTranslation, Trans } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full grid grid-cols-9 px-6">
      {/* Experience Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle
          title={<Trans i18nKey="resume.resume_sub_title1" />}
          icon={<MdWork />}
        />
        <ResumeCard
          badge=""
          title={t("resume.resume_profile")}
          subTitle={t("resume.resume_company_name1")}
          des={t("resume.resume_company_desc1")}
        />
        <ResumeCard
          badge="2022-2024"
          title={t("resume.resume_profile")}
          subTitle={t("resume.resume_company_name2")}
          des={t("resume.resume_company_desc2")}
        />
      </div>

      {/* Divider */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Education Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle
          title={<Trans i18nKey="resume.resume_sub_title2" />}
          icon={<GiGraduateCap />}
        />
        <ResumeCard
          badge="2018 - 2022"
          title={t("resume.education_school_name1")}
          subTitle={t("resume.education_school_desc1")}
        />
        <ResumeCard
          badge="2017 - 2018"
          title={t("resume.education_school_name3")}
          subTitle={t("resume.education_school_desc2")}
        />
        <ResumeCard
          badge="2015 - 2016"
          title={t("resume.education_school_name2")}
          subTitle={t("resume.education_school_desc2")}
        />
      </div>
    </div>
  );
};

export default Education;
