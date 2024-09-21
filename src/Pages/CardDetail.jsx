import { useParams } from "react-router";
import { userData } from "../utils/constant/CardDetail";
import Button from "../components/button/Button";

const CardDetail = () => {
  const { id } = useParams();

  const singleData = userData.find((item) => {
    return item.id == id;
  });
  console.log(singleData);

  console.log(id);
  const {
    name,
    profession,
    description,
    background,
    profileImage,
    profileLink,
  } = singleData;

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex w-[500px] h-[300px] border-2 border-solid border-red-950">
        <div>
          <img className="w-[250px] h-[300px]" src={profileImage} alt="" />
        </div>
        <div className="text-center mb-5">
          <h1 className="text-2xl">{name}</h1>
          <p className="text-[#D5B0CF]">{profession}</p>
          <p>{description}</p>
          <img src="../../images/Frame 51.png" alt="" />
          <Button text="Buy me a coffee" />
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
