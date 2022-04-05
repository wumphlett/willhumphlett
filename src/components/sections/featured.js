import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledFeaturedSection = styled.section`
  max-width: 900px;
`;

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }
  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 7;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }
  .project-title {
    color: var(--gray);
    font-size: clamp(24px, 5vw, 28px);
    wrap-option: no-wrap;
    a:before {
      content: '/proj/';
      text-shadow: 0 0 5px;
      font-weight: 400;
      color: var(--blue);
      @media (max-width: 1000px) {
        content: '/p/';
      }
    }
    a:hover,
    a:focus,
    a:active {
      color: var(--mint);
      text-shadow: 0 0 5px;
    }
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (max-width: 768px) {
      a {
        position: static;
      }
    }
  }
  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    color: var(--gray);
    font-size: var(--fz-lg);
    @media (max-width: 768px) {
      padding: 20px 0;
    }
    a {
      ${({ theme }) => theme.mixins.bracketLink};
    }
  }
  .project-tech-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    @media (max-width: 1120px) {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }
    z-index: 1;
    grid-gap: 0 10px;
    padding: 0;
    margin: 25px 0 10px;
    overflow: hidden;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      color: var(--gray);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
      text-align: left;
      &:before {
        content: '/tag/';
        text-shadow: 0 0 5px;
        color: var(--blue);
      }
    }
    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    a {
      ${({ theme }) => theme.mixins.bracketLink};
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  .project-image {
    grid-column: 7 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 0;
    @media (max-width: 768px) {
      display: none;
    }
    a {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      background-color: var(--blackish);
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: var(--transition);
        mix-blend-mode: screen;
      }
    }
    .img {
      border-radius: var(--border-radius);
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 700, traceSVG: { color: "#64ffda" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);

  return (
    <StyledFeaturedSection id="projects">
      <h2 className="section-heading">Projects</h2>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover } = frontmatter;

            return (
              <StyledProject key={i}>
                <div className="project-content">
                  <div>
                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          GitHub
                        </a>
                      )}
                      {external && (
                        <a href={external} aria-label="External Link" className="external">
                          Ext.
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <Img fluid={cover.childImageSharp.fluid} alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </StyledFeaturedSection>
  );
};

export default Featured;
