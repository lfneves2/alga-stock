import React from 'react';

import Header from '../Header';

import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table/Table';
import Products from '../../shared/Table/Table.mockdata';

import './App.css';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

const headers: TableHeader[] = [
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price', right: true},
  {key: 'stock', value: 'Stock', right: true},
]

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <Table 
          headers={headers}
          data={Products}
        />

        <Form title="Product Form" onSubmit={console.log}> 
          <Input 
            label="Name"
            placeholder="E.g.: Cookie"
          />
          <Input 
            label="Price"
            placeholder="E.g.: 1.99"
            step="0.01"
            type="number"
          />
          <Input 
            label="Stock"
            type="number"
            min="0"
            placeholder="E.g.: 320"
          />

          <Button>
           Submit 
          </Button>

        </Form>

      </Container>
    </div>
  );
}

export default App;
