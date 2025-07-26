import Background from "../assets/background.webp";
function Home() {
  return (
    <div
      className="text-white h-full flex flex-col p-4"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" w-full lg:w-[70%] lg:pl-40 text-yellow-400 text-center lg:text-left">
        <h1 className="text-4xl font-semibold mt-32 mb-6 lg:text-6xl lg:pt-20">
          All the Stories Worth Watching
        </h1>
        <h2 className="text-2xl font-light  lg:w-[60%] lg:text-4xl ">
          From blockbusters to binge worthy series, dive into the world of
          entertainment.
        </h2>
      </div>
    </div>
  );
}

export default Home;
