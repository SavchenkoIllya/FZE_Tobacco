export const ProductCard = () => {
  return (
    <article className={"flex flex-col"}>
      <div className={"border-b-2 border-accent"}>
        <img src={"/delete/Pull.png"} />
        <h4 className={"h2 !text-black !text-xl"}>Pull De Luxe Nano Gold</h4>
        <p>Nano Slim</p>
      </div>
      <div>
        <div className={"flex gap-2"}>
          <img src={"/icons/products/leaf.svg"} />
          <p>American blend</p>
        </div>
        <div className={"flex gap-2"}>
          <img src={"/icons/products/nicotine.svg"} />
          <p>6 mg/cig</p>
        </div>
        <div className={"flex gap-2"}>
          <img src={"/icons/products/tar.svg"} />
          <p>0.5 mg/cig</p>
        </div>
      </div>
    </article>
  );
};
