const App = () => {
  return (
    <>
      <header className="bg-red-100 container h-[76px]">sticky header</header>
      <div className="bg-orange-100  container h-[440px]">banner</div>
      <div className="bg-yellow-100 container h-[354.38px]">welcome</div>
      <div className="bg-green-900 container pb-16">
        <div className="bg-green-100  h-[1451.97px] px-8 py-4">
          <div className="bg-green-300 h-[480px] mt-4 mb-12">get started</div>
          <div className="bg-green-600 h-[875.97px] p-4 grid grid-cols-2 gap-9 ">
            <div className="w-[686px] h-[391.19px] bg-red-100">card</div>
            <div className="w-[686px] h-[391.19px] bg-red-100">card</div>
            <div className="w-[686px] h-[416.78px] bg-red-100">card</div>
            <div className="w-[686px] h-[416.78px] bg-red-100">card</div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 container h-[720px] -mt-[1px] flex flex-col">
        <div className=" bg-blue-300 h-[605.19px] my-auto w-full flex items-center">
          <div className=" bg-yellow-300 w-[752px] pl-8 h-full flex flex-col">
            <div className="bg-blue-600 grow">img</div>
          </div>
          <div className="bg-yellow-100 h-[488.39px] p-24 grow">
            <div className="bg-green-200 h-full">What is Ethereum?</div>
          </div>
        </div>
      </div>
      <div className="bg-red-100 container h-[720px]">특징 2</div>
      <div className="bg-orange-100 container h-[720px]">특징 3</div>
      <div className="bg-yellow-100 container h-[720px]">특징 4</div>
      <div className="bg-green-100 container h-[720px]">특징 5</div>
      <div className="bg-purple-100 container h-[952.8px] pb-16 flex flex-col justify-between">
        <div className="bg-purple-300 h-[216.8px] py-4 px-8 ">
          <div className="bg-yellow-200 h-full">eth today</div>
        </div>
        <div className="bg-purple-600 w-[1440px] h-[640px] mx-auto grid grid-cols-2">
          <div className="bg-green-100 ">card1</div>
          <div className="bg-yellow-100 ">card1</div>
          <div className="bg-red-100 ">card1</div>
          <div className="bg-blue-100 ">card1</div>
        </div>
      </div>
      <div className="bg-green-300 container w-[150.39px] h-[5px] py-16">
        line
      </div>
      <div className="bg-red-200 container h-[591px] px-8 pt-8">
        <div className="bg-blue-300 h-full"> join community</div>
      </div>
      <div className="bg-purple-500 container h-[1358.17px] py-4 px-8">
        <div className="bg-green-100 pb-4 w-[1440px]">
          <div className="bg-green-300 h-[44.8px] mt-12 mb-8 text-[32px]  ">
            explore
          </div>
        </div>
        <div className="bg-yellow-300 h-[476.38px] p-4 grid grid-cols-3 gap-[35px]">
          <div className="bg-red-100">card</div>
          <div className="bg-green-300">card</div>
          <div className="bg-red-100">card</div>
        </div>
        <div className="bg-blue-200 h-[517px] mt-32 mb-16 p-12">
          <div className="bg-green-300 h-full">contribute</div>
        </div>
      </div>

      <footer className="bg-green-200 container h-[851.72px] py-4 px-8">
        <div className="bg-red-100 h-[74.39px]">website last updated</div>
        <div className="bg-yellow-100 h-[745.33px] flex justify-between">
          <div className="bg-blue-100 w-[229.83px]">use ethereum</div>
          <div className="bg-blue-100 w-[262.28px]">learn</div>
          <div className="bg-blue-100 w-[163.67px]">developers</div>
          <div className="bg-blue-100 w-[209.47px]">ecosystem</div>
          <div className="bg-blue-100 w-[120.72px]">enterprise</div>
          <div className="bg-blue-100 w-[138.61px]">about</div>
        </div>
      </footer>
      <div className="bg-pink-100 container ">
        <button className="bg-green-100 w-60 h-12 ml-[1264px]">
          helpful sticky button
        </button>
      </div>
    </>
  );
};

export default App;
