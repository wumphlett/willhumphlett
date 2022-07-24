import React from "react";
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      &:before {
        content: '/skl/';
        color: var(--blue);
        font-size: var(--fz-sm);
        line-height: 12px;
        text-shadow: 0 0 3px;
      }
    }
  }
  p {
    font-size: var(--fz-md);
  }
`;

const StyledAscii = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    display: none;
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
  }
`

const About = () => {

  const skills = ['python', 'go', 'c/++', 'bash', 'linux', 'git'];

  return (
    <StyledAboutSection id="about">
      <h2 className="section-heading">About-Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello Hello! My name is Will and I'm a software engineer. Lately I've been focusing most of my work on <em>backend development</em> and <em>internal tooling</em>. I have a passion for writing good code and bettering the lives of my fellow developers.
            </p>
            <p>
              To date I've had the privilege of bouncing between teams at my <em>co-op</em>, performing <em>undergraduate research</em>, doing <em>freelance development</em>, and now <em>interning</em> at a tech company.
            </p>
            <p>
              I have a passion for continually bettering my skillset, so if you have a project you'd like to collaborate on, please don't hesitate to reach out!
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledAscii>
          <div className="wrapper">
            <p className="ascii" alt="Nautilus" title="Nautilus">
              &nbsp;&nbsp;&nbsp;.?7!!!!!7!!~^:.{"\n"}
              &nbsp;&nbsp;&nbsp;.P:     ..:^~!77!:{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;7J            .^7?~{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;??.             .7J^{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!J~.             :J7{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.!J^              J?{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.~P7~^:.          5~{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:!77~^^^~!?7.        ~5{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;!J^.   ::.  ~Y.       .5.{"\n"}
              &nbsp;&nbsp;&nbsp;7?    ^J!~7?  ??       .5.{"\n"}
              &nbsp;&nbsp;:5.    5~  !J  J7       !J{"\n"}
              &nbsp;&nbsp;^5     !J~:~:^??.      :5:{"\n"}
              &nbsp;&nbsp;.5:     :~!!!~:       ~Y^{"\n"}
              &nbsp;&nbsp;&nbsp;^Y^                :??.{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;:??~.         .:~77^{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:~77!!!!!!!77!^.{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..:::::..{"\n"}
            </p>
          </div>
        </StyledAscii>
      </div>
    </StyledAboutSection>
  );
};

export default About;
