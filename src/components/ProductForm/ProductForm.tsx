import React, { useState } from 'react';
import Button from '../../shared/Button';
import Form from '../../shared/Form';
import Input from '../../shared/Input';

const initialformState = {
    name: '',
    price: '',
    stock: ''
}

const ProductForm = () => {

    const [form, setForm] = useState(initialformState);

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    return <Form title="Product Form" onSubmit={() => console.log(form)}> 
    <Input 
      onChange={handlerChange}
      name="name"
      label="Name"
      placeholder="E.g.: Cookie"
      required
    />
    <Input 
      onChange={handlerChange}
      name="price"
      label="Price"
      placeholder="E.g.: 1.99"
      step="0.01"
      type="number"
      required
    />
    <Input 
      onChange={handlerChange}
      name="stock"
      label="Stock"
      type="number"
      min="0"
      placeholder="E.g.: 320"
      required
    />

    <Button>
     Submit 
    </Button>

  </Form>
}

export default ProductForm;