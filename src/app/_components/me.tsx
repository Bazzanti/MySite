import Image from "next/image";
import mypic from "/public/profilee.jpg";

export default function Me() {
  return (
    <div className="flex flex-row flex-wrap w-full">
      <div className="flex flex-col [flex-basis:50%] flex-[1]">
        <h4 className="m-[0] text-left text-[1.5rem] text-[#eaeaea]">
          Hi, I&#39;m
        </h4>

        <div className=" leading-[1.15] text-[4rem] font-bold relative inline-block text-[$title-light-color] overflow-hidden ml-[1%] mr-0 my-5">
          <span
            data-content="Michael Bazzanti"
            aria-hidden="true"
            className=""
          >Michael Bazzanti</span>
          
        </div>

        <h4 className="m-[0] text-left text-[1.5rem] text-[#eaeaea]">
          and I am a
        </h4>

        <div className=" leading-[1.15] text-[4rem] font-bold relative inline-block text-[$title-light-color] overflow-hidden ml-[1%] mr-0 my-5">
          <span
            data-content="Software Developer"
            aria-hidden="true"
            className=""
          >Software Developer</span>
          
        </div>
        {/* 
        <div className={styles.wrappedAnimationText }>
            <span data-content="Software Developer" aria-hidden="true" className={styles.animationText }>
            </span>
            Software Developer
        </div> */}
      </div>
      <div className="flex flex-col [flex-basis:40%] flex-[1] items-center">
        <div className="w-1/2 rounded-[50%] overflow-hidden">
          <Image
            src={mypic}
            alt="Picture of the author"
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
