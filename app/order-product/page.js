"use client"

import { useRouter } from "next/navigation"



const Orderproduct = () => {
    const router = useRouter();
    const handleClick = () =>{
        console.log("place order")
        router.push("/")
    }
  return (
    <div>
        <p>Order Product</p>
        <button onClick={handleClick} >Place Order</button>
    </div>
  )
}

export default Orderproduct
