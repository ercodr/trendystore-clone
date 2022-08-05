import AboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section className='container mx-auto mt-10 grid md:grid-cols-2 md:gap-6 place-items-center'>
      <div className='w-full h-[20rem] lg:h-[35rem] bg-slate-900 overflow-hidden'>
        <img
          src={AboutImage}
          alt=''
          className='w-full h-full object-cover bg-slate-900 object-top '
        />
      </div>
      <div className='p-4 space-y-4'>
        <h1 className='font-black font-gumela text-4xl lg:text-6xl'>
          About Us
        </h1>
        <p className='lg:text-lg'> — Truly African</p>
        <p className='md:text-xl'>
          Here at trendy Ghana we design and produce the best african outfit
          tailored to suit our culture, decent, classy, sexy and trendy.
        </p>
      </div>
    </section>
  );
};

export default About;
