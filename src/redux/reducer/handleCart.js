const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.playload;

  switch (action.type) {
    case "ADDITEM":
      //verificar se produto existe
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        //adicionar a quantidade
        return state.map((x) =>
          x.id === product.id
            ? {
                ...x,
                qty: x.qty + 1
              }
            : x
        );
      } else {
        const product = action.playload;
        return [
          ...state,
          {
            ...product,
            qty: 1
          }
        ];
      }
      break;
    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id
            ? {
                ...x,
                qty: x.qty - 1
              }
            : x
        );
      }
      break;
    default:
      return state;
      break;
  }
};
