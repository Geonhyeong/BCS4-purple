const App = () => {
  return (
    <div className="bg-black">
      <header className="bg-red-100 h-[4.75rem]">Header</header>
      <div className="bg-blue-100 max-w-screen-2xl mx-auto">
        <div className="bg-green-100 h-[794px]">Welcome</div>
        <div className="mb-16">
          <div className="bg-purple-100 h-[1450px] px-8 py-4">
            <div className="bg-yellow-100 h-[480px]">Get started</div>
            <div className="bg-blue-100 h-[875px] p-4 grid grid-cols-2 justify-items-center gap-8">
              <div className="bg-green-100 w-[688px] h-[392px]">card</div>
              <div className="bg-green-100 w-[688px] h-[392px]">card</div>
              <div className="bg-green-100 w-[688px] h-[392px]">card</div>
              <div className="bg-green-100 w-[688px] h-[392px]">card</div>
            </div>
          </div>
        </div>
        <div className="bg-pink-100 h-[3600px]">
          <div className="h-[720px]">Info Card 1</div>
          <div className="h-[720px]">Info Card 2</div>
          <div className="h-[720px]">Info Card 3</div>
          <div className="h-[720px]">Info Card 4</div>
          <div className="h-[720px]">Info Card 5</div>
        </div>
        <div className="bg-green-100 h-[953px] pb-16">
          <div className="h-[217px] px-8 py-4">Ethereum today</div>
          <div className="bg-blue-100 w-[1440px] h-[640px] mx-8 mt-8 grid grid-cols-2">
            <div className="w-[720px] h-[320px] border border-black">Coin</div>
            <div className="w-[720px] h-[320px] border border-black">Coin</div>
            <div className="w-[720px] h-[320px] border border-black">Coin</div>
            <div className="w-[720px] h-[320px] border border-black">Coin</div>
          </div>
        </div>
        <div className="">Community</div>
        <div className="">Explore</div>
        <div className="">Contribute</div>
      </div>
      <footer className="bg-yellow-100 max-w-screen-2xl mx-auto">footer</footer>
      <button className="bg-blue-500 fixed bottom-0 right-0">따봉</button>
    </div>
  );
};

export default App;
