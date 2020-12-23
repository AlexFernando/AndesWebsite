import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`
  color: #000;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  @media(max-width: 768px) {
      font-weight: 200;
  }
`;

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href); 
          window.scrollTo(0, 0);
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);