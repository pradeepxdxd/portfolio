import React, { useEffect, useState } from "react";
import { getAge } from '../../utils/dob'
import { useTranslation, Trans } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation()
  const [age, setAge] = useState(0);

  const {
    about_heading,
    about_desc,
    about_residence,
    about_freelance,
    about_address,
    about_age,
    about_address_title,
    about_freelance_title,
    about_residence_title
  } = t('about')

  useEffect(() => {
    const age = getAge('2000-09-28');
    setAge(age)
  }, [])

  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">
            <Trans
              i18nKey={about_heading}
              values={about_heading}
            />
          </h2>
          <p className="text-base leading-6 ">
            <Trans
              i18nKey={about_desc}
              values={about_desc}
            />
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan"><Trans i18nKey={about_age} value={about_age} />:</span>
            {age}
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan"><Trans i18nKey={about_residence_title} value={about_residence_title} />:</span>
            <Trans i18nKey={about_residence} value={about_residence} />
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan"><Trans i18nKey={about_freelance_title} value={about_freelance_title} />:</span>
            <Trans i18nKey={about_freelance} value={about_freelance} />
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan"><Trans i18nKey={about_address_title} value={about_address_title} />:</span>
            <Trans i18nKey={about_address} value={about_address} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
