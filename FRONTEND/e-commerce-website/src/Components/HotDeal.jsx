import HotDealCard from "./HotDealCard"
const HotDeal = () => {
    return (
        <>
            <h2>What's Hot</h2>
            <div  style={{display: "flex"}}>
                <HotDealCard />
                <HotDealCard />
                <HotDealCard />
                <HotDealCard />
            </div>
        </>
    )
}

export default HotDeal