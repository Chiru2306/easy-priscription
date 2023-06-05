import React from 'react';

const AvailableMedicineList = ({ medicines }) => {
    return (
        <div>
            <h2>Available Medicines</h2>
            <ul>
                {medicines.map((medicine) => (
                    <li key={medicine.id}>{medicine.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AvailableMedicineList;
