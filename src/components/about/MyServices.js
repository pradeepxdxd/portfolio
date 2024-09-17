import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";
import { Trans, useTranslation } from "react-i18next";

const MyServices = () => {
  const { t } = useTranslation()

  const {
    service_desc1,
    service_desc2,
    service_desc3,
    service_desc4,
  } = t('service')

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="MERN Stack Developer"
        subTitle={<Trans i18nKey={service_desc1} values={service_desc1} />} 
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle={<Trans i18nKey={service_desc2} values={service_desc2} />} 
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="API's"
        subTitle={<Trans i18nKey={service_desc3} values={service_desc3} />} 
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle={<Trans i18nKey={service_desc4} values={service_desc4} />}       
      />
    </div>
  );
};

export default MyServices;
