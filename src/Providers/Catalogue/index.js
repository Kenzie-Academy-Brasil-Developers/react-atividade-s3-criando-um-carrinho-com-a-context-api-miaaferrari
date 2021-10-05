import { createContext, useState } from "react";

//criar contexto
export const CatalogueContext = createContext();

//criar o provider e a lógica dentro dele
export const CatalogueProvider = ({ children }) => {

    const [catalogue, setCatalogue] = useState([
        {name: 'Book', price: 20},
        {name: 'T-shirt', price: 50},
        {name: 'Banana', price: 3}
    ]);

    //lógica add

    const addToCatalogue = (item) => {
        setCatalogue([...catalogue, item]);
    };

    //lógica remove
    const removeFromCatalogue = (item) => {
        const newCatalogue = catalogue.filter((itemOnCatalogue) => itemOnCatalogue.name !== item.name);
        setCatalogue(newCatalogue);
    };

    return (
        <CatalogueContext.Provider value={{ catalogue, addToCatalogue, removeFromCatalogue }}>
            {children}
        </CatalogueContext.Provider>
    );

};