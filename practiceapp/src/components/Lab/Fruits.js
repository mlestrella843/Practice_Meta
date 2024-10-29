import React from "react";

function Fruits({fruits}) {
    return (
        <ul>
            {fruits.map((fruit) => (
                <h3 key={fruit.id}>{fruit.fruitName}</h3>
            ))}
        </ul>
    )
}

export default Fruits