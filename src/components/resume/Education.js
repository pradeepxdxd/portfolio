import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Software Engineer"
          subTitle="Hue.ai"
          des={'Working on instant upload app'}
        />
        <ResumeCard
          badge="2022-2024"
          title="Software Engineer"
          subTitle="NeoSOFT Technology"
          des={'Working on 2 major projects that is Skuview, Kizuna'}
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2018 - 2022"
          title=" IPS Academy"
          subTitle="Indore, India"
        />
        <ResumeCard
          badge="2017 - 2018"
          title="Secondary School"
          subTitle="Betul, MP"
        />
        <ResumeCard
          badge="2015 - 2016"
          title="Higher Secondary School"
          subTitle="Betul, MP"
        />
      </div>
    </div>
  );
};

export default Education;
