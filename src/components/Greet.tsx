type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return <div>hello world {props.name}</div>;
};
