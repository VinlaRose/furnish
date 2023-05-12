import "./productCard.css"
export const ProductCard = () => {
return (
    <div className="productCardContainer">
        <div className="imageContainerProductCard">
            <img src="https://img.freepik.com/free-psd/chair-pillow_176382-880.jpg?w=740&t=st=1683889500~exp=1683890100~hmac=64692690315e1d8e632dade4a3f901c230fae7a72cd325be45a6b11c47fb474d" alt=""/>
        </div>
        <p className="productName">ADDE</p>
        <p className="productType">Chair</p>
        <p className="productPrice"> <span>Rs.</span> 800</p>


        <div className="productCardIcons">
  <div className="addTocart">
    <span class="material-symbols-outlined">add_shopping_cart</span>
  </div>

  <div className="addtofav">
    <span class="material-symbols-outlined">heart_plus</span>
  </div>
</div>

    </div>
)
}