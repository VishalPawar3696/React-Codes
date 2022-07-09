import Styles from "../Components/RestaurantCard.module.css";

const OrderButtom = () => (
  <button className={Styles.OrderButton}>Order Online </button>
);

const Image = ({ src, name, width, height }) => (
  <img
    style={{ objectFit: "cover" }}
    src={src}
    width={width}
    height={height}
    name={name}
    border-radi
  />
);

const Details = ({
  title,
  cuisine,
  time,
  minPrice,
  priceForTwo,
  cash = false,
  card = false,
  upi = false
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{cuisine.join(", ")}</div>
      <div>Cost ₹ {priceForTwo} for two</div>
      <div>
        min ₹ {minPrice} . Up To {time} min
      </div>
      <div>
        Accepts {cash && "Cash"} {upi && "Upi"} {card & "card"} payments
      </div>
    </div>
  );
};
export default function RestaurantCard({
  name,
  id,
  ratings,
  votes,
  reviews,
  costForTwo,
  minOrder
}) {
  return (
    <div className={Styles.App}>
      <div className={Styles.container}>
        <div>
          <Image
            src={`https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?t=st=1657156480~exp=1657157080~hmac=f3ad119670d5e1118096761aba000311857415d60dc3f96dc973ba04f6befdb0&w=1060`}
            width={`100px`}
            height={"200px"}
          />
        </div>
        <div>
          <Details
            className={Styles.details}
            title={name}
            cuisine={["Asian", "South", "Indian"]}
            priceForTwo={costForTwo}
            minPrice={50}
            time={"20"}
            cash={true}
            card={true}
            upi={true}
          />
        </div>
        <div>
          Ratings:{ratings}
          <p>votes:{votes}</p>
          <p>Reviews:{reviews}</p>
        </div>
      </div>
      <div className={Styles.footer}>
        <OrderButtom />
      </div>
    </div>
  );
}
