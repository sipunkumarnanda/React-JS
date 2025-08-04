
const ResturantCard = ({name, cloudinaryImageId, cuisines, sla}) => {
  return (
    <>
     <div className="card">
        <div className="img">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
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
          {name}
        </h2>
        <h3>{cuisines.slice(0, 3).join(", ")}</h3>
        <h4>✳️ {sla.slaString}</h4>
      </div>

    </>
  )
}

export default ResturantCard