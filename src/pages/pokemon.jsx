import { useLoaderData} from "react-router-dom";
import TabBar from "../components/navbar";

export default function Pokemon(){
    const pokemonData = useLoaderData();

    console.log(pokemonData);
    return(
        <>
        <TabBar/>
        <div>
            <p>Name: {pokemonData.name}</p>
            <p>Weight: {pokemonData.weight}</p>
            <img src="hhttps://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png" />
        </div>
        </>
    )
}