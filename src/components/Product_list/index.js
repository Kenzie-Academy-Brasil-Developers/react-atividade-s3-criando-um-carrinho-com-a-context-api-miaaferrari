import { Button } from "../Button";
import { useContext } from "react";
import { CatalogueContext } from "../../Providers/Catalogue";
import { CartContext } from "../../Providers/Cart";
import { Container } from "./styles";

export const ProductList = ({ type }) => {

    const { catalogue } = useContext(CatalogueContext);
    const { cart } = useContext(CartContext);

    return (
        <Container>
            <div>
                {type === 'catalogue' &&
                catalogue.map((item, index) => (
                    <p key={index}>
                        {item.name}
                        <Button type={type} item={item} />
                    </p>
                ))}

                {type === 'cart' && 
                cart.map((item, index) => (
                    <p key={index}>
                        {item.name}
                        <Button type={type} item={item} />
                    </p>
                ))}
            </div>
        </Container>
    );
};