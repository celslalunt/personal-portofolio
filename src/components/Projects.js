import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projimg4 from "../assets/img/project-img4.jpeg";
import projimg5 from "../assets/img/project-img5.jpeg";
import projimg6 from "../assets/img/project-img6.jpeg";
import projimg7 from "../assets/img/project-img7.jpeg";
import projimg8 from "../assets/img/project-img8.png";
import projimg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food",
      description: "Food Street Bangkok",
      imgUrl: projimg4,
    },
    {
      title: "Food",
      description: "Food Street Korea",
      imgUrl: projimg5,
    },
    {
      title: "Skincare",
      description: "Essence dan Serum",
      imgUrl: projimg6,
    },
    {
      title: "Make Up Kit",
      description: "Channel dan Teman-teman",
      imgUrl: projimg7,
    },
    {
      title: "Traveling",
      description: "Around the World",
      imgUrl: projimg8,
    },
    {
      title: "Traveling",
      description: "World",
      imgUrl: projimg9,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects?</h2>
                <p>Project? Wkwkwkw project saya belum banyak di dunia web development bahkan mungkin tidak ada sama sekali. Tapi, saya mempunyai project pribadi yaitu; membuat kulit saya glowing, kuliner makanan setiap ada waktu, dan traveling kemana saja.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
