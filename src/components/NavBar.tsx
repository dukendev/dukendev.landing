import { FaSolidBars } from 'solid-icons/fa'
import { Show, createSignal } from 'solid-js';

function NavBar() {
    const [nav,setNav] = createSignal(false);
    return (
        <nav class="flex justify-between items-center w-full h-20 px-4  text-white bg-white/10 backdrop-filter backdrop-blur">
            <div class=" text-2xl">
                <h1>DukeAndDev</h1>
            </div>
            <ul class="hidden md:flex p-1 cursor-pointer">
             <li class="px-4 hover:scale-150 hover:text-cyan-300 duration-200">Home</li>
                <li class="px-4 hover:scale-150 hover:text-cyan-300 duration-200">Skills</li>

                <li class="px-4 hover:scale-150 hover:text-cyan-300 duration-200">Experience</li>

             <li class="px-4 hover:scale-150 hover:text-cyan-300 duration-200">Projects</li>
             <li class="px-4 hover:scale-150 hover:text-cyan-300 duration-200">About</li>
            </ul>        
            <div class="cursor-pointer pr-4 z-10 text-gray-400 hover:scale-110 duration-100 md:hidden "onclick={() => setNav(!nav())}>
                    <FaSolidBars class=" fill-white hover:fill-cyan-300 hover:scale-150 duration-300 "/>
            </div>
            <Show when={nav()}>
            <ul class=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                 <li class=" px-4 py-6 cursor-pointer capitalize hover:text-cyan-300 hover:scale-110 duration-100 text-gray-300">Home</li>
                <li class=" px-4 py-6 cursor-pointer capitalize hover:text-cyan-300   hover:scale-110 duration-100 text-gray-300">Experience</li>
                <li class=" px-4 py-6 cursor-pointer capitalize hover:text-cyan-300 hover:scale-110 duration-100 text-gray-300">Skills</li>
                <li class=" px-4 py-6 cursor-pointer capitalize hover:text-cyan-300 hover:scale-110 duration-100 text-gray-300">Projects</li>
                <li class=" px-4 py-6 cursor-pointer capitalize hover:text-cyan-300 hover:scale-110 duration-100 text-gray-300">Contact</li>
            </ul>
            </Show>
            
        </nav>
    )
}

export default NavBar


