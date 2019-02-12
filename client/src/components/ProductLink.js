import React from "react";
import {Button} from "reactstrap";

const ProductLink = (props) => {
    return (
        <div>
            <a target="_blank" rel="noreferrer noopener" key={props.id} href={props.item.url}>
                <img src={props.item.image} key={props.id} alt={props.item.item} />
                <div>{props.item.item}</div>
            </a>
            <Button onClick={props.onAddToFavorites}>Favorite</Button>
        </div>
    );
}

export default ProductLink;