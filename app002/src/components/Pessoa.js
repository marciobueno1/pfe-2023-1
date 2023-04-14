export const Pessoa = ({ pessoa }) => {
  return (
    <div>
      <h2>{pessoa.name}</h2>
      <p>{pessoa.birth_year}</p>
      <hr />
    </div>
  );
};
