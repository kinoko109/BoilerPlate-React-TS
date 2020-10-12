import React from "react";

type HelloWorldProps = {
  text: string;
};

export const HelloWorld: React.FC<HelloWorldProps> = (props) => {
  const { text } = props;
  return (
    <p>
      {text}
      Hello World!!!!!!!
    </p>
  );
};
