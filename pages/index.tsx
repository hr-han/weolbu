import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      {/* <div className="flex flex-col space-y-2 p-5">
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
          sfsfsdflksjfklsdjklfjsdkljfklsdjlfjdlkf
        </p>
        <input
          type="file"
          className="file:cursor-pointer file:hover:text-purple-400 file:hover:border-purple-400 file:hover:border file:hover:bg-white file:transition-colors file:border-0 file:rounded-xl file:text-white file:bg-purple-400"
        />
      </div>

      <div className="flex flex-col space-y-2 p-5 ">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="cursor-pointer">
            What is my favorit food?
          </summary>
          <ul className="space-y-2 list-disc list-inside marker:text-yellow-500 font-semibold">
            <li>떡볶이</li>
            <li>감자</li>
            <li>파스타</li>
          </ul>
        </details>
      </div> */}

      <div className="dark bg-gray-300 xl:place-content-center py-20 px-5 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
        <div className="bg-white dark:bg-black flex flex-col justify-between p-6 rounded-3xl shadow-xl">
          <span className="font-semibold text-3xl dark:text-white">
            Select Item
          </span>
          <ul>
            {[
              "Grey Chair",
              "Tooly Table",
              "test",
              "",
              "sofa",
            ].map((name, i) => (
              <div
                key={i}
                className="flex justify-between my-2  odd:bg-blue-50 even:bg-yellow-200 empty:hidden"
              >
                <span className="text-gray-500 dark:text-gray-100">
                  {name}
                </span>
                <span className="font-semibold dark:text-white">
                  $500
                </span>
              </div>
            ))}
          </ul>
          <div className="flex justify-between  mt-2 pt-2 border-t-2 border-dashed">
            <span>Total</span>
            <span className="font-semibold dark:text-white">
              $2000
            </span>
          </div>
          <button
            className="flex justify-center mt-5 bg-blue-500 dark:bg-black dark:border dark:border-white text-white p-3 rounded-xl w-3/4 mx-auto font-semibold 
          hover:bg-teal-500 dark:hover:bg-black hover:text-black active:bg-yellow-500 focus:text-red-500"
          >
            Checkout
          </button>
        </div>
        <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
          <div className="bg-blue-500 landscape:bg-red-400 portrait:bg-indigo-600 p-6 pb-14 lg:pb-28 xl:pb-48">
            <span className="text-white text-2xl">
              Profile
            </span>
          </div>
          <div className="bg-white rounded-3xl p-6 relative -top-5">
            <div className="flex relative -top-16 items-end justify-between">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">
                  Orders
                </span>
                <span className="font-semibold">340</span>
              </div>
              <div className="h-24 w-24 bg-sky-200 rounded-full group-hover:bg-red-300 transition-colors" />
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">
                  Spent
                </span>
                <span className="font-semibold">
                  $2,310
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center relative -mt-10 -mb-5">
              <span className="text-lg font-medium">
                Tony Malloy
              </span>
              <span className="text-sm text-gray-500">
                New York, USA
              </span>
            </div>
          </div>
        </div>
        {/* <div className="bg-white p-5 rounded-3xl shadow-xl">
          <div className="flex justify-between mb-5">
            <div className="font-semibold text-2xl">
              Categories
            </div>
            <div className="font-semibold text-3xl text-gray-400 relative -top-2">
              ...
            </div>
          </div>
          <div className="flex justify-between relative">
            <div className="bg-blue-500 px-6 py-2 rounded-xl flex justify-center items-center font-semibold text-white">
              Chair
            </div>
            <div className="bg-gray-300 px-6 py-2 rounded-xl flex justify-center items-center font-semibold">
              Table
            </div>
            <div className="bg-gray-300 px-6 py-2 rounded-xl flex justify-center items-center font-semibold">
              Cupboard
            </div>
            <div className="bg-gray-300 px-6 py-2 rounded-xl flex justify-center items-center font-semibold">
              Sofa
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl flex justify-between">
          <div className="flex">
            <div className="bg-gray-300 px-4 py-2 rounded-xl flex justify-center items-center font-semibold">
              -
            </div>
            <div className="px-2 flex justify-center items-center font-semibold">
              1
            </div>
            <div className="bg-gray-300 px-4 py-2 rounded-xl flex justify-center items-center font-semibold">
              +
            </div>
          </div>
          <div className="bg-blue-500 px-6 py-2 rounded-xl flex justify-center items-center font-semibold text-white">
            Add to Cart
          </div>
        </div> */}
        <div className="bg-white p-10 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1">
          <div className="flex justify-between items-center mb-5">
            <span>←</span>
            <div className="space-x-3">
              <span>⭐4.9</span>
              <span className="shadow-xl p-2 rounded-md">
                ❤
              </span>
            </div>
          </div>
          <div className="bg-zinc-400 h-72 mb-5" />
          <div className="flex flex-col">
            <span className="font-medium text-xl">
              Swoon Lounge
            </span>
            <span className="text-xs text-gray-500">
              Chair
            </span>
            <div className="mt-3 mb-5 flex justify-between items-center">
              <div className="space-x-2">
                <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-300 transition"></button>
                <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-300 transition"></button>
                <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-300 transition"></button>
              </div>
              <div className="flex items-center space-x-5">
                <button className="p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-8 text-lx text-gray-500 rounded-lg">
                  -
                </button>
                <span>1</span>
                <button className="p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-8 text-lx text-gray-500 rounded-lg">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-2xl">
                $460
              </span>
              <button className="bg-blue-500 text-center text-white text-sm rounded-lg px-8 py-2">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* <form className="flex flex-col space-y-2 p-5 bg-white rounded-2xl shadow-2xl">
          <input
            type="text"
            required
            placeholder="User Name"
            className="border p-1 border-gray-400 rounded-md peer"
          ></input>
          <span className="hidden  peer-invalid:block peer-invalid:text-red-500">
            This input is invalid
          </span>
          <span className="hidden  peer-valid:block peer-valid:text-teal-500">
            This input is Correct!
          </span>
          <span className="hidden  peer-hover:block peer-hover:text-sky-500">
            Hello!!!
          </span>
          <input
            type="submit"
            value="Login"
            className="bg-white"
          ></input>
        </form> */}
      </div>
    </>
  );
};

export default Home;
