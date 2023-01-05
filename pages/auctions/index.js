import AuctionsComponent from '../../components/AuctionsComponent';
import { images } from '../../playlist';



export const getStaticProps = async () => {
    return{
      props:{imageList: images}
    }
  }

const Auctions = (imageList) => {
    return (  
        <div className="pt-24 md:pt-36 px-2 bg-[#FFFF]">
        <AuctionsComponent imageList={imageList.imageList}/>
        </div>
    );
}
 
export default Auctions;