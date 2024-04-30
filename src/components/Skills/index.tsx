import skills from "../../data/skills.json"
import Image from "next/image"

const Skills = ()=>{
    return(
        <>
        <div id='skills' className=" text-black">
        <h1 className="text-4xl text-[#592e6d] font-bold oxygen-mono ml-20">&lt;Skills/&gt;</h1>
        <div className="flex flex-row mt-5 p-10">
            <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, id) => {
                return(
                    <div className='skill flex flex-col items-center gap-3'key={id}>
                        <div className="bg-[#dcdcdc] rounded-full flex items-center justify-center m-3 p-3 w-28 h-28 hover:scale-110 transition-transform"><Image src={skill.imgSrc} width={60} height={50} alt="Icone da tecnologia"></Image></div>
                        <p className="font-bold tracking-wide">{skill.title}</p>
                    </div>
                )
            })}
            </div>
        </div>
        </div>
        </>
    )
}

export default Skills;