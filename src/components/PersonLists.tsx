type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div key={name.first}>
            <div>{name.first}</div>
            <div>{name.last}</div>
          </div>
        );
      })}
    </div>
  );
};
