import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';
import { MaterialEditorForm } from 'components/MaterialEditorForm';
import { Component } from 'react';
import { Materials } from 'components/Materials';
import * as API from 'services/api';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: null,
  };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials });
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  addMaterials = async values => {
    try {
      const material = await API.addMaterials(values);
      this.setState(({ materials }) => ({
        materials: [...materials, material],
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  };
  deleteMaterials = async id => {
    try {
      await API.delMaterials(id);
      this.setState(({ materials }) => ({
        materials: materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  };
  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterials({
        id: 1,
        title: 'Hop',
      });
      this.setState(({ materials }) => ({
        materials: materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  };
  render() {
    const { isLoading, materials } = this.state;
    return (
      <>
        <button type="button" onClick={this.updateMaterial}>
          xxxx
        </button>
        <MaterialEditorForm onSubmit={this.addMaterials} />
        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <Materials items={materials} onDelete={this.deleteMaterials} />
        )}
        <GlobalStyles />
      </>
    );
  }
}
