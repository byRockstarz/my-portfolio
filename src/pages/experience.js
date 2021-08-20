import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "reactstrap";
import { MdLibraryBooks, MdWork } from "react-icons/md";
import data from "../resume.json";

const ExperiencePage = () => {
  return (
    <Container fluid>
      {data.map((basic, index) => {
        console.log(basic);
        return (
          <VerticalTimeline key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {basic.basics.name}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {basic.basics.location.city}
              </h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdLibraryBooks />}
            >
              <h3 className="vertical-timeline-element-title">
                {basic.education.institution}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {basic.education.studyType}
              </h4>
              <p>{basic.education.score}</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdLibraryBooks />}
            >
              <h3 className="vertical-timeline-element-title"></h3>
              <h4 className="vertical-timeline-element-subtitle"></h4>
              <p></p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        );
      })}
    </Container>
  );
};

export default ExperiencePage;
