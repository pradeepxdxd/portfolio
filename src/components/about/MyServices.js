import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="MERN Stack Developer"
        subTitle="As a MERN developer I have expertise in both front-end and back-end development, making capable of building scalable and efficient applications from scratch."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="As a designer I have strong knowledge of CSS frameworks like Material UI, Bootstrap, Tailwind UI"
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="API's"
        subTitle="As a developer, building APIs is a critical part of modern web app. APIs allow different software systems to communicate. Two popular approaches for creating APIs are REST and GraphQL I worked on."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="As a developer, SEO (Search Engine Optimization) plays a crucial role in ensuring that your website is discoverable by search engines, leading to better visibility and traffic."
      />
    </div>
  );
};

export default MyServices;
