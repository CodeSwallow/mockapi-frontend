import React, {useState} from "react";

export default function ModelFields({model, toggleModel, modelToggled}) {
    const [fields, setFields] = useState(model.fields)
    const [newField, setNewField] = useState("")
    const [fieldsLength, setFieldsLength] = useState(model.fields.length)
    const [modelNumber, setModelNumber] = useState(0)
    const upperCasedModel = model.name[0].toUpperCase() + model.name.substring(1)

    const addField = (e) => {
        let currentFields = fields.map(item => item.field)
        if (newField !== "" && !currentFields.includes(newField)) {
            setFields([...fields, {id: `${newField}-${fields.length}`, field: newField}])
            setNewField("")
        }
    }

    const handleUpdateModel = (e) => {
        e.preventDefault()
        console.log(fields)
    }

    const handleNewFieldChange = (e) => {
        setNewField(e.target.value)
    }

    const handleFieldChange = (e) => {
        const newFields = fields.map(field => {
            if (field.id === e.target.id) {
                field.field = e.target.value
            }
            return field
        });
        setFields(newFields);
    }

    const handleModelNumberChange = (e) => {
        setModelNumber(e.target.value)
    }

    const handleDeleteField = (id) => {
        const newFields = fields.filter(field => field.id !== id)
        setFields(newFields);
        setFieldsLength(newFields.length)
    }

    const fieldsList = fields.map((field) => {
        return (
            <div key={`${model.name}-${field.id}`}
                 className="flex items-center justify-between w-full gap-4">
                <input type="text" id={field.id}
                       className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-pink-500"
                       value={field.field}
                       onChange={handleFieldChange}
                       required/>
                <button
                    type="button"
                    className="text-white rounded-lg mb-2 bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 block p-2.5"
                    onClick={() => {
                        handleDeleteField(field.id)
                    }}>
                    Delete
                </button>
            </div>
        )
    })

    return (
        <div>
            <div key={model.id}
                 className={`h-min bg-white dark:bg-gray-800 ${modelToggled === model ? "rounded-t-lg" : "rounded-lg mb-4"} p-5 border border-gray-200 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700`}
                 onClick={() => toggleModel(model)}>
                <button className="text-gray-900 dark:text-white flex items-center justify-between w-full">
                    <h5 className="text-lg font-medium mb-1">{upperCasedModel}</h5>
                    {modelToggled === model ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6 justify-self-end">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                        </svg>}
                </button>
                <div className="flex flex-row w-full gap-4 justify-between">
                    <p className="text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
                        Fields defined: <span className="ml-1">{fieldsLength}</span>
                    </p>
                    <p className="text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
                        Existing: <span className="ml-1">{modelNumber}</span>
                    </p>
                </div>
            </div>
            <div>
                {modelToggled === model &&
                    <div
                        className="p-5 mb-4 bg-white dark:bg-gray-900 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-900 dark:text-gray-400 font-light">{model.description}</p>
                        <form onSubmit={handleUpdateModel}>
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
                            <label htmlFor="default-range"
                                   className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
                                {`Generate ${modelNumber} ${model.name} models`}
                            </label>
                            <input id="default-range" type="range" value={modelNumber}
                                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                   onChange={handleModelNumberChange}/>
                            <button
                                type="submit"
                                className="w-full text-white rounded-lg mt-3 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 block p-2.5">
                                Save
                            </button>
                        </form>
                    </div>}
            </div>
        </div>
    );
}
