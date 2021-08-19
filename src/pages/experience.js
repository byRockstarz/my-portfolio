import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "reactstrap";
import StyledExp from "../styles/home";

const ExperiencePage = () => {
  return (
    <Container fluid id="sectionexp">
      <StyledExp>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "black",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
          >
            <h3 className="vertical-timeline-element-title">
              ตำแหน่งงานปัจจุบัน
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              สถานที่ทำงานปัจจุบัน
            </h4>
            <p>รายละเอียดของงาน</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
          >
            <h3 className="vertical-timeline-element-title">
              ตำแหน่งงานปัจจุบัน
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              สถานที่ทำงานปัจจุบัน
            </h4>
            <p>รายละเอียดของงาน</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
          >
            <h3 className="vertical-timeline-element-title">
              Study Computer Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Khon Kaen , Thailand
            </h4>
            <p>Rajamangala University Of Technology Isan Khon Kaen</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </StyledExp>
    </Container>
  );
};

export default ExperiencePage;
