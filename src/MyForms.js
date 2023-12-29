
import FormData from './FormData';

function MyForms() {
  return (
    <>
      <div className=" flex flex-col ">
        <div className="h-[1px] bg-black-100 mt-2"></div>
        <div className="flex flex-wrap gap-10 m-10">
          <FormData />
        </div>
      </div>
    </>
  );
}

export default MyForms