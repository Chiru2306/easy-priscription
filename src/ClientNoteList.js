import React from 'react';

const ClientNoteList = ({ notes, addMedicineToNote }) => {
    const handleAddMedicineClick = (noteId, medicine) => {
        addMedicineToNote(noteId, medicine);
    };

    const handlePrintNote = (noteId) => {
        const noteToPrint = notes.find((note) => note.id === noteId);

        const noteContent = `
      Client Name: ${noteToPrint.clientName}
      Medicines: ${noteToPrint.medicines.join(', ')}
    `;

        const newWindow = window.open('', '_blank');
        newWindow.document.write(`<pre>${noteContent}</pre>`);
        newWindow.document.close();
        newWindow.print();
    };

    return (
        <div>
            <h2>Client Notes</h2>
            {notes.map((note) => (
                <div key={note.id}>
                    <h3>{note.clientName}</h3>
                    <ul>
                        {note.medicines.map((medicine, index) => (
                            <li key={index}>{medicine}</li>
                        ))}
                    </ul>
                    <button onClick={() => handleAddMedicineClick(note.id, 'New Medicine')}>
                        Add Medicine
                    </button>
                    <button onClick={() => handlePrintNote(note.id)}>Print</button>
                </div>
            ))}
        </div>
    );
};

export default ClientNoteList;

