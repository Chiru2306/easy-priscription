// Notepad.js
import React, { useState } from 'react';
import ClientNoteForm from './ClientNoteForm';
import ClientNoteList from './ClientNoteList';
import AvailableMedicineList from './AvailableMedicineList';

const Notepad = () => {
    const [notes, setNotes] = useState([]);
    const [availableMedicines] = useState([
        { id: 1, name: 'Medicine 1' },
        { id: 2, name: 'Medicine 2' },
        { id: 3, name: 'Medicine 3' },
    ]);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const addMedicineToNote = (noteId, medicine) => {
        const updatedNotes = notes.map((note) => {
            if (note.id === noteId) {
                return {
                    ...note,
                    medicines: [...note.medicines, medicine],
                };
            }
            return note;
        });

        setNotes(updatedNotes);
    };

    return (
        <div>
            <h1>Notepad</h1>
            <ClientNoteForm addNote={addNote} availableMedicines={availableMedicines} />
            <ClientNoteList notes={notes} addMedicineToNote={addMedicineToNote} />
            <AvailableMedicineList medicines={availableMedicines} />
        </div>
    );
};

export default Notepad;
