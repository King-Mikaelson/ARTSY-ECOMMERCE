import Hero from "../../components/Hero"
import Product from "../../components/Product";

// export const getStaticProps = async () => {
//   const res = await fetch("https://fakestoreapi.com/products")
//   const data = await  res.json();

//   return{
//     props:{content : data}
//   }
// }


const marketplace = () =>  {


      
  return (
    <div className="pt-24 md:pt-48 bg-[#FFFF]">
   <Product />
    </div>
  )
}

export default  marketplace
