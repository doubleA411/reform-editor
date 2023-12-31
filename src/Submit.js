import Form from './Form'
import mm from "./assets/mm.png";


function Submit() {
  return (
    <div>
      <div className=" flex items-center gap-2 justify-center absolute bottom-0 left-0 p-4 rounded-2xl border-2 m-10 backdrop-blur-md">
        <p className=" text-white-200"> Created by Minimal Mind </p>
        <img src={mm} alt="" className=" h-[20px] invert" />
      </div>
      <Form />
    </div>
  );
}

export default Submit