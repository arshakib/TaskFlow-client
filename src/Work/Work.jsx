import Navber from "../Component/Navber/Navber";
import Screen from "../Component/Screen/Screen";

const Work = () => {
  return (
    <div>
      <div className="grid grid-cols-6">
        <div>
          <Navber></Navber>
        </div>
        <div className="col-span-5 mt-2 mr-3 h-screen">
          <Screen></Screen>
        </div>
      </div>
    </div>
  );
};

export default Work;
