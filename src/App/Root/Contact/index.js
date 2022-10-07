import imageEmail from "assets/icons/socials/email.png";
import imageGithub from "assets/icons/socials/github.png";
import imageWebsite from "assets/icons/socials/globe.png";
import imageHackerRank from "assets/icons/socials/hackerrank.png";
import imageLinkedin from "assets/icons/socials/linkedin.png";
import imagePhone from "assets/icons/socials/phone.png";
import Section from "components/Section";
import styled from "styled-components";

import Item from "./Item";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 40px;
`;

const items = [
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/bernatfogarasi",
    src: imageLinkedin,
    displayHref: "linkedin.com/in/bernatfogarasi",
    blank: true,
  },
  {
    text: "Email",
    href: "mailto:fogarasi.bernat@gmail.com",
    src: imageEmail,
    displayHref: "fogarasi.bernat@gmail.com",
    blank: true,
  },
  {
    text: "Phone",
    href: "tel:+353-83-088-5953",
    src: imagePhone,
    displayHref: "+353-83-088-5953",
    blank: false,
  },
  {
    text: "GitHub",
    href: "https://github.com/bernatfogarasi",
    src: imageGithub,
    displayHref: "github.com/bernatfogarasi",
    blank: true,
  },
  {
    text: "HackerRank",
    href: "https://hackerrank.com/bernatfogarasi",
    src: imageHackerRank,
    displayHref: "hackerrank.com/bernatfogarasi",
    blank: true,
  },
  {
    text: "This Website",
    href: "https://bernatfogarasi.com",
    src: imageWebsite,
    displayHref: "bernatfogarasi.com",
    blank: true,
  },
];

const Contact = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Title>Contact</Title>
      <Items>
        {items.map((item) => (
          <Item key={item.text} item={item} />
        ))}
      </Items>
    </Wrapper>
  );
};

export default Contact;
