import React from 'react'

function Editor() {

    const colors = ['bg-red','bg-cyan','bg-yellow','bg-barbie','bg-slate-200']
  return (
    <div className=" flex flex-col">
      <div className=" h-[1px] bg-black-100 mt-2"> </div>
      <div className=" flex">
        {/* tools */}

        {/* title */}
        <div className=" w-1/4 flex flex-col items-center px-7 pt-10 gap-8">
          <div className=" w-full h-fit text-black-100 bg-white-200 p-5 rounded-xl text-lg">
            <input
              type="text"
              placeholder="Title"
              className="w-full outline-none"
            />
          </div>
          {/* title */}

          {/* colors */}
          <div className=" w-full h-fit text-black-100 bg-white-200 p-5 rounded-xl text-lg">
            <div className=" flex justify-evenly">
              {colors.map((e) => {
                return <div className={`w-8 h-8 ${e} rounded-[5px]`}></div>;
              })}
            </div>
          </div>
          {/* colors */}

          {/* size */}
          <div className=" flex justify-evenly w-full h-fit bg-white-200 p-5 rounded-xl">
            <div className=" cursor-pointer ">SM</div>
            <div className=" cursor-pointer  ">MD</div>
            <div className=" cursor-pointer  ">LG</div>
          </div>
          {/* size */}

          {/* opacity */}
          <div className="w-full h-fit text-black-100 bg-white-200 p-5 rounded-xl text-lg">
            {" "}
            <input
              title="Opacity"
              type="range"
              placeholder="Opacity"
              className="w-full outline-none accent-black-100"
            />
          </div>
          {/* opacity */}

          <div className=" flex justify-center w-full h-fit bg-black-100 text-slate-200 p-5 rounded-xl text-lg cursor-pointer">
            Save Draft
          </div>
        </div>
        {/* tools */}

        <div className=" w-[1px] min-h-screen bg-black-100"> </div>
        <div className=" w-3/4">
          <div className=" flex items-center justify-center h-[700px] bg-white-100 border-2 m-10 rounded-xl">
            <div className=" flex flex-col gap-8 bg-yellow text-black-100 p-12 border-2 rounded-xl w-[360px]">
              <p className='flex items-center justify-center font-semibold text-2xl'>Title</p>
              <div>
                <p>Name</p>
                <div className="">
                  <input
                    type="text"
                    className="outline-none p-3 rounded-md mt-2 w-full "
                  />
                </div>
              </div>
              <div>
                <p>Email</p>
                <div className="">
                  <input
                    type="text"
                    className="outline-none p-3 rounded-md mt-2 w-full"
                  />
                </div>
              </div>
              <div>
                <p>Phone Number</p>
                <div className="">
                  <input
                    type="text"
                    className="outline-none p-3 rounded-md mt-2 w-full"
                  />
                </div>
              </div>
              <div className=" flex bg-black-100 px-5 py-2 rounded-lg items-center justify-center text-white-200">
                Submit
              </div>
              <div className=' absolute bottom-10 right-10 text-white-200 bg-black-100 py-3 px-10 rounded-xl cursor-pointer border-2  m-10'>
                Preview
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor