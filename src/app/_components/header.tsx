export default function Header() {

    return (
        <header className="flex items-center fixed top-0 px-[50px] py-0 w-full backdrop-filter backdrop-blur-[10px]">
            <nav className="flex justify-between items-center relative w-full">
            <ul>
                <li className='inline [list-style:none] mt-[0] mr-8 mb-[0.5em] ml-[0] p-0 text-[#ff6868]  text-[1rem]'><a href="#me"> 01. Me </a></li>
                <li className='inline [list-style:none] mt-[0] mr-8 mb-[0.5em] ml-[0] p-0 text-[#ff6868]  text-[1rem]'><a href="#about"> 02. About </a></li>
                <li className='inline [list-style:none] mt-[0] mr-8 mb-[0.5em] ml-[0] p-0 text-[#ff6868]  text-[1rem]'><a href="#skill"> 03. Skills </a></li>
            </ul>
            </nav>
      </header>
    );
}