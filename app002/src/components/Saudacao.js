export const Saudacao = ({ nome }) => {
  return <h1>Olá{!!nome ? `, ${nome}` : ""}!</h1>;
};

// return <h1>{!!nome ? `Olá, ${nome}!` : "Ola!"}</h1>;
