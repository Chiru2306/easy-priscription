import React, { useState } from 'react';

const ClientNoteForm = ({ addNote, availableMedicines }) => {
    const [clientName, setClientName] = useState('');
    const [selectedMedicines, setSelectedMedicines] = useState([]);

    const handleClientNameChange = (event) => {
        setClientName(event.target.value);
    };

    const handleMedicineSelection = (event) => {
        const selectedOptions = Array.from(event.target.options)
            .filter((option) => option.selected)
            .map((option) => option.value);

        setSelectedMedicines(selectedOptions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newNote = {
            clientName,
            medicines: selectedMedicines,
        };

        addNote(newNote);
        setClientName('');
        setSelectedMedicines([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="clientName">Client Name:</label>
                <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={handleClientNameChange}
                />
            </div>
            <div>
                <label htmlFor="medicines">Medicines:</label>
                <select
                    id="medicines"
                    multiple
                    value={selectedMedicines}
                    onChange={handleMedicineSelection}
                >
                    {availableMedicines.map((medicine) => (
                        <option key={medicine.id} value={medicine.name}>
                            {medicine.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Add Note</button>
        </form>
    );
};

export default ClientNoteForm;
