import { createRef, useState } from "react"
import { stringToFormalCase } from "../../../util/type_helpers"
import TextInput from './TextInput'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import TextArea from "./TextArea";

const recipeModalData = {
    "Add some basic details first!": {
        title: {
            name: 'title',
            type: 'text',
        },
        description: {
            name: 'description',
            type: 'text',
        }
    },
    "Next, write down the ingredients!": {
        ingredients: {
            name: 'ingredients',
            type: 'text',
        }
    },
    "Now, write down the instructions!": {
        instructions: {
            name: 'instructions',
            type: 'text',
        }
    },
    "Finally, add some finishing touches!": {
        courses: {
            name: 'courses',
            type: 'dropdown',
            options: []
        },
        cuisine: {
            name: 'cuisine',
            type: 'text',
        },
        diet_types: {
            name: 'diet_types',
            type: 'text',
        },
    }
}


const isClickInsideRectangle = (e, element) => {
    const r = element.getBoundingClientRect();

    return (
        e.clientX > r.left &&
        e.clientX < r.right &&
        e.clientY > r.top &&
        e.clientY < r.bottom
    );
};

let totalRecipe = {}

export default function RecipeModal({ onClose, isOpened, title }) {
    const [recipe, setRecipe] = useState({})
    const [currentStep, setCurrentStep] = useState(0)

    const currentPage = recipeModalData[Object.keys(recipeModalData)[currentStep]]

    return (
        <dialog className="rounded-2xl p-8 z-50 shadow-lg divide-y-2" open={isOpened}>
            <>
                <div className="flex flex-col items-center">
                    <span class="inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-green-500 text-green-500">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                        </svg>
                    </span>
                    <div className="flex gap-56">
                        <h1 className="font-semibold text-lg pb-4">Recipe Maker</h1>
                        <FontAwesomeIcon icon={faTimes} className="text-2xl text-gray-500 hover:cursor-pointer -translate-y-16" onClick={onClose} />

                    </div>
                </div>
                <form className="pt-4 pb-0 divide-y-2 ">
                    <div>
                        <h2 className="text-gray-500 font-medium pb-4">Add some basic details!</h2>
                        <TextInput label={stringToFormalCase("Title")} />
                        <TextArea label={stringToFormalCase("Description")} />
                    </div>
                </form>
            </>
            <div className="flex justify-end">
                <button className="bg-uni-brand hover:bg-u"></button>
            </div>
        </dialog>
    )
}