import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="Certifications of Heakerrank" />
      <FunFactCard icon={<SiAntdesign />} des="3 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="100 hours of coding" />
      <FunFactCard icon={<SiLeetcode />} des="300+ question solve on leetcode" />
    </div>
  );
};

export default FunFact;
