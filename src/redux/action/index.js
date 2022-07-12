//Add itens ao carrinho
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    playload: product
  };
};

//Remover itens ao carrinho
export const delCart = (product) => {
  return {
    type: "DELITEM",
    playload: product
  };
};
