//Add itens ao carrinho
export const addCart = (produto) => {
  return {
    type: "ADDITEM",
    playload: produto
  };
};

//Remover itens ao carrinho
export const delCart = (product) => {
  return {
    type: "DELITEM",
    playload: product
  };
};
