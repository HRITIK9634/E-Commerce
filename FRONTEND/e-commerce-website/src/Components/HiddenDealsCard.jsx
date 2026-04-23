import tv from "../assets/tv.jpg"
import HiddenStyle from "./HiddenDeals"
const HiddenDealsCard = () => {
    return (
      <>
        <div className="hidden-deal" style={{height: "300px", width: "200px", boxShadow: "0 8px 16px black", marginLeft: "8px", display: "flex", justifyContent:"center", textAlign: "center", borderRadius: "8px"}}>

            <div className="hidden-deal-card" style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", background: "linear-gradient(135deg, blue, pink)", color: "#fff", borderRadius: "8px"}}>

                <i class="fa-regular fa-heart"></i>

                <img src={tv} alt="" style={{height: "100px", width: "100px"}} />
                <h3 style={{fontSize:"16px"}} >Croma 127cm(50inch) 4K Ultra HD LED Smart...</h3>

                <h4 style={{fontSize: "20px"}}>₹24,9900 <span style={{textDecoration:"line-through", fontSize: "16px"}}>₹40,900.00</span></h4>

                <p style={{fontSize: '20px'}}>★★★★★</p>
            </div>
        </div>
      </>
    )
}

export default HiddenDealsCard


