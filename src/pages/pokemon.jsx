import { useLoaderData} from "react-router-dom";
import TabBar from "../components/navbar";

export default function Pokemon(){
    const pokemonData = useLoaderData();

    console.log(pokemonData);
    return(
        <>
        <TabBar/>
        <div>
            <center>
            <p>Name: {pokemonData.name}</p>
            <p>Weight: {pokemonData.weight}</p>
            <img src= {pokemonData.sprites.front_default}/>
            </center>
        </div>
        </>
    )
}