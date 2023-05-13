import { useContext } from "react"
import CategoryReel from "../../components/categoryReel/categoryReel"
import { ProductCard } from "../../components/productCard/productCard"
import "./explore.css"
import { DataContext } from "../../context/DataContext"

export const Explore = () => {
    const {name} = useContext(DataContext)
    return(
        <div className="exploreContainer">
            <img className="exploreFrontImage" src="https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530_960_720.jpg" alt =" " />

            <div className="categoryReelContainer">
                <CategoryReel/>
            </div>

            <div className="exploreMain">
                <div className="exploreLeft">left: {name}</div>
                <div className="exploreRight">right</div>
            </div>
            
        </div>
        
    )
}