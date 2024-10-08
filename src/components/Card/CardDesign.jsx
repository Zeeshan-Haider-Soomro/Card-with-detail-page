import Button from "../button/Button"
import { useNavigate } from "react-router"

const CardDesign = ({data}) => {
    const{id,name,profession,description,background,profileImage,profileLink} = data
    console.log(useNavigate());
    const navigate = useNavigate();
    
  return (
    <div className="w-[350px] h-[550px] border-2 border-solid border-black text-center rounded-[16px] shadow-md ">
        <img className="w-[350px] h-[150px] object-cover " src={background}/>
        <div>
            <img className="rounded-full border-[5px] border-solid border-[#D9D9D9] p-2 h-[150px] w-[150px] m-auto" src={profileImage} alt="" />
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-[#3D7793]">{profession}</p>
            <p>{description}</p>
            <img className="m-auto p-2" src="../../images/Frame 45.png" alt="" />
            <button onClick={()=>navigate(`/cards/${id}`)}>
            <Button text="View Profile  "/>

            </button>
        </div>
    </div>
  )
}

export default CardDesign