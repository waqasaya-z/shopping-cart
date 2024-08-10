import CardList from "./Components/CardList";
import Navbar from "./Components/Navbar";
import ProductContextProvider from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <CardList />
      </ProductContextProvider>
    </>
  );
}

export default App;
