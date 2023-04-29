import React from "react";
import interests from "../../assets/interests.png";
import face from "../../assets/face.png";
import Image1 from "../../assets/portfolio/image-1.png";
import Image2 from "../../assets/portfolio/image-2.png";
import Image3 from "../../assets/portfolio/image-3.png";
import Image4 from "../../assets/portfolio/image-4.png";
import Image5 from "../../assets/portfolio/image-5.png";
import Image6 from "../../assets/portfolio/image-6.png";
import Image7 from "../../assets/portfolio/image-7.png";
import Image8 from "../../assets/portfolio/image-8.png";
import Image9 from "../../assets/portfolio/image-9.png";
import Image10 from "../../assets/portfolio/image-10.png";
import Image11 from "../../assets/portfolio/image-11.png";
import Image12 from "../../assets/portfolio/image-12.jpg";
import Image13 from "../../assets/portfolio/image-13.png";
import MyPhoto from "../../assets/my-photo.png";

const Home = () => {
  return (
    <div className="relative font-mono">
      <div className="h-screen bg-background">
        <div className="flex items-center justify-center">
          <img src={face} alt="face" className="h-custom" />
        </div>
      </div>
      <div className="h-96 sm:h-custom bg-aboutme bg-no-repeat bg-contain lg:bg-cover flex justify-center">
        <div className="h-custom flex flex-col sm:max-w-md max-w-xs md:max-w-2xl lg:max-w-4xl">
          <h2 className="text-lg md:text-2xl lg:text-5xl uppercase font-bold pt-0 sm:pt-14 md:pt-24">
            Let me introduce myself
          </h2>
          <div className="flex flex-col sm:gap-8 sm:flex-row">
            <div className="w-80 sm:w-96">
              <p className="font-bold text-xs md:text-xl mt-5 sm:mt-10">
                Hello, I'm Rimma Kubanova and I love drawing and programming!
              </p>
              <p className="font-bold text-xs md:text-xl mt-5">
                Graduate of NIS ChBD, currently a freshman student at NU, who
                studies computer science
              </p>

              <p className="font-bold text-xs md:text-xl mt-5">
                I dream of creating my own application that will be useful to me
                and the people around me!
              </p>
            </div>
            <div className="flex justify-center">
              <img src={MyPhoto} alt="my photo" className="h-32 sm:h-64 lg:h-80"/>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={interests} alt="interests" />
      </div>

      <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-5xl uppercase font-bold">
        Explore my world
      </h2>
      <div className="mt-8 p-8">
        <div className="flex lg:flex-row gap-4 md:flex-col flex-col">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <img src={Image1} alt="gallery item" className="h-full" />
            <img src={Image2} alt="gallery item" className="h-full" />
            <img src={Image3} alt="gallery item" className="h-full" />
            <img src={Image4} alt="gallery item" className="h-full" />
          </div>
          <div className="flex flex-col gap-4 lg:w-1/3">
            <img src={Image5} alt="gallery item" />
            <img src={Image6} alt="gallery item" />
            <img src={Image7} alt="gallery item" />
            <img src={Image8} alt="gallery item" />
          </div>
          <div className="flex flex-col gap-4 lg:w-1/3">
            <img src={Image9} alt="gallery item" className="h-full" />
            <img src={Image10} alt="gallery item" className="h-full" />
            <img src={Image11} alt="gallery item" className="h-full" />
            <img src={Image12} alt="gallery item" className="h-full" />
            <img src={Image13} alt="gallery item" className="h-full" />
          </div>
        </div>
      </div>

      <div className="border-t-2">
        <div className="p-10 flex justify-center items-center flex-col">
          <a
            href="https://instagram.com/kub.rimskii?igshid=YmMyMTA2M2Y="
            className="underline"
          >
            Instagram
          </a>
          <p>special for nFactorial ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
