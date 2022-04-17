import { PersonProps } from "./Person.type";
export const Person = (props: PersonProps) => {
  return (
    <div>
      object type props {props.name.first} {props.name.last}
    </div>
  );
};
