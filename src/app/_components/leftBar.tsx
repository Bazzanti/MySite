import {AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';

export default function LeftBar() {

    return (
      //  <div orientation="left">
      <div >  
          <ul className="w-[40px] fixed bottom-0 left-[20px] right-auto z-10 [counter-reset:list] ml-[1em] mr-[1em] my-[1em] p-0 ">
            <li className="text-[24px] text-center"> 
              <a href="mailto:michael6993@msn.com">  <AiOutlineMail /> </a>
            </li>
            <li className="text-[24px] text-center"> 
              <a href="https://www.linkedin.com/in/michael-bazzanti-589221129/"> <AiOutlineLinkedin /> </a>
            </li>
            <li className="text-[24px] text-center"> 
              <a href="https://github.com/Bazzanti"> <AiOutlineGithub /> </a>
            </li>
          </ul>
        </div>
    );
}