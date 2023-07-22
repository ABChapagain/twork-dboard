'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Addservices() {
    let [showProduct, setShowProduct] = useState(false)
    var router = useRouter()
    let [product, setProduct] = useState({
        title: '',
        description: '',
        keywords: '',
        thumbImage: '',
        bannerImage: '',
    })


    function addData(e) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    function addBannerImage(e) {
        addData(e)
        setbannerImage(e.target.value)
    }
    function addproductImage(e) {
        addData(e)
        setProductImage(e.target.value)
    }
    function clearText() {
        var input = document.querySelectorAll("input")
        var select = document.querySelectorAll("select")
        var textarea = document.querySelectorAll("textarea")

        let i
        for (i = 0; i < input.length; i++) {
            if (input[i].classList.contains("border-stroke")) {
                input[i].value = ""
            }
        }
        for (i = 0; i < select.length; i++) {
            select[i].value = ""
        }
        for (i = 0; i < textarea.length; i++) {
            textarea[i].value = ""
        }
        setProductImage("")
        setbannerImage("")
    }
    const notify = () => toast("Categories Created Successfully.");
    const errorXa = () => toast("Some Error Occured While creating category.");


    function saveData(e) {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var data = {
            product
        }

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/services/Addservices", requestOptions)
            .then(response => response.json())
            .then(result => {
                router.refresh()
                clearText()
                notify()
                setShowProduct(false)
            })
            .catch(error => {
                router.refresh()
                errorXa()
            });



    }
    var [productImage, setProductImage] = useState("")
    var [bannerImage, setbannerImage] = useState("")

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex justify-between align-center">
                <h3 className="font-medium text-black dark:text-white">
                    Add a Service
                </h3>
                <h3 className='bg-white dark:bg-boxdark cursor-pointer text-2xl'
                    onClick={() => setShowProduct(!showProduct)}
                >
                    {showProduct ? '-' : '+'}
                </h3>
            </div>
            <ToastContainer />
            {(showProduct) && <form >
                <div className="p-6.5">
                    <div className="w-full mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Service Name
                        </label>
                        <input
                            onChange={(e) => addData(e)}
                            type="text"
                            name="title"
                            placeholder="Enter Service Name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>


                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">

                        <div className="mb-4.5 w-full">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Keywords (Seperate with Comma ',')
                            </label>
                            <input
                                onChange={(e) => addData(e)}
                                type="text"
                                name='keywords'
                                placeholder="Enter service Keywords (to rank the product)"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Service Description
                        </label>
                        <textarea
                            rows={6}
                            onChange={(e) => addData(e)}
                            name='description'
                            placeholder="Service Description"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        ></textarea>
                    </div>

                    <div className="mb-4.5 w-full ">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Thumbnail Image
                        </label>
                        <input
                            onChange={(e) => addproductImage(e)}
                            type="text"
                            name='thumbImage'
                            placeholder="Thumbnail Image"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    {(!!productImage) && <img className='mb-4.5 h-32' src={productImage} alt="" />}

                    <div className="mb-4.5 w-full  ">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Banner Images
                        </label>
                        <div className="flex gap-3 mb-4.5">
                            <input
                                type="text"
                                id='bannerImage'
                                onChange={(e) => addBannerImage(e)}
                                name='bannerImage'
                                placeholder="banner Image"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />

                        </div>
                        <div className="flex wrap gap-5">
                            {(!!bannerImage) && <img className='mb-4.5 h-32' src={bannerImage} alt="" />}

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

export default Addservices