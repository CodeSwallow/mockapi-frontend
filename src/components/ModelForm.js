import {useState} from "react";

export default function ModelForm() {
    const [fieldName, setFieldName] = useState("")

    const handleFieldNameChange = (e) => {
        setFieldName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fieldName)
    }

    return (
        <div
            className="mb-4 max-w-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-gray-900 dark:text-white text-lg font-medium mb-2">Define New Model</h5>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="projectName"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Field Name
                    </label>
                    <input type="text" name="projectName" id="projectName"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           value={fieldName}
                           onChange={handleFieldNameChange}
                           required/>
                </div>
                <button type="submit"
                        className="w-full text-white focus:ring-2 focus:outline-none focus:ring-pink-800 dark:focus:ring-pink-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600">
                    Create Model
                </button>
            </form>
        </div>
    )
}
