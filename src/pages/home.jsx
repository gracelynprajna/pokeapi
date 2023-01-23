import React from "react";
import TabBar from "../components/navbar";

const HomeStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    color: "green"
}


export default function Home(){
    return(
        <>
        <TabBar/>
        <h1 style={HomeStyle}>WELCOME!!!</h1>
        <center><img src="./pokemongif.gif"/></center>
        </>
    )
    }