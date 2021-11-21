import React from "react";
import Item from "./Item";

export default function ItemList({ data }) {
    return ( <
        div > {
            data.map((element) => ( <
                Item key = { element.slot }
                name = { element.ability.name }
                />
            ))
        } <
        /div>
    );
}