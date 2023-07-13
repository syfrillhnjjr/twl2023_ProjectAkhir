import React, { useState } from 'react';
import axios from 'axios';
import './editpersonform.css';

const EditPersonForm = ({ id, namakantor, pimpinan, alamat, hotline, handleUpdate }) => {
  const [formData, setFormData] = useState({
    namakantor: namakantor,
    pimpinan: pimpinan,
    alamat: alamat,
    hotline: hotline
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/persons/${id}`, formData);
      handleUpdate(id, formData);
    } catch (error) {
      console.error('Error updating person data:', error);
    }
  };

  const handleCancel = () => {
    // Tambahkan logika untuk membatalkan perubahan dan menghapus form edit
  };

  return (
    <tr>
      <td>
        <input type="text" name="namakantor" value={formData.namakantor} onChange={handleChange} />
      </td>
      <td>
        <input type="text" name="pimpinan" value={formData.pimpinan} onChange={handleChange} />
      </td>
      <td>
        <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} />
      </td>
      <td>
        <input type="text" name="hotline" value={formData.hotline} onChange={handleChange} />
      </td>
      <td>
        <button type="submit" onClick={handleSubmit}>Update</button>
      </td>
      <td>
        <button onClick={handleCancel}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditPersonForm;
