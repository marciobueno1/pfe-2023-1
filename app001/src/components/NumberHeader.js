const markGreaterOrEquals = 7;

export const NumberHeader = ({ number }) => {
  return (
    <h1>{number >= markGreaterOrEquals ? <mark>{number}</mark> : number}</h1>
  );
};

export const NumberHeader2 = ({ number }) => {
  let content = number;
  if (number >= markGreaterOrEquals) {
    content = <mark>{number}</mark>;
  }
  return <h1>{content}</h1>;
};

export const NumberHeader3 = ({ number }) => {
  if (number >= markGreaterOrEquals) {
    return (
      <h1>
        <mark>{number}</mark>
      </h1>
    );
  }
  return <h1>{number}</h1>;
};
