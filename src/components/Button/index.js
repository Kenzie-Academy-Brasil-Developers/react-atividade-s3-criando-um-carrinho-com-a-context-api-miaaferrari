import { useContext } from "react";

import { CartContext } from '../../Providers/Cart/index';
import { CatalogueContext } from "../../Providers/Catalogue";

export const Button = ({ type, item }) => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const { catalogue, addToCatalogue, removeFromCatalogue } = useContext(CatalogueContext);

    const text = type === 'catalogue' ? 'Add to Cart' : 'Remove from Cart';

    const handleClick = () => {
        if(type === 'catalogue') {
            removeFromCatalogue(item);
            addToCart(item)
        } else {
            removeFromCart(item);
            addToCatalogue(item);
        }
    };

    return <button onClick={handleClick}>{text}</button>
}