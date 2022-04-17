import { Name } from "./Person.type";

type PersonListProps = {
  names: Name[];
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
