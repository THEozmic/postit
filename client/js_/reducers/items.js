const itemsHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
};

const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
};

const items = (state = [], action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;
    case 'DELETE_ITEM':
      return [];
    default:
      return state;
  }
};

// const itemIsDeleted = (state = [], { type, id }) => {
//   switch (type) {
//     case 'DELETE_ITEM':
//       return [];
//     default:
//       return state;
//   }
// };
export { itemsHasErrored, itemsIsLoading, items };
