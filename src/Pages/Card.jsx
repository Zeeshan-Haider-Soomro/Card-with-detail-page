import CardDesign from "../components/Card/CardDesign"
import { userData } from "../utils/constant/CardDetail"

const Card = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center m-5">
        {userData.map((item,index)=>{
            return(
                <CardDesign key={index} data={item}/>
            )
        })}
    </div>
  )
}

export default Card