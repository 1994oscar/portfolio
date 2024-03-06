import Container from "../assets/styles/components/Container";
import Button from "../assets/styles/components/Generics/Button";
import { ProjectHeader, ProjectItem, ProjectsBox, ProjectsSection } from "../assets/styles/pages/home/ProjectsSection";
import { useGetThemeSettings } from "../hooks/useGetThemeSettings";

export const Projects = () => {

    const {themeSettings} = useGetThemeSettings();

    const projects = [
        {   image: '../images/projects/project-1.jpg',
            title: 'DESIGN PORTFOLIO',
            tags: ['Html', 'Css']
        },
        {   image: '../images/projects/project-2.jpg',
            title: 'E-LEARNING LANDING PAGE',
            tags: ['Html', 'Css']
        },
        {   image: '../images/projects/project-3.jpg',
            title: 'TODO WEB APP',
            tags: ['Html', 'Css', 'Javascript']
        },
        {   image: '../images/projects/project-4.jpg',
            title: 'ENTERTAINMENT WEB APP',
            tags: ['Html', 'Css', 'Javascript']
        },
        {   image: '../images/projects/project-5.jpg',
            title: 'MEMORY GAME',
            tags: ['Html', 'Css', 'Javascript']
        },
        {   image: '../images/projects/project-6.jpg',
            title: 'ART GALLERY SHOWCASE',
            tags: ['Html', 'Css', 'Javascript']
        }
    ];

    return (
        <ProjectsSection theme={themeSettings}>
            <Container>
                <ProjectHeader theme={themeSettings}>
                    <h1>Projects</h1>

                    <Button theme={themeSettings}>Contact Me</Button>
                </ProjectHeader>
                <ProjectsBox>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectItem key={index} theme={themeSettings}>
                                    <img src={project.image} alt="" />
                                    <h3>{project.title}</h3>

                                    {project.tags.map((tag, index) => {
                                        return (
                                            <span key={index}>{tag}</span>
                                        )
                                    })}
                                </ProjectItem>
                            )
                        })
                    }
                </ProjectsBox>
            </Container>
        </ProjectsSection>
    );
}