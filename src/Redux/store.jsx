import { pokemonReducer } from "./Reducer";
import {createStore} from 'redux'

export const store = createStore(pokemonReducer);