type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? `hello world ${props.name} ${messageCount}`
        : "welcome guest"}
    </div>
  );
};
