import Store from "../assets/discount_store.jpg";

const Discount = () => {
  return (
    <section className='container mx-auto mt-20 relative h-[30rem] overflow-hidden'>
      <img src={Store} alt='' className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-black/50 p-4 flex flex-col justify-center gap-4 lg:p-16'>
        <h1 className='text-5xl font-gumela font-bold text-white lg:text-7xl'>
          Sales 30%
        </h1>
        <p className='text-white lg:text-xl lg:tracking-wider'>
          We’ve discounted a selection of <br /> fashion trends and must-haves.
        </p>
        <button className='text-white bg-red-700 rounded-full px-6 py-2 lg:px-8 lg:py-3 w-max'>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Discount;
