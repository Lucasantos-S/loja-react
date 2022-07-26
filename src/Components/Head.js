import React from "react";

function Head(props) {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);

  });
  return <></>;
}

export default Head;
