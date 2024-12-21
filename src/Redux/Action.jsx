export const SET_POKEMON_DATA = "SET_POKEMON_DATA";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_SORT_OPTION = "SET_SORT_OPTION";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
export const SET_FILTER_DATA = "SET_FILTER_DATA";
export const SET_POKEMON_DATA_GRID = "SET_POKEMON_DATA_GRID";
export const TOGGLE_LIST_GRID_BUTTON = "TOGGLE_LIST_GRID_BUTTON";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_FAILED = "FETCH_FAILED";

export const setPokemonData = (payload) => {
  return {
    type: SET_POKEMON_DATA,
    payload,
  };
};

export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

export const setSortOption = (payload) => {
  return {
    type: SET_SORT_OPTION,
    payload,
  };
};

export const setTotalPages = (payload) => {
  return {
    type: SET_TOTAL_PAGES,
    payload,
  };
};

export const setFilterData = (payload) => {
  return {
    type: SET_FILTER_DATA,
    payload,
  };
};

export const setPokemonDataGrid = (payload) => {
  return {
    type: SET_POKEMON_DATA_GRID,
    payload,
  };
};

export const toggleGridButton = () => {
  return {
    type: TOGGLE_LIST_GRID_BUTTON,
  };
};

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchFailed = (payload) => {
  return {
    type: FETCH_FAILED,
    payload,
  };
};
