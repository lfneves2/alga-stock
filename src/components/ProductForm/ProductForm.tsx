import React, { useState } from 'react';
import Button from '../../shared/Button';
import Form from '../../shared/Form';
import Input from '../../shared/Input';

const initialformState = {
    name: '',
    price: '',
    stock: ''
}

export interface ProductCreator {
  name: string
  price: number
  stock: number
}

declare interface ProductFormProps {
  onSubmit: (product:ProductCreator) => void
}

const ProductForm: React.FC<ProductFormProps> = (props) => {

    const [form, setForm] = useState(initialformState);

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handlerFormSubmit = () => {
      const productDto = {
        name: String(form.name),
        price: parseFloat(form.price),
        stock: Number(form.stock)
      }
      props.onSubmit(productDto)
      setForm(initialformState)
    }

    return <Form title="Product Form" onSubmit={handlerFormSubmit}> 
    <Input 
      onChange={handlerChange}
      value={form.name}
      name="name"
      label="Name"
      placeholder="E.g.: Cookie"
      required
    />
    <Input 
      onChange={handlerChange}
      value={form.price}
      name="price"
      label="Price"
      placeholder="E.g.: 1.99"
      step="0.01"
      type="number"
      required
    />
    <Input 
      onChange={handlerChange}
      value={form.stock}
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