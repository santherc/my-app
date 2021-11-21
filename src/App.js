import "./App.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Button from "./Button";

function App() {
    const [data, setData] = useState([]);

    const load = () => {
        setTimeout(() => {
            const fetchData = fetch("https://pokeapi.co/api/v2/pokemon/1");
            fetchData.then((res) => res.json()).then((data) => setData(data));
        }, 3000);
    }

    useEffect(() => {

    }, []);
    console.log(data);

    /* data.reduce((acc, item) => (acc += item.quantity), 0)
    // 5
    // 3 + 1 +2 +4 +3 = precio total /  */

    return ( <
        div className = "App" >
        <
        Button func = { load }
        /> <
        Button func = {
            () => console.log(1 + 1) }
        /> {
            data.length === 0 ? ( <
                > cargando... < />
            ) : ( <
                ItemList data = { data.abilities }
                />
            )
        } <
        /div>
    );
}

export default App;