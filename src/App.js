import './App.css';
import { ProductList } from './components/Product_list';
import { CatalogueProvider } from './Providers/Catalogue';
import { CartProvider } from './Providers/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatalogueProvider>
          <CartProvider>
            <h1>Carrinho de compras</h1>
            <ProductList type='catalogue' />
            <ProductList type='cart' />
          </CartProvider>
        </CatalogueProvider>
      </header>
    </div>
  );
}

export default App;
