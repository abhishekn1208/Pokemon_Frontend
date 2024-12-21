import React, { useEffect } from "react";
import "./grid.css";
import "./responsiveGrid.css";
import { useSelector } from "react-redux";

const PokemonGrid = () => {
  const { GridData } = useSelector((state) => state);

  const pokemonGridList = Array.isArray(GridData) ? GridData : [];

  return (
    <div id="grid-container">
      {pokemonGridList.map((pokemon, index) => {
        return (
          <div
            id="grid-map"
            style={{ boxShadow: `${pokemon.color} 0px 5px 15px` }}
          >
            {/* details */}
            <div
              id="details"
              style={{
                backgroundImage: `linear-gradient(224deg, ${pokemon.color}, transparent)`,
                borderRight: `2px solid ${pokemon.color}`,
              }}
            >
              <div className="flex-egg">
                <div className="grid-egg">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2483951385/display_1500/stock-vector-a-red-white-and-gray-pokemon-ball-on-a-black-background-2483951385.jpg"
                    alt="pokemon-egg"
                  />
                </div>
                <h3>Details</h3>
                <div className="grid-egg">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2483951385/display_1500/stock-vector-a-red-white-and-gray-pokemon-ball-on-a-black-background-2483951385.jpg"
                    alt="pokemon-egg"
                  />
                </div>
              </div>
              <div id="grid-details">
                <div>
                  <p>
                    <b>Name :</b> <span>{pokemon.name}</span>
                  </p>
                  <p>
                    <b>Pokemon_id :</b> <span>{pokemon.pokemon_id}</span>
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <b>Types :</b>
                  {pokemon.types.map((t, i) => {
                    return (
                      <div key={i}>
                        <span
                          id="types"
                          style={{
                            backgroundColor: `${pokemon.color}`,
                            boxShadow: `${pokemon.color} 0px 5px 15px`,
                          }}
                        >
                          {t}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* pokemon-img */}
            <div className="p-grid-img">
              <img
                src={pokemon.sprite}
                alt="pokemon"
                style={{ boxShadow: `${pokemon.color} 0px 5px 15px` }}
              />
            </div>

            {/* stats */}
            <div
              id="grid-stats"
              style={{
                backgroundImage: `linear-gradient(224deg, ${pokemon.color}, transparent)`,
                borderRight: `2px solid ${pokemon.color}`,
              }}
            >
              <div className="flex-egg">
                <div className="grid-egg">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2483951385/display_1500/stock-vector-a-red-white-and-gray-pokemon-ball-on-a-black-background-2483951385.jpg"
                    alt="pokemon-egg"
                  />
                </div>
                <h3>Stats</h3>
                <div className="grid-egg">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2483951385/display_1500/stock-vector-a-red-white-and-gray-pokemon-ball-on-a-black-background-2483951385.jpg"
                    alt="pokemon-egg"
                  />
                </div>
              </div>
              <div id="stats-flex">
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
  );
};

export default PokemonGrid;
