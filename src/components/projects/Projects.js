import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  workImgNine,
  workImgTen
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const {t} = useTranslation()
  return (
    <div>
      <Title title={t('projects.title1')} subTitle={t('projects.title2')} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Just Chats"
            category="Chat App"
            image={workImgNine}
            url='https://justchats.vercel.app'
          />
          <ProjectsCard
            title="Show Quest"
            category="Ticket Booking"
            image={workImgTen}
            url='https://showquest.vercel.app'
          />
          <ProjectsCard
            title="Blog Website"
            category="Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="Business Card Design"
            category="Design"
            image={workImgOne}
          />
          <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFour}
          />
          <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          />
          <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
