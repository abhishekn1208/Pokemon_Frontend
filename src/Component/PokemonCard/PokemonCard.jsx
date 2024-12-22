import React, { useEffect, useState } from "react";
import "./pokemon.css";
import axios from "axios";
import "./responsiveCard.css";
import { useDispatch, useSelector } from "react-redux";
import PokemonGrid from "../PokemonGrid/PokemonGrid";
import {
  fetchFailed,
  fetchRequest,
  setCurrentPage,
  setFilterData,
  setPokemonData,
  setPokemonDataGrid,
  setSortOption,
  setTotalPages,
  toggleGridButton,
} from "../../Redux/Action";

const PokemonCard = () => {
  const dispatch = useDispatch();
  const {
    data,
    currentPage,
    totalPages,
    sortOption,
    filterData,
    toggleGrid,
    isLoading,
  } = useSelector((state) => state);

  const fetchPokemonData = async () => {
    try {
      dispatch(fetchRequest());
      const token = localStorage.getItem("token")
      const response = await axios.get(
        `https://pokemon-backend-7-ngbx.onrender.com/pokemon/getpokemon?page=${currentPage}&limit=6&sortQuery=${sortOption}`,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        });
 
      if (response.status === 201) {
 
        dispatch(setPokemonData(response.data.pokemon));
        dispatch(setTotalPages(response.data.totalPages));
      } else if (response.status === 501) {
        dispatch(fetchFailed());
        console.log(error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = (e) => {
    let selectedVal = e.target.value;
    dispatch(setSortOption(selectedVal));
  };

  const pokemonList = Array.isArray(data)
    ? data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filterData.toLowerCase())
      )
    : [];

  useEffect(() => {
    dispatch(setPokemonDataGrid(pokemonList));
  }, [filterData, data, dispatch]);

  useEffect(() => {
    fetchPokemonData();
  }, [currentPage, sortOption]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    console.log(inputVal);
    dispatch(setFilterData(inputVal));
  };

  if (isLoading) return (<><h1>Loading...</h1> <p>will take sometime to load...</p></>);
  return (
    <>
      <div className="sorting">
        <div>
          <div>
            <h1>Pokémon Database</h1>
          </div>
        </div>
        <div id="p-search">
          <label htmlFor="search">Search :</label>
          <input
            type="text"
            placeholder="Search by name..."
            onChange={handleInputChange}
            id="search"
          />
        </div>
        <div>
          <button onClick={() => dispatch(toggleGridButton())} id="gl-btn">
            {toggleGrid ? "List View" : "Grid View"}
          </button>
        </div>
        <div>
          <label htmlFor="sort">
            Sort by : <br />
          </label>
          <select onChange={handleSelectChange} id="sort" value={sortOption}>
            <option value="">Relevance</option>
            <option value="name">Name</option>
            <option value="pokemon_id">ID</option>
          </select>
        </div>
      </div>
      {toggleGrid ? (
        <PokemonGrid />
      ) : (
        <div id="pokemon-card">
          {pokemonList.map((pokemon, index) => {
            return (
              <div className="pokemon" key={index}>
                <div
                  className="pokemon-img"
                  style={{ borderRight: `2px solid ${pokemon.color}` }}
                >
                  <img
                    src={pokemon.sprite}
                    alt="pokemon"
                    style={{ borderRadius: "2rem 0 0 0" }}
                  />
                </div>
                <div
                  className="pokemon-details"
                  style={{
                    backgroundImage: `linear-gradient(224deg, ${pokemon.color}, transparent)`,
                    borderRight: `2px solid ${pokemon.color}`,
                  }}
                >
                  <div className="title-flex">
                    <div className="logo">
                      <img
                        src="https://www.shutterstock.com/shutterstock/photos/2483951385/display_1500/stock-vector-a-red-white-and-gray-pokemon-ball-on-a-black-background-2483951385.jpg"
                        alt=""
                      />
                    </div>{" "}
                    <h3>Details</h3>
                    <div className="logo">
                      <img
                        src="https://www.shutterstock.com/shutterstock/photos/2483951385/display_1500/stock-vector-a-red-white-and-gray-pokemon-ball-on-a-black-background-2483951385.jpg"
                        alt=""
                      />
                    </div>{" "}
                  </div>
                  <div style={{ margin: "10px" }}>
                    <div>
                      <p>
                        <b>Name :</b> <span>{pokemon.name}</span>
                      </p>
                      <p>
                        <b>Pokemon_id :</b> <span>{pokemon.pokemon_id}</span>
                      </p>
                    </div>

                    <div>
                      <b>Types :</b>{" "}
                      {pokemon.types.map((t, i) => {
                        return (
                          <span
                            style={{ backgroundColor: `${pokemon.color}` }}
                            id="types"
                            key={i}
                          >
                            {t}{" "}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div
                  className="pokemon-stats"
                  style={{
                    backgroundImage: `linear-gradient(118deg, ${pokemon.color}, transparent)`,
                    borderRadius: "0 2rem 0 0",
                  }}
                >
                  <div className="title-flex">
                    <div className="logo">
                      <img
                        src="https://www.shutterstock.com/shutterstock/photos/2483951385/display_1500/stock-vector-a-red-white-and-gray-pokemon-ball-on-a-black-background-2483951385.jpg"
                        alt=""
                      />
                    </div>{" "}
                    <h3>Stats</h3>
                    <div className="logo">
                      <img
                        src="https://www.shutterstock.com/shutterstock/photos/2483951385/display_1500/stock-vector-a-red-white-and-gray-pokemon-ball-on-a-black-background-2483951385.jpg"
                        alt=""
                      />
                    </div>{" "}
                  </div>
                  <div id="stats">
                    <div>
                      <p>
                        <b>HP :</b> <span>{pokemon.stats.hp}</span>
                      </p>
                      <p>
                        <b>Attack :</b> <span>{pokemon.stats.attack}</span>
                      </p>
                      <p>
                        <b>Defence :</b> <span>{pokemon.stats.defence}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>Speed :</b>
                        <span>{pokemon.stats.speed}</span>
                      </p>
                      <p>
                        <b>SP_Attack :</b> <span>{pokemon.stats.sp_Atk}</span>
                      </p>
                      <p>
                        <b>Ap_Defence :</b>
                        <span>{pokemon.stats.sp_Def}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PokemonCard;
