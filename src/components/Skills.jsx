import Container from "../assets/styles/components/Container";
import { Skill, SkillsBox, SkillsSection } from "../assets/styles/pages/home/SkillsSection";
import { useGetThemeSettings } from "../hooks/useGetThemeSettings";

const Skills = () => {

    const {themeSettings} = useGetThemeSettings();

    const skills = [
        {tec: 'HTML', years: 4,},
        {tec: 'CSS', years: 4,},
        {tec: 'Javascript', years: 4,},
        {tec: 'Accessibility', years: 4,},
        {tec: 'React', years: 3,},
        {tec: 'Sass', years: 3,},
    ];

    return (
        <SkillsSection as='section' $theme = {themeSettings}>
            <Container>
                <SkillsBox $theme = {themeSettings}>
                    {
                        skills.map((skill, index) => {   
                            return (
                                <Skill key={index} $theme = {themeSettings}>                          
                                    <h2>{skill.tec}</h2>
                                    <p>{skill.years} Years Experience</p>
                                </Skill>
                            ) 
                        }) 
                    }                   
                </SkillsBox>
            </Container>
        </SkillsSection>
    );
}

export default Skills; 