import {
  Container,
  FirstContainer,
  SecondContainer,
  HeroSection,
  Gradient,
  ThirdContainer,
  FourthContainer,
} from "./hero.styles";
import { FirstTab, MobileTab, Robo, SecondTab } from "../../assets/imgs";
import { Button } from "../../ui";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <FirstContainer>
          <img src={Robo} alt="Hero-Robo" />

          <h1>
            AI Smart Recruiter that Assembles <span>Your Dream </span> Team
          </h1>
          <p>
            Unlock your team potential with our AI-driven platform for African
            professionals & recruiters, built for enhancing productivity and
            driving success.
          </p>

          <Gradient>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeHFVJd3tAG2uikIRj5wXMkhRxGl9S5CcjuZUVlHB0Fb9TjeA/viewform?pli=1">
              Join Waitlist
            </Button>
          </Gradient>
        </FirstContainer>

        <SecondContainer>
          <picture>
            <source media="(min-width: 600px)" srcset={FirstTab} />

            <img src={MobileTab} alt="Hero-Mobile" />
          </picture>
        </SecondContainer>

        <ThirdContainer>
          <h2>An AI Smart Recruiter that Builds your Dream Team</h2>
          <h1>Streamline your Hiring Process</h1>
          <p>
            finding the right talent can be a time-consuming and challenging
            process. Skillstats is here to streamline your hiring journey by
            taking the reins and leveraging our expertise to scout for the best
            candidates on your behalf.
          </p>
        </ThirdContainer>

        <FourthContainer>
          <img src={SecondTab} alt="Hero-SecondTab" />

          <Button
            primary
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHFVJd3tAG2uikIRj5wXMkhRxGl9S5CcjuZUVlHB0Fb9TjeA/viewform?pli=1"
          >
            Join Waitlist
          </Button>
        </FourthContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
