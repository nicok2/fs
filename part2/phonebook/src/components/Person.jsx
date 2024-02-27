const Person = ({ person, handleDelete }) => {
  return (
    <>
      {person.name} {person.number}
    </>
  );
};

export default Person;
