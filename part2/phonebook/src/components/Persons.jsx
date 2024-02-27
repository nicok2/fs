import Person from "./Person";

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => {
        return (
          <li key={person.name}>
            <Person person={person} />
          </li>
        );
      })}
    </ul>
  );
};

export default Persons;
