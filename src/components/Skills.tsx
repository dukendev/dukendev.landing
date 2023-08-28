import SkillItem from "./SkillItem"

import kotlin from "../assets/techICons/kotlin.svg"
import swift from "../assets/techICons/swift.svg"
import android from "../assets/techICons/android.svg"
import flutter from "../assets/techICons/flutter.svg"
import solid from "../assets/techICons/solidjs.svg"
import tailwind from "../assets/techICons/tailwind.svg"
import typescipt from "../assets/techICons/typescript.svg"
import mongodb from "../assets/techICons/mongodb.svg"
import firebase from "../assets/techICons/firebase.svg"
import aws from "../assets/techICons/aws.svg"
import dart from "../assets/techICons/dart.png"


function Skills() {


    return (
        <div class=" bg-transparent z-10 w-full">

           <div class="bg-transparent z-10 grid grid-flow-row-dense grid-cols-4 grid-rows-3">
                {/* skill group  */}
            <div class=" bg-transparent m-10 px-4 col-span-4">
                <h1 class=" text-2xl text-cyan-300">Technical Skills and Languages</h1>
            </div>

            <div class=" bg-transparent col-span-1">
                <SkillItem url={android} name="Android"/>
            </div>
            <div class="col-span-1">
                <SkillItem url={kotlin} name="Kotlin"/>
            </div>

            <div class="col-span-1">
                <SkillItem url={swift} name="Swift"/>
            </div>
            <div class="col-span-1">
                <SkillItem url={flutter} name="Flutter"/>
            </div>
            <div class="col-span-1">
                <SkillItem url={solid} name="SolidJS"/>
            </div>
            <div class="col-span-1">
                <SkillItem url={typescipt} name="Typescript"/>
            </div>
            <div class="col-span-1">
                <SkillItem url={tailwind} name="Tailwind Css"/>
            </div>
            <div class="col-span-1">
                <SkillItem url={mongodb} name="Mongo DB"/>
            </div>
            <div class="col-span-1">
                <SkillItem url={firebase} name="Firebase"/>
            </div>
            <div class="col-span-1">
                <SkillItem url={aws} name="AWS"/>
            </div>           
            <div class="col-span-1">
                <SkillItem url={dart} name="Dart"/>
            </div>


        </div>
        </div>
    )
}

export default Skills