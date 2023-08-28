import Portfolio from "./ExperienceItem"

function Experience() {
    return (
        <div class="flex flex-col h-400 text-white w-full justify-center items-center">
            <h1 class=" text-2xl text-cyan-300">
                Professional Experience
            </h1>
            <div >
                <Portfolio/>
            </div>
            <div >
                <Portfolio/>
            </div>
            <div >
                <Portfolio/>
            </div>
        </div>
    )
}

export default Experience