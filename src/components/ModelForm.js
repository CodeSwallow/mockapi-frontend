import {useState} from "react";

export default function ModelForm() {
    const [newField, setNewField] = useState("")
    const [fields, setFields] = useState([{
        id: "1",
        field: "id",
        type: "string"
    }])

    const handleFieldChange = (e) => {
        const newFields = fields.map(field => {
            if (field.id === e.target.id) {
                field.field = e.target.value
            }
            return field
        });
        setFields(newFields);
    }

    const handleNewFieldChange = (e) => {
        setNewField(e.target.value)
    }

    const addField = (e) => {
        let currentFields = fields.map(item => item.field)
        if (newField !== "" && !currentFields.includes(newField)) {
            setFields([...fields, {id: `${newField}-${fields.length}`, field: newField, type: ""}])
            setNewField("")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fields)
    }

    const handleDeleteField = (id) => {
        const newFields = fields.filter(field => field.id !== id)
        setFields(newFields);
    }

    const fieldsList = fields.map((field, index) => {
        return (
            <div key={`${field.id}-${index}`}
                 className="flex items-center justify-between w-full gap-4">
                <input type="text" id={field.id}
                       className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-pink-500"
                       value={field.field}
                       onChange={handleFieldChange}
                       required/>
                {index !== 0 &&
                    <button
                        type="button"
                        className="text-white rounded-lg mb-2 bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 block p-2.5"
                        onClick={() => {
                            handleDeleteField(field.id)
                        }}>
                        Delete
                    </button>}
            </div>
        )
    })

    return (
        <div
            className="mb-4 max-w-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-gray-900 dark:text-white text-lg font-medium mb-2">Define New Model</h5>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {fieldsList}
                <div className="flex flex-row w-full gap-4">
                    <input type="text" id="new-field"
                           className="basis-2/3 mb-2 bg-gray-100 border border-gray-300 placeholder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-pink-500"
                           placeholder="New field"
                           value={newField}
                           onChange={handleNewFieldChange}/>
                    <button
                        type="button"
                        className="basis-1/3 text-white rounded-lg mb-2 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 block p-2.5"
                        onClick={addField}>
                        New Field
                    </button>
                </div>
                <button type="submit"
                        className="w-full text-white focus:ring-2 focus:outline-none focus:ring-pink-800 dark:focus:ring-pink-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600">
                    Create Model
                </button>
            </form>
        </div>
    )
}
