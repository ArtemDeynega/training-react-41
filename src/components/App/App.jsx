import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';
import { MaterialEditorForm } from 'components/MaterialEditorForm';
import { useState, useEffect } from 'react';
import { LoginFrom } from 'components/1/LoginForm';
import { Materials } from 'components/Materials';
import Clock from 'components/4/Clock/Clock';
import * as API from 'services/api';

async function getMaterial() {
  const data = await API.getMaterials();

  return data;
}

export const App = () => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      getMaterial().then(setMaterials);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addMaterials = async values => {
    try {
      const material = await API.addMaterials(values);
      setMaterials(prevState => [...prevState, material]);
    } catch (error) {
      setError(error.message);
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
    }
  };
  return (
    <>
      <LoginFrom />
      {/* <Clock /> */}
      {/* <MaterialEditorForm onSubmit={addMaterials} />
      {isLoading ? (
        <div>LOADING</div>
      ) : (
        <Materials
          items={materials}
          onDelete={deleteMaterials}n
          onUpdate={updateMaterial}
        />
      )}
      <GlobalStyles /> */}
    </>
  );
};
