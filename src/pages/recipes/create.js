import TextInput from "../../components/TextInput"
import DashboardLayout from "../layout/Dashboard"

export default function AddRecipe() {
    return (
        <div className="flex divide-y-2 flex-col p-20">
            <div className="">
                <h1 className="font-semibold text-4xl pb-16">Add your own recipe!</h1>
            </div>
            <div className="flex py-8 items-center gap-16">
                <h2 className="font-medium text-gray-400 text-sm">RECIPE DETAILS</h2>
                <TextInput label="Recipe Name" placeholder="Enter recipe name" />
            </div>
        </div>
    )
}

AddRecipe.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}