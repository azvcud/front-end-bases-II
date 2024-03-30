import * as React from "react";

interface Product {
  name: string;
  description: string;
}

const products: Product[] = [
  {
    name: "Apples",
    description:
      "Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too.",
  },
  {
    name: "Radishes",
    description:
      "Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.",
  },
  {
    name: "Onions",
    description:
      "Yams. Avocados. Lettuce. Arugula (to some, 'rocket'). Persian cucumbers, in addition to aforementioned 'normal' cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we're vendors of organic produce, but if you asked us to describe what escaroles are...",
  },
];

const Header: React.FC = () => (
  <header className="flex gap-5 self-start pr-11 ml-4 max-w-full w-[1344px] max-md:flex-wrap max-md:pr-5">
    <div className="flex-auto my-auto text-3xl font-medium tracking-tight leading-8 text-lime-800">
      NatamE
    </div>
    <div className="flex gap-5 justify-between text-base leading-5 text-center">
      <div className="my-auto text-black">Tienda</div>
      <div className="justify-center self-start px-6 py-4 font-semibold text-white bg-lime-800 rounded max-md:px-5">
        Carrito (3)
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b68bb1ba5dba82c30e8f3cc1143215fdd2239e3518ad96b9e9f9cb9e7c5f6c?apiKey=f50096866ace49c1858e31fb063ed080&"
        alt="Cart icon"
        className="shrink-0 aspect-[1.85] w-[92px]"
      />
    </div>
  </header>
);

const Hero: React.FC = () => (
  <>
    <h1 className="mt-52 ml-12 text-6xl italic tracking-tighter text-center text-black leading-[77px] w-[1020px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
      We're <span className="italic">farmers</span>,{" "}
      <span className="italic">purveyors</span>, and{" "}
      <span className="italic">eaters</span> of organically grown food.
    </h1>
    <button className="justify-center px-11 py-6 mt-14 ml-12 text-xl font-semibold leading-7 text-white bg-lime-800 rounded-lg max-md:px-5 max-md:mt-10">
      Navegar tienda
    </button>
  </>
);

const ProductSection: React.FC = () => (
  <section className="flex gap-5 max-md:flex-col max-md:gap-0">
    <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/088fa9b33d9fc56c668d09ed66ab78cb9584b5b7a696c9db27bfbda958e9a1ff?apiKey=f50096866ace49c1858e31fb063ed080&"
        alt="Product image"
        className="grow w-full aspect-[0.72] max-md:mt-10 max-md:max-w-full"
      />
    </div>
    <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-sm tracking-normal leading-6 text-black max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d01bba60781767fa4a347d1a546185977505b736570ae12792cdcbf5a7f44b0?apiKey=f50096866ace49c1858e31fb063ed080&"
          alt="Product image"
          className="w-full aspect-[1.61] max-md:max-w-full"
        />
        <div className="mt-5 max-md:max-w-full">
          <span className="font-medium">Central California</span>
          <span className="font-light">
            {" "}
            — The person who grew these was located in Central California and,
            er, hopefully very well-compensated.
          </span>
        </div>
      </div>
    </div>
  </section>
);

const ProductList: React.FC = () => (
  <div className="flex gap-5 mt-40 ml-4 text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    <h2 className="flex-auto self-start text-sm font-semibold tracking-wide leading-6 uppercase">
      WHAT WE BELIEVE
    </h2>
    <div className="flex-auto text-xl leading-8 max-md:max-w-full">
      We believe in produce. Tasty produce. Produce like:
      <br />
      <br />
      {products.map((product, index) => (
        <React.Fragment key={index}>
          {product.name}. {product.description}
          <br />
          <br />
        </React.Fragment>
      ))}
      What are we forgetting?
    </div>
  </div>
);

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col py-8 bg-white">
      <div className="flex flex-col items-center pl-20 w-full max-md:pl-5 max-md:max-w-full">
        <Header />
        <Hero />
      </div>
      <div className="flex flex-col items-start pl-20 mt-40 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="ml-4 max-md:max-w-full">
          <ProductSection />
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default MyComponent;