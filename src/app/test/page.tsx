
import { auth } from "@clerk/nextjs/server"

 const  Page = async()=>{
   const {getToken} = await auth()
    const token = await getToken()
    const productRes  = await fetch('http://localhost:8000/test',{
        headers:{
            Authorization : `Bearer ${token}`
        }
    })
    const productData = await productRes.json()
    console.log(productData)

    const res  = await fetch('http://localhost:8001/test',{
        headers:{
            Authorization : `Bearer ${token}`
        }
    })
    const data = await res.json()
    console.log(data)


    const paymentRes  = await fetch('http://localhost:8002/test',{
        headers:{
            Authorization : `Bearer ${token}`
        }
    })
    const paymentData = await paymentRes.json()

    console.log(paymentData)




    return <div className="">test page</div>
 }

 export default Page