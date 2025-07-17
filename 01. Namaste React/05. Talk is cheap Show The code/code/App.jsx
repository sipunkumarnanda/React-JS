// This is a comment
/*
 * Multiline comment
 * is jsx Mandatory - No
 * IS ES6 Mandatory - No
 */
{
  /*
            Header
              - Logo 
              - Nav Items(right side)
              - Cart
            Body
             - search Bar
             - RestrauntList
               - RestrauntCard
                  - image
                  - Name
                  - Rating
                  - cusines
                  - Price
            Footer
              - links
              - copyright
              
            */
}

const App = () => {
  const Title = () => {
    return (
      // <h1 id="title" key="h1">Food Villa</h1>
      <a href="/">
        <img
          className="logo"
          src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
          alt=""
        />
      </a>
    );
  };

  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  // const restaurantList = [
  //   {
  //     name: "Go Cool",
  //     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/clhqkimv4gai7rvlzrj0",
  //     cusines: ["Desserts", "Bakery", "Pizzas"],
  //     rating: "4.2"
  //   },
  //   {
  //     name: "Pizza Palace",
  //     img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     cusines: ["Italian", "Fast Food"],
  //     rating: "4.5"
  //   },
  //   {
  //     name: "Burger House",
  //     img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     cusines: ["American", "Snacks"],
  //     rating: "4.1"
  //   },
  //   {
  //     name: "Sushi World",
  //     img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  //     cusines: ["Japanese", "Seafood"],
  //     rating: "4.6"
  //   },
  //   {
  //     name: "Tandoori Tadka",
  //     img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  //     cusines: ["Indian", "BBQ"],
  //     rating: "4.3"
  //   },
  //   {
  //     name: "Green Bowl",
  //     img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  //     cusines: ["Healthy", "Salads"],
  //     rating: "4.4"
  //   },
  //   {
  //     name: "Biryani Express",
  //     img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  //     cusines: ["Indian", "Rice Dishes"],
  //     rating: "4.2"
  //   },
  //   {
  //     name: "Wok & Roll",
  //     img: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  //     cusines: ["Chinese", "Asian"],
  //     rating: "4.0"
  //   },
  //   {
  //     name: "Sweet Tooth",
  //     img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  //     cusines: ["Desserts", "Cakes"],
  //     rating: "4.5"
  //   },
  //   {
  //     name: "The Sandwich Spot",
  //     img: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  //     cusines: ["Fast Food", "Continental"],
  //     rating: "4.1"
  //   },
  //   {
  //     name: "Go Cool",
  //     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/clhqkimv4gai7rvlzrj0",
  //     cusines: ["Desserts", "Bakery", "Pizzas"],
  //     rating: "4.2"
  //   },
  //   {
  //     name: "Pizza Palace",
  //     img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     cusines: ["Italian", "Fast Food"],
  //     rating: "4.5"
  //   },
  //   {
  //     name: "Burger House",
  //     img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     cusines: ["American", "Snacks"],
  //     rating: "4.1"
  //   },
  //   {
  //     name: "Sushi World",
  //     img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  //     cusines: ["Japanese", "Seafood"],
  //     rating: "4.6"
  //   },
  //   {
  //     name: "Tandoori Tadka",
  //     img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  //     cusines: ["Indian", "BBQ"],
  //     rating: "4.3"
  //   },
  //   {
  //     name: "Green Bowl",
  //     img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  //     cusines: ["Healthy", "Salads"],
  //     rating: "4.4"
  //   },
  //   {
  //     name: "Biryani Express",
  //     img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  //     cusines: ["Indian", "Rice Dishes"],
  //     rating: "4.2"
  //   },
  //   {
  //     name: "Wok & Roll",
  //     img: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  //     cusines: ["Chinese", "Asian"],
  //     rating: "4.0"
  //   },
  //   {
  //     name: "Sweet Tooth",
  //     img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  //     cusines: ["Desserts", "Cakes"],
  //     rating: "4.5"
  //   },
  //   {
  //     name: "The Sandwich Spot",
  //     img: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  //     cusines: ["Fast Food", "Continental"],
  //     rating: "4.1"
  //   },
  // ];

  const restaurants = [
    {
      info: {
        id: "546643",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ed8899fa-ff1e-44f4-9fa0-28cdf5f32c10_546643.JPG",
        locality: "Ainthapali Chowk",
        areaName: "Danipali",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.4,
        parentId: "721",
        avgRatingString: "4.4",
        totalRatingsString: "2.1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3.7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-17 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/pizza-hut-ainthapali-chowk-danipali-rest546643",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "169877",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/4ab0f20f-1d23-44e7-b68e-05a156315126_169877.JPG",
        locality: "City Mall Road",
        areaName: "Sambalpur Locality",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.4,
        parentId: "2456",
        avgRatingString: "4.4",
        totalRatingsString: "1.4K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "Ratnesh_Badges/free%20del%20icon.png",
              shortDescription: "Free Delivery",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "Ratnesh_Badges/free%20del%20icon.png",
                    shortDescription: "Free Delivery",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹79",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/dominos-pizza-city-mall-road-sambalpur-locality-rest169877",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "408068",
        name: "Piplani Sweets",
        cloudinaryImageId: "o92swarme0r4kx9ryr0w",
        locality: "Gole Bazar",
        areaName: "Golebazar",
        costForTwo: "₹150 for two",
        cuisines: ["Sweets", "Beverages", "Snacks"],
        avgRating: 4.7,
        veg: true,
        parentId: "158077",
        avgRatingString: "4.7",
        totalRatingsString: "88",
        sla: {
          deliveryTime: 14,
          lastMileTravel: 0.2,
          serviceability: "SERVICEABLE",
          slaString: "10-15 mins",
          lastMileTravelString: "0.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 20:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20RX%20listing%2018px.png",
              description: "bolt!",
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20RX%20listing%2018px.png",
                  },
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/piplani-sweets-gole-bazar-golebazar-rest408068",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "280903",
        name: "Panthanivas Sambalpur",
        cloudinaryImageId: "xhb88ukye6diqzl61gzi",
        locality: "Hans Nagar",
        areaName: "Sakhipara",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian", "Chinese", "Salads"],
        avgRating: 4.4,
        parentId: "154788",
        avgRatingString: "4.4",
        totalRatingsString: "1.6K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 16:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹59",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/panthanivas-sambalpur-hans-nagar-sakhipara-rest280903",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "296411",
        name: "Kedia's Restaurant",
        cloudinaryImageId: "vxcncbvyghot0fx7hucr",
        locality: "Budharaja",
        areaName: "Budharaja",
        costForTwo: "₹400 for two",
        cuisines: ["Biryani", "North Indian", "Chinese"],
        avgRating: 4.4,
        parentId: "116289",
        avgRatingString: "4.4",
        totalRatingsString: "2.2K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 15:15:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/kedias-restaurant-budharaja-rest296411",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "224897",
        name: "Go Cool",
        cloudinaryImageId: "clhqkimv4gai7rvlzrj0",
        locality: "Sahyog Nagar \n",
        areaName: "Sambalpur Town",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Bakery", "Pizzas", "American", "Italian"],
        avgRating: 4.4,
        veg: true,
        parentId: "87834",
        avgRatingString: "4.4",
        totalRatingsString: "428",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/go-cool-sahyog-nagar-sambalpur-town-rest224897",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "471823",
        name: "Swagat Hotel",
        cloudinaryImageId: "vdu7na2s6lhpbqgwggld",
        locality: "VSS Marg",
        areaName: "Sakhipara",
        costForTwo: "₹200 for two",
        cuisines: ["Seafood", "Biryani", "Chinese", "Thalis"],
        avgRating: 4.3,
        parentId: "198854",
        avgRatingString: "4.3",
        totalRatingsString: "1.1K+",
        sla: {
          deliveryTime: 15,
          lastMileTravel: 0.2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 15:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20RX%20listing%2018px.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20RX%20listing%2018px.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/swagat-hotel-vss-marg-sakhipara-rest471823",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "248802",
        name: "The Clay Kitchen",
        cloudinaryImageId: "m36wtxorxhpwhrg1w1mq",
        locality: "Budharaja Main Road",
        areaName: "Budharaja",
        costForTwo: "₹500 for two",
        cuisines: ["Chinese", "Afghani", "Italian"],
        avgRating: 4.4,
        parentId: "207036",
        avgRatingString: "4.4",
        totalRatingsString: "1.8K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 22:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/the-clay-kitchen-main-road-budharaja-rest248802",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "224746",
        name: "Hotel Uduppi",
        cloudinaryImageId: "rj3rz0fzdmvz9neg73v4",
        locality: "Fatak Sambalpur",
        areaName: "Budharaja",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian", "Chinese"],
        avgRating: 4.4,
        veg: true,
        parentId: "103178",
        avgRatingString: "4.4",
        totalRatingsString: "4.0K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 15:15:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/hotel-uduppi-fatak-budharaja-rest224746",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "224894",
        name: "Fresh Bake",
        cloudinaryImageId: "guafiktkzngmbylahjui",
        locality: "Shyam Arcade",
        areaName: "Khetrajpur",
        costForTwo: "₹250 for two",
        cuisines: ["Bakery", "Pizzas", "Snacks"],
        avgRating: 4.3,
        veg: true,
        parentId: "83564",
        avgRatingString: "4.3",
        totalRatingsString: "1.0K+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 4.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "4.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 21:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹49",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/fresh-bake-shyam-arcade-khetrajpur-rest224894",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "485919",
        name: "Dhaba By Kedias",
        cloudinaryImageId: "q9v0jih2ug02cgmcbvye",
        locality: "Bareipali\n",
        areaName: "Panchgochhia",
        costForTwo: "₹450 for two",
        cuisines: ["Biryani"],
        avgRating: 4.2,
        parentId: "488901",
        avgRatingString: "4.2",
        totalRatingsString: "622",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 15:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/dhaba-by-kedias-bareipali-panchgochhia-rest485919",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "224741",
        name: "Desi Tadka",
        cloudinaryImageId: "pmejv57ljcdzi9ajlt6p",
        locality: "Budharaja Road",
        areaName: "Budharaja",
        costForTwo: "₹350 for two",
        cuisines: ["Biryani", "North Indian"],
        avgRating: 4.2,
        parentId: "393990",
        avgRatingString: "4.2",
        totalRatingsString: "1.9K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-16 15:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹109",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9d98dbb1-4ad0-441f-8085-f65d28494742",
      },
      cta: {
        link: "https://www.swiggy.com/city/sambalpur/desi-tadka-road-budharaja-rest224741",
        type: "WEBLINK",
      },
    },
  ];



// Passing Props as object
  // const RestrauntCard = (resturant) =>{
  //   console.log(resturant.resturantData.info);
  //     return (
  //         <div className="card">
  //            <div className="img">
  //              <img
  //           src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resturant.resturantData.info.cloudinaryImageId}`}
  //           alt=""
  //         />
  //            </div>
  //            <h2 style={{
  //           whiteSpace: "nowrap",
  //           overflow: "hidden",
  //           textOverflow: "ellipsis",
  //           maxWidth: "220px", // adjust as needed
  //           display: "block",
  //         }}
  //       >
  //         {resturant.resturantData.info.name}
  //       </h2>
  //             <h3>{resturant.resturantData.info.cuisines.splice(0,3).join(", ")}</h3>
  //             <h4>✳️ {resturant.resturantData.info.sla.slaString} stars</h4>
  //         </div>
  //     )
  // }


  // passing props and deconstruct
  //  const RestrauntCard = ({resturant}) =>{
  //   console.log(resturant);
  //     return (
  //         <div className="card">
  //            <div className="img">
  //              <img
  //           src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resturant.cloudinaryImageId}`}
  //           alt=""
  //         />
  //            </div>
  //            <h2 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",}}>
  //             {resturant.name} </h2>
  //             <h3>{resturant.cuisines.splice(0,3).join(", ")}</h3>
  //             <h4>✳️ {resturant.sla.slaString} stars</h4>
  //         </div>
  //     )
  // }


  // passing props and deconstruct

  //   const RestrauntCard = ({name, cloudinaryImageId, cuisines, sla}) =>{
  //   console.log(name);
  //     return (
  //         <div className="card">
  //            <div className="img">
  //              <img
  //           src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
  //           alt=""
  //         /></div>
  //            <h2 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",}}>
  //             {name} </h2>
  //             <h3>{cuisines.splice(0,3).join(", ")}</h3>
  //             <h4>✳️ {sla.slaString} stars</h4>
  //         </div>
  //     )
  // }

  // by maping to jsx 
   const resturantCards = restaurants.map((resturant) => {
    return (
      <div className="card" key={resturant.info.id}>
        <div className="img">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resturant.info.cloudinaryImageId}`}
            alt=""
          />
        </div>
        <h2
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "220px", // adjust as needed
            display: "block",
          }}
        >
          {resturant.info.name}
        </h2>
        <h3>{resturant.info.cuisines.slice(0, 3).join(", ")}</h3>
        <h4>✳️ {resturant.info.sla.slaString}</h4>
      </div>
    );
  });


  const Body = () => {
    return <div className="resturant-list">

      {/* // Passing props  */}
      {/* <RestrauntCard resturantData = {restaurants[0]}/> */}

      {/* <RestrauntCard resturant = {restaurants[0].info}/> */}

      {/* <RestrauntCard name = {restaurants[0].info.name}/> */}

      {/* <RestrauntCard name = {restaurants[0].info.name} cloudinaryImageId = {restaurants[0].info.cloudinaryImageId} cuisines = {restaurants[0].info.cuisines} slaString = {restaurants[0].info.sla.slaString} /> */}
{/* 
      <RestrauntCard {...restaurants[0].info} />
      <RestrauntCard {...restaurants[1].info} />
      <RestrauntCard {...restaurants[2].info} />
      <RestrauntCard {...restaurants[3].info} />
      <RestrauntCard {...restaurants[4].info} />
      <RestrauntCard {...restaurants[5].info} />
      <RestrauntCard {...restaurants[6].info} />
      <RestrauntCard {...restaurants[7].info} /> */}

      {resturantCards}


      </div>;
  };

  const Footer = () => {
    return <h4>Footer</h4>;
  };

  const AppLayout = () => {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  };

  // -------------------------------------------
  return (
    <>
      <AppLayout />
    </>
  );
};

export default App;
