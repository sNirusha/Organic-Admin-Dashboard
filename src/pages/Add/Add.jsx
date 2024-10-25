import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data,setData] = useState({
    product_name:"",
    product_description:"",
    product_price:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("product_name", data.name)
    formData.append("product_description", data.description)
    formData.append("product_price", Number(data.price))
    // formData.append("image", image)


    const response = await axios.post(`${url}/item/add`, formData);
    if (response.status==200) {
      setData({
        product_name:"",
        product_description:"",
        product_price:""
      })
      setImage(false)
      console.log(response)
      toast.success(response.data)
    }
    else {
      console.log(response.data)
      toast.error("Error")
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write Content Here' required></textarea>
        </div>
        <div className="add-product-price">
          <p>Product Price</p>
          <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$10' />
        </div>
        <button type='submit' className='add-button'>Add</button>
      </form>
    </div>
  )
}

export default Add
