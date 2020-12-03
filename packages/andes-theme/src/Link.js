import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`
  color: #000;
  font-weight: 200;
  text-decoration: none;
  cursor: pointer;
`;

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href); 
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);