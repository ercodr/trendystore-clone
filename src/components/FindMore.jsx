import ImageOne from "../assets/findmore.jpg";

const FindMore = () => {
  return (
    <section>
      <div className='container mx-auto grid md:grid-cols-2 place-items-center md:gap-6'>
        <img src={ImageOne} alt='' className='w-full lg:m-8 ' />
        <div className='p-4 space-y-4 lg:space-y-6'>
          <h1 className='text-xl md:text-2xl lg:text-5xl font-gumela tracking-widest'>
            Here you will find all trendy african outfits
          </h1>
          <p className='lg:text-xl'>— Kadi Brabus, happy customer</p>
          <button className='border border-slate-500 rounded px-4 py-2 md:text-base hover:bg-slate-900 hover:text-white'>
            Find more on instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindMore;
