import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  

  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
       Hi, I'm Gerald
       <br/>
        Web Developer
      </SectionTitle>
      <SectionText>
        I build new projects in the pursuit of expanding my knowledge.
      </SectionText>
      <Button onClick={() => window.location = "mailto:gven.dev@gmail.com"} >Get In Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;