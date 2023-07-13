import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddPersonForm = () => {
  const navigate = useNavigate();

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
      // Alihkan ke halaman /dashboard setelah berhasil menambahkan person
      navigate('/dashboard');
    } catch (error) {
      console.error('Error adding person:', error);
    }
  };

  return (
    <div>
      <h1>Entry Data</h1>
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
