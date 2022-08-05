import { Parallax } from "react-parallax";
import HeroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section>
      <Parallax bgImage={HeroImage} strength={200}>
        <div className='h-[35rem] flex flex-col justify-end pb-20 bg-black/70 text-white p-4 md:px-8 lg:px-16'>
          <div className='container mx-auto overflow-hidden'>
            <h1 className='text-6xl lg:text-8xl font-gumela font-bold'>
              TRENDY
            </h1>
            <div className='flex flex-col md:flex-row justify-between mt-6'>
              <button className='bg-white text-slate-900 px-4 py-2 lg:px-6 lg:py-3 rounded-lg w-max'>
                View more products
              </button>
              <p className='mt-6 lg:text-xl'>
                MADE WITH AUTHENTIC AFRICAN ❤ FABRIC
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Hero;
