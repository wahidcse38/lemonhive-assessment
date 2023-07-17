import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const icon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4320_4965)">
      <path
        d="M19.9023 10.2969L9.938 23.7969C9.8915 23.8599 9.83087 23.911 9.76099 23.9463C9.69111 23.9816 9.61393 24 9.53565 24C9.46974 24.0002 9.40447 23.9871 9.34375 23.9614C9.24043 23.9186 9.15447 23.8424 9.09966 23.7449C9.04485 23.6474 9.02437 23.5343 9.0415 23.4238L10.417 14.5H4.5C4.40748 14.5 4.31677 14.4743 4.23797 14.4258C4.15917 14.3773 4.09536 14.3079 4.05366 14.2253C4.01196 14.1428 3.99399 14.0502 4.00176 13.958C4.00952 13.8658 4.04272 13.7776 4.09765 13.7031L14.062 0.203132C14.1284 0.113161 14.223 0.0480384 14.3308 0.0181699C14.4385 -0.0116986 14.5532 -0.00458897 14.6564 0.0383627C14.7596 0.0813145 14.8455 0.157629 14.9003 0.255113C14.955 0.352597 14.9755 0.465623 14.9585 0.576132L13.583 9.49998H19.5C19.5925 9.49998 19.6832 9.52564 19.7621 9.57413C19.8409 9.62262 19.9047 9.69203 19.9464 9.77463C19.9881 9.85723 20.006 9.94978 19.9983 10.042C19.9905 10.1342 19.9573 10.2224 19.9023 10.2969Z"
        fill="#CDCDCD"
      />
    </g>
    <defs>
      <clipPath id="clip0_4320_4965">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function Confarences() {
  return (
    <div className="w-full lg:w-[70%] mx-auto">
      <VerticalTimeline lineColor={"#111D5E"}>
        <VerticalTimelineElement
          className=""
          contentStyle={{ background: "#fff", color: "#111D5E" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={icon}
        >
          <div className="flex justify-start items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" fill="#FFC93E" />
              <circle cx="8" cy="8" r="3" fill="white" />
            </svg>
            <h3 className="vertical-timeline-element-title text-">
              Creative Director
            </h3>
          </div>
          <p>The edge isn&apos;t bleeding, it&apos;s freezing!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Confarences;
