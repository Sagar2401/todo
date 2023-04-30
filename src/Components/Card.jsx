import React from "react";

const Header = ({ children, title, count, ...rest }) => {
  return (
    <div className="title " {...rest}>
      <span> {title}</span>
      <span>{count}</span>
    </div>
  );
};

const Body = ({ children, ...rest }) => {
  return (
    <div className="card-body" {...rest}>
      {children}
    </div>
  );
};

const Card = ({ children, mainclass, ...rest }) => {
  return (
    <div className={`box ${mainclass} `} {...rest}>
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;

export default Card;
