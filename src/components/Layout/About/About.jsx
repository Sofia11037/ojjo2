import { useState } from "react";
import "./about.scss";
import Ways from "../Ways/Ways";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="about">
      <div className="text">
        <div className={`back ${isExpanded ? "hidden" : ""}`}></div>
        <p className={`txt ${isExpanded ? "expanded" : "collapsed"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aperiam
          praesentium saepe est odit. Cum labore veritatis hic mollitia ipsa
          voluptate asperiores doloribus incidunt nulla, delectus adipisci ut
          dolorum placeat, eum animi aliquid voluptatum excepturi architecto?
          Rem corporis error distinctio sunt blanditiis dignissimos modi?
          Aperiam nihil corrupti ex, doloremque minus eum accusamus cum quidem
          voluptate. Corporis sint officiis consequatur ratione unde impedit
          velit amet ad nulla cum, natus libero suscipit voluptatum ea voluptas
          nam excepturi id nesciunt accusantium blanditiis necessitatibus earum
          temporibus? Repellendus officia vel minus explicabo dolorum non ipsum
          commodi, distinctio accusantium? Tempore assumenda minima veniam,
          natus ab ipsa.
        </p>
        <p className="more" onClick={toggleExpand}>
          {isExpanded ? "СВЕРНУТЬ" : "ЧИТАТЬ ПОЛНОСТЬЮ"}
        </p>
      </div>
      <Ways />
    </div>
  );
}
