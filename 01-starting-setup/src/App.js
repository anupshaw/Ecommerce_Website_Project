import Header from "./component/Layout/Header";
import ProductSummary from "./component/Product/ProductSummary";
import Products from "./component/Product/Products";
import Footer from "./component/Layout/footer";


const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  return (
    <div>
      <Header />
      <ProductSummary />
      <Products category={'Music'} items={productsArr} />
      <Products category={'Merch'}items={productsArr} />
      <Footer Description={'The Genrics'}></Footer>
    </div>
  );
}


export default App;
