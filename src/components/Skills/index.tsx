import skills from "../../data/skills.json"
import Image from "next/image"

const Skills = ()=>{
    return(
        <>
        <div id='#skills' className="w-3/6 p-16 text-black">
        <h1>Skills</h1>
        <div>
            <div className="">
            {skills.map((skill, id) => {
                return(
                    <div key={id}>
                        <div><Image src={skill.imgSrc} width={50} height={50} alt="Icone da tecnologia"></Image></div>
                        <p>{skill.title}</p>
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