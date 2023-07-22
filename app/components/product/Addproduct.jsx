'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

function Addproduct() {
    let [showProduct, setShowProduct] = useState(false)
    var router = useRouter()
    let [product, setProduct] = useState({
        title: '',
        price: '',
        mrp: '',
        description: '',
        keywords: '',
        costPrice: '',
        category: '',
        subCategory: '',
        thumbImage: ''
    })
    var [category, setCategory] = useState([])
    var [subcategory, setsubCategory] = useState([])

    function getCategory() {
        fetch("/api/products/getCategory")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategory(data.data)
            })
    }
    function getsubCategory() {
        fetch("/api/products/getsubCategory")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setsubCategory(data.data)
            })
    }
    useEffect(() => {
        getCategory()
        getsubCategory()
    }, [])

    function addData(e) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    function saveData(e) {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var data = {
            product, productImages
        }

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/products/Addphysical", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                router.reload

            })
            .catch(error => {
                router.reload
            });
    }
    var [productImage, setProductImage] = useState("")
    var [productImages, setProductImages] = useState([])


    function productImagechange(e) {
        setProductImage(e.target.value)
        addData(e)

    }
    function productImageschange(e) {
        e.preventDefault()
        var productImagex = document.getElementById("productImage")
        let imageValue = productImagex.value

        setProductImages([...productImages, imageValue])
        productImagex.value = ""
        // addData(e)
        console.log(productImages)
    }

    function deleteImage(data) {
        const newArray = productImages.filter(item => item !== data);
        setProductImages(newArray)
    }



    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex justify-between align-center">
                <h3 className="font-medium text-black dark:text-white">
                    Add A Product
                </h3>
                <h3 className='bg-white dark:bg-boxdark cursor-pointer text-2xl'
                    onClick={() => setShowProduct(!showProduct)}
                >
                    {showProduct ? '-' : '+'}
                </h3>
            </div>
            {(showProduct) && <form >
                <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Product Title
                            </label>
                            <input
                                onChange={(e) => addData(e)}
                                type="text"
                                name="title"
                                placeholder="Enter product title"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>

                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Display Price
                            </label>
                            <input
                                onChange={(e) => addData(e)}
                                type="number"
                                name='price'
                                placeholder="Enter the display price (NPR)"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                MRP
                            </label>
                            <input
                                onChange={(e) => addData(e)}
                                type="text"
                                name='mrp'
                                placeholder="Enter MRP (In NRS)"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>

                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Cost Price
                            </label>
                            <input
                                onChange={(e) => addData(e)}
                                type="number"
                                name='costPrice'
                                placeholder="Enter the Cost price (NPR)"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                    </div>
                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Keywords (Seperate with Comma ',')
                        </label>
                        <input
                            onChange={(e) => addData(e)}
                            type="text"
                            name='keywords'
                            placeholder="Enter product Keywords (to rank the product)"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="mb-4.5 w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Category
                            </label>
                            <div className="relative z-20 bg-transparent dark:bg-form-input">
                                <select
                                    onChange={(e) => addData(e)}
                                    name="category"
                                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option value="">Select Category</option>
                                    {(category.length > 0) && category.map((data, index) => {
                                        return (
                                            <option key={index} value={data._id}>{data.title}</option>
                                        )
                                    })}
                                </select>
                                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                    <svg
                                        className="fill-current"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                fill=""
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="mb-4.5 w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                SubCategory
                            </label>
                            <div className="relative z-20 bg-transparent dark:bg-form-input">
                                <select
                                    name="subCategory"
                                    onChange={(e) => addData(e)}
                                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option value="">Select SubCategory</option>
                                    {(subcategory.length > 0) && subcategory.map((data, index) => {
                                        return (
                                            <option key={index} value={data._id}>{data.title}</option>
                                        )
                                    })}
                                </select>
                                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                    <svg
                                        className="fill-current"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                fill=""
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Product Description
                        </label>
                        <textarea
                            rows={6}
                            onChange={(e) => addData(e)}
                            name='description'
                            placeholder="Product Description"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        ></textarea>
                    </div>

                    <div className="mb-4.5 w-full ">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Thumbnail Image
                        </label>
                        <input
                            onChange={(e) => productImagechange(e)}
                            type="text"
                            name='thumbImage'
                            placeholder="Thumbnail Image"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    {(!!productImage) && <img className='mb-4.5 h-32' src={productImage} alt="" />}

                    <div className="mb-4.5 w-full  ">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Product Images
                        </label>
                        <div className="flex gap-3 mb-4.5">
                            <input
                                type="text"
                                id='productImage'
                                name='productImages'
                                placeholder="Product Image"
                                className="w-11/12 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                            <button className="flex  justify-center rounded bg-primary p-3 font-medium text-gray" onClick={(e) => productImageschange(e)}>
                                Add
                            </button>
                        </div>
                        <div className="flex wrap gap-5">
                            {(productImages.length > 0) &&
                                productImages.map((data, index) => {
                                    return (
                                        <img key={index} onDoubleClick={() => deleteImage(data)} className='w-12 object-contain' src={data} alt={"image Error"} />
                                    )
                                })
                            }
                        </div>
                    </div>



                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray" onClick={(e) => saveData(e)}>
                        Save
                    </button>
                </div>
            </form>}
        </div>

    )
}

export default Addproduct