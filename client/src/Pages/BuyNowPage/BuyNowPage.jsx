import React from 'react'
import CartCard from '../../Component/Card/CartCard'
import ShippingCard from '../../Component/Card/ShippingCard'
import Navbars from '../../Component/Navbar/Index'

function BuyNowPage() {
  return (
   <>
   <Navbars />
<div className="container">
    <div className="row">
        <div className="col">
<ShippingCard />
        </div>
        <div className="col">
<CartCard />
        </div>
    </div>
</div>
   </>
  )
}

export default BuyNowPage