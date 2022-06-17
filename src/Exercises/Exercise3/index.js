// faça uma chamada rick and morty api e resgate informações do seguintes personagens (Rick Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith)
// e ajustar os dados para que fiquem igual a saida de exemplo.
// API aberta não precisa de token
// Documentação
// https://rickandmortyapi.com/documentation/#rest

// Ex de Saida: [
//   {
//     nome: 'Rick Sanchez',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Morty Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Summer Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Beth Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Jerry Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//     especie: 'Humano'
//   }
// ]

async function getRicAndMortyCharacters() {
  function translator(string) {
    switch (string) {
      case "Human":
        return "Humano";
      case "Male":
        return "Homem";
      case "Female":
        return "Mulher";
      default:
        return string;
    }
  }
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const { results } = await res.json();
    const targetNames = [
      "Rick Sanchez",
      "Morty Smith",
      "Summer Smith",
      "Beth Smith",
      "Jerry Smith",
    ];
    const filteredNames = results.filter((user) =>
      targetNames.includes(user.name)
    );

    const mappedResults = filteredNames.map((character) => {
      return {
        nome: character.name,
        avatar: character.image,
        genero: translator(character.gender),
        especie: translator(character.species),
      };
    });

    return mappedResults;
  } catch (err) {
    return err.message;
  }
}

module.exports = getRicAndMortyCharacters;
