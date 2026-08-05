import React from "react";
import ReactDOM from "react-dom/client";

// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/a4/11/b6/a411b642b9926d63bee14c9e2e59f6b9.jpg"
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#ffff",
};

const RestaurantCard = (props) => {
  console.log(props);

  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" src={props.img} />
      <h3>{props.resname}</h3>
      <div className="res-rating">
        {/* Rating svg */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="9" fill="url(#paint0)" />

          <path
            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
            fill="white"
          />

          <defs>
            <linearGradient
              id="paint0"
              x1="10"
              y1="1"
              x2="10"
              y2="19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#21973B" />
              <stop offset="1" stopColor="#128540" />
            </linearGradient>
          </defs>
        </svg>
        <strong>{props.rating} . </strong>
        <strong style={{ fontWeight: "bold" }}>{props.time} mins</strong>
      </div>
      <p className="cuisines">{props.cuisines}</p>
      <p className="location">{props.location}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <p>search</p>
      </div>
      <div className="restaurant-container">
        {/* Restaurant cards */}
        <RestaurantCard
          resname="Meghana Foods"
          cuisines="Biryani, Andhra, South Indian"
          location="Koramangala"
          rating="4.5"
          time="35-40"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/12/29/57bebf52-5a58-42e0-af9d-3d872d52de83_2d89d14b-3568-4be1-946d-1d7b0539edae.jpg"
        />

        <RestaurantCard
          resname="KFC"
          cuisines="Fried Chicken, Burgers, Fast Food"
          location="Indiranagar"
          rating="4.3"
          time="25-30"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/2b11b4e1-72fd-4f29-a32a-68a9151e85fa_671928.JPG"
        />

        <RestaurantCard
          resname="Domino's Pizza"
          cuisines="Pizza, Italian, Desserts"
          location="HSR Layout"
          rating="4.4"
          time="30-35"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2026/7/19/4195caa4-e9d6-4003-af43-c3544e831083_7d8237ec-4494-47eb-8f9d-e04988fd9baf.jpg"
        />

        <RestaurantCard
          resname="McDonald's"
          cuisines="Burgers, Fries, Beverages"
          location="BTM Layout"
          rating="4.2"
          time="20-25"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/51a609f3-8277-441c-9dbe-545edab886c9_23678.JPG"
        />

        <RestaurantCard
          resname="Burger King"
          cuisines="Burgers, American, Fast Food"
          location="Marathahalli"
          rating="4.1"
          time="25-30"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg"
        />

        <RestaurantCard
          resname="Paradise Biryani"
          cuisines="Biryani, Mughlai, Kebabs"
          location="Whitefield"
          rating="4.6"
          time="40-45"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/3/26/2b01cd97-e02f-4ed0-a15c-72e2f5f6d77c_701044.JPG"
        />

        <RestaurantCard
          resname="Truffles"
          cuisines="Burgers, Continental, Desserts"
          location="Koramangala"
          rating="4.7"
          time="30-40"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/cd832b6167eb9f88aeb1ccdebf38d942"
        />

        <RestaurantCard
          resname="Empire Restaurant"
          cuisines="North Indian, Chinese, Biryani"
          location="MG Road"
          rating="4.2"
          time="35-45"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bdbomszetaqkuibrfseb"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
