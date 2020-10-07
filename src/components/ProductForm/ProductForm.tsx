import React, { useEffect, useState } from 'react';
import Button from '../../shared/Button';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import { Product } from '../../shared/Table/Table.mockdata';


declare interface InitialFormState {
  _id?: string
  name: string
  price: string
  stock: string
}

export interface ProductCreator {
  name: string
  price: number
  stock: number
}

declare interface ProductFormProps {
  form?: Product
  onSubmit?: (product:ProductCreator) => void
  onUpdate?: (product: Product) => void
}

const ProductForm: React.FC<ProductFormProps> = (props) => {

  const initialformState: InitialFormState =  props.form 
  ?{
    _id: props.form._id,
    name: props.form.name,
    price: String(props.form.price),
    stock: String(props.form.stock)
  }  
  :{
    name: '',
    price: '',
    stock: ''
  }

  const [form, setForm] = useState(initialformState);

  useEffect(() => {
    setForm(initialformState)
  }, [props.form])

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;

      setForm({
          ...form,
          [name]: value
      })
  }

  const updateProduct = (product: InitialFormState) => {
    const productDto = {
      _id: String(product._id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    props.onUpdate &&
      props.onUpdate(productDto)
  }

  const createProduct = (product: InitialFormState) => {
    const productDto = {
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    props.onSubmit &&
      props.onSubmit(productDto)
  }

  const handlerFormSubmit = () => {
    form._id ? updateProduct(form) : createProduct(form);
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
     {
       form._id ? 'Update' : 'Submit'
     }
    </Button>

  </Form>
}

export default ProductForm;