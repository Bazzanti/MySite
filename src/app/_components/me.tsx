import Image from 'next/image'
import mypic from '/public/profilee.jpg'

export default function Me() {

    // column: {
//     {
    //         display: flex;
    //         flex-direction: column;
    //         flex-basis: 100%;
    //         flex: 1;
    //         @media screen and (max-width: $medium) {
    //             flex: 100%;
    //           }
    //     }
    // }
    return (
    <div className="flex flex-row flex-wrap w-full">
        <div className="flex flex-col [flex-basis:100%] flex-[1]">
        <h4 className="m-[0] text-left text-[1.5rem] text-[#eaeaea]">
            Hi, my name is
        </h4>

        {/* <div className={styles.wrappedAnimationText }>
            <span data-content="Michael Bazzanti" aria-hidden="true" className={styles.animationText }>
            </span>
            Michael Bazzanti
        </div>

        <h4 className="m-[0] text-left text-[1.5rem] text-[#eaeaea]">
            and I am a 
        </h4>

        <div className={styles.wrappedAnimationText }>
            <span data-content="Software Developer" aria-hidden="true" className={styles.animationText }>
            </span>
            Software Developer
        </div> */}

        <p className="text-left mx-[0] my-4 leading-normal text-[1.5rem]">
            I love discovering new {' '} 
            <code className="bg-[rgb(255,_255,_255)] text-[rgb(55,_55,_55)] rounded-[5px] p-2 text-[1.1rem] font-[Menlo,_Monaco,_Lucida_Console,_monospace]">technologies</code> and build fantastic {' '} 
            <code className="bg-[rgb(255,_255,_255)] text-[rgb(55,_55,_55)] rounded-[5px] p-2 text-[1.1rem] font-[Menlo,_Monaco,_Lucida_Console,_monospace]">digital</code> experiences.
        </p>
        </div>
        <div className="flex flex-col [flex-basis:100%] flex-[1] ml-[0%] mr-[10%] my-[0] items-center">
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