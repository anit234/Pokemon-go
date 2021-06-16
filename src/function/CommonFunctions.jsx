export const typeOptions = (data) => {
  let pokemonList = new Set();
  data.forEach((pokemon) => {
    let typeSet = new Set(pokemon.type);
    pokemonList = new Set(
      (function* () {
        yield* pokemonList;
        yield* typeSet;
      })()
    );
  });
  return Array.from(pokemonList).map((p) => {
    return { label: p, value: p };
  });
};

export const weaknessOptions = (data) => {
  let pokemonList = new Set();
  data.forEach((pokemon) => {
    let weaknessSet = new Set(pokemon.weaknesses);
    pokemonList = new Set(
      (function* () {
        yield* pokemonList;
        yield* weaknessSet;
      })()
    );
  });
  return Array.from(pokemonList).map((p) => {
    return { label: p, value: p };
  });
};
