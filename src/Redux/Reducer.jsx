import { FETCH_FAILED, FETCH_REQUEST, SET_CURRENT_PAGE, SET_FILTER_DATA, SET_POKEMON_DATA, SET_POKEMON_DATA_GRID, SET_SORT_OPTION, SET_TOTAL_PAGES, TOGGLE_LIST_GRID_BUTTON } from "./Action"

const initState = {
    data : [],
    currentPage : 1,
    totalPages : 1,
    sortOption : "",
    filterData : "",
    GridData : [],
    toggleGrid : false,
    isLoading : false
   
}

export const pokemonReducer = (state = initState,{type,payload})=>{
    // console.log(payload)
    switch(type){
        case SET_POKEMON_DATA :
            return{
                ...state,
                isLoading : false,
                data : payload
            }
        case SET_CURRENT_PAGE :
            return{
                ...state,
                currentPage : payload
            }
        case SET_TOTAL_PAGES :
            return{
                ...state,
                totalPages : payload
            }
        case SET_SORT_OPTION :
            return{
                ...state,
                sortOption : payload
            }
        case SET_FILTER_DATA :
            return{
                ...state,
                filterData : payload
            }
        case SET_POKEMON_DATA_GRID :
            return{
                ...state,
                GridData : payload
            }
        case TOGGLE_LIST_GRID_BUTTON :
            return{
                ...state,
                toggleGrid : !state.toggleGrid
            }
        case FETCH_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case FETCH_FAILED :
            return{
                ...state,
                isLoading : false
            }
        default :
        return state
    }
}