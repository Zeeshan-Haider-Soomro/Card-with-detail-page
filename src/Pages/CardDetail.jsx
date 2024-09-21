import { useParams } from "react-router"
import { userData } from "../utils/constant/CardDetail";


const CardDetail = () => {
    const {id} = useParams()

    const singleData = userData.find((item)=>{
        return(
            item.id == id
        )
    })
    console.log(singleData);
    

    console.log(id);
    const{name,profession,description,background,profileImage,profileLink} = singleData
    
  return (
    <div>
        {name}
    </div>
  )
}

export default CardDetail