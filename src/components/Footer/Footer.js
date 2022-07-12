import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillCodepenCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:201-539-6973">201-539-6973</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:gven.dev@gmail.com">
          gven.dev@gmail.com
        </LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Resume</LinkTitle>
        <LinkItem target="_blank" href="GV Resume.pdf">
          Download
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Learning one project at a time</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/Vent2">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/gerald-v-490040161/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://codepen.io/vent2">
        <AiFillCodepenCircle size="3rem"/>
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
