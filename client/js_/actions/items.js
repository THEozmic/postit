const itemsHasErrored = (bool) => {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
};

const itemsIsLoading = (bool) => {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
};

const itemsFetchDataSuccess = (items) => {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
};

const itemDeleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id
  };
};

const itemsFetchData = (url) => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(itemsFetchDataSuccess([{ id: 1, label: 'item1' }])))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
};

export { itemsFetchData, itemDeleteItem };

