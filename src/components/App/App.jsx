import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';
import { MaterialEditorForm } from 'components/MaterialEditorForm';
import { useState, useEffect } from 'react';
import { Materials } from 'components/Materials';
import * as API from 'services/api';

export const App = () => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(materials);

  const addMaterials = async values => {
    try {
      const material = await API.addMaterials(values);
      setMaterials(prevState => [...prevState, material]);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const deleteMaterials = async id => {
    try {
      await API.delMaterials(id);
      setMaterials(prevState =>
        prevState.filter(material => material.id !== id)
      );
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  const updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterials(fields);
      setMaterials(prevState =>
        prevState.map(material =>
          material.id === fields.id ? updatedMaterial : material
        )
      );
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  return (
    <>
      <MaterialEditorForm onSubmit={addMaterials} />
      {isLoading ? (
        <div>LOADING</div>
      ) : (
        <Materials
          items={materials}
          onDelete={deleteMaterials}
          onUpdate={updateMaterial}
        />
      )}
      <GlobalStyles />
    </>
  );
};
