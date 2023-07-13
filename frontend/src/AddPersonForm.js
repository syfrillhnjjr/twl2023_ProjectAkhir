import React, { useState } from 'react';
import axios from 'axios';

const AddPersonForm = () => {
  const [newPerson, setNewPerson] = useState({
    namakantor: '',
    pimpinan: '',
    alamat: '',
    hotline: ''
  });

  const handleInputChange = (e) => {
    setNewPerson({
      ...newPerson,
      [e.target.name]: e.target.value
    });
  };

  const handleAddPerson = async () => {
    try {
      await axios.post('http://localhost:8080/persons', newPerson);
      console.log('Person added:', newPerson);
      setNewPerson({
        namakantor: '',
        pimpinan: '',
        alamat: '',
        hotline: ''
      });
    } catch (error) {
      console.error('Error adding person:', error);
    }
  };

  return (
    <div>
      <h1>Add Person</h1>
      <form>
        <input
          type="text"
          name="namakantor"
          placeholder="Nama Kantor"
          value={newPerson.namakantor}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="pimpinan"
          placeholder="Pimpinan"
          value={newPerson.pimpinan}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="alamat"
          placeholder="Alamat"
          value={newPerson.alamat}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="hotline"
          placeholder="Hotline"
          value={newPerson.hotline}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddPerson}>
          Add Person
        </button>
      </form>
    </div>
  );
};

export default AddPersonForm;
