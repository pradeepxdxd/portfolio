import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import FunFactCard from "./FunFactCard";
import { Trans, useTranslation } from "react-i18next";

const FunFact = () => {
  const { t } = useTranslation()

  const {
    funfact_content1,
    funfact_content2,
    funfact_content3,
    funfact_content4,
  } = t('funfact')
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des={<Trans i18nKey={funfact_content1} values={funfact_content1} />} />
      <FunFactCard icon={<SiAntdesign />} des={<Trans i18nKey={funfact_content2} values={funfact_content2} />} />
      <FunFactCard icon={<BiCodeAlt />} des={<Trans i18nKey={funfact_content3} values={funfact_content3} />} />
      <FunFactCard icon={<SiLeetcode />} des={<Trans i18nKey={funfact_content4} values={funfact_content4} />} />
    </div>
  );
};

export default FunFact;
