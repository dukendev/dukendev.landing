

function SkillItem(props : any){

    const imageUrl = props.url
    const name = props.name

    return (
        <div class="flex flex-row h-30 w-30 rounded-full p-8 m-10 shadow  items-center justify-between bg-transparent z-10 group">
            <img class="object-cover h-20 w-20 inline-block group-hover:scale-150 duration-500 rounded-xl" src={imageUrl}/>
            <h1 class=" group-hover:text-cyan-300 duration-500">{name}</h1>
        </div>
    )
}

export default SkillItem