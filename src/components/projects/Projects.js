import React from "react";
import {
  workImgSix,
  workImgNine,
  workImgTen,
  workImgEleven,
  askAiImg,
  urbancabImg
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Title title={t('projects.title1')} subTitle={t('projects.title2')} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Ask AI"
            category="Open AI"
            image={askAiImg}
            url='http://ask-ai-two.vercel.app/'
          />
          <ProjectsCard
            title="Just Chats"
            category="Chat App"
            image={workImgNine}
            url='https://justchats.vercel.app'
          />
          <ProjectsCard
            title="Urbancab"
            category="Transport"
            image={urbancabImg}
            url='https://urbancab.vercel.app'
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Show Quest"
            category="Ticket Booking"
            image={workImgTen}
            url='https://showquest.vercel.app'
          />
          <ProjectsCard
            title="Smart Light"
            category="Spotlights"
            image={workImgEleven}
            url={'https://smart-lights-mu.vercel.app'}
          />
          <ProjectsCard
            title="Assignment Tracking App"
            category="Web App"
            image={workImgSix}
            url={'https://assignment-tracking.vercel.app/'}
          />
          {/* <ProjectsC
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
