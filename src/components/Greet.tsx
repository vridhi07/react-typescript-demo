type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `hello world ${props.name} ${props.messageCount}`
        : "welcome guest"}
    </div>
  );
};
