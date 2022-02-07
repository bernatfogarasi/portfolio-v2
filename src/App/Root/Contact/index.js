import Section from "components/Section";
import styled from "styled-components";
import Item from "./Item";
import imageGithub from "assets/icons/socials/github.png";
import imageLinkedin from "assets/icons/socials/linkedin.png";
import imageEmail from "assets/icons/socials/email.png";
import imageWebsite from "assets/icons/socials/globe.png";
import imagePhone from "assets/icons/socials/phone.png";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const Head = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 40px;
`;

const items = [
  {
    text: "GitHub",
    href: "https://github.com/bernatfogarasi",
    src: imageGithub,
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/bernatfogarasi",
    src: imageLinkedin,
  },
  {
    text: "Email",
    href: "mailto:fogarasi.bernat@gmail.com",
    src: imageEmail,
  },
  {
    text: "Phone",
    href: "tel:+353-83-088-5953",
    src: imagePhone,
  },
  {
    text: "This Website",
    href: "https://bernatfogarasi.vercel.app",
    src: imageWebsite,
  },
];

const Contact = ({ className, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      <Title>Contact</Title>
      <Items>
        {items.map((item) => (
          <Item key={item.text} href={item.href} src={item.src}>
            {item.text}
          </Item>
        ))}
      </Items>
    </Wrapper>
  );
};

export default Contact;
