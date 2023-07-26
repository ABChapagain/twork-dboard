'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function AddserviceProviders({ service }) {
    let [showProvider, setshowProvider] = useState(false)
    var router = useRouter()
    let [provider, setprovider] = useState({
        name: '',
        description: '',
        address: '',
        contact: '',
        image: '',
        service: '',
        rate: '',
        rateType: '',
        isAvailable: true,
        email: '',
    })


    function addData(e) {
        setprovider({
            ...provider,
            [e.target.name]: e.target.value
        })
    }
    var [ppImage, setppImage] = useState('')

    function addImage(e) {
        addData(e)
        setppImage(e.target.value)
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

    }
    const notify = () => toast("Categories Created Successfully.");
    const errorXa = () => toast("Some Error Occured While creating category.");
    const emptyField = () => toast("Please fill all the fields.");

    function checkData() {
        // check if provider is empty or not
        if (provider.name == '') {
            emptyField()
            return false
        }
        if (provider.email == '') {
            emptyField()
            return false
        }
        if (provider.address == '') {
            emptyField()
            return false
        }
        if (provider.contact == '') {
            emptyField()
            return false
        }
        if (provider.rate == '') {
            emptyField()
            return false
        }
        if (provider.rateType == '') {
            emptyField()
            return false
        }
        if (provider.description == '') {
            emptyField()
            return false
        }
        if (provider.service == '') {
            emptyField()
            return false
        }
        if (provider.image == '') {
            emptyField()
            return false
        }
        return true
    }


    function saveData(e) {
        e.preventDefault()
        if (!checkData()) {
            return
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var data = {
            provider
        }

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/api/services/AddserviceProvider", requestOptions)
            .then(response => response.json())
            .then(result => {
                router.refresh()
                clearText()
                notify()
                setshowProvider(false)
            })
            .catch(error => {
                router.refresh()
                errorXa()
            });

    }

    const [isChecked, setIsChecked] = useState(true)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
        setprovider({
            ...provider,
            isAvailable: !isChecked
        })
    }


    return (
        <div className="rounded-sm border hover:cursor-pointer  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div onClick={() => setshowProvider(!showProvider)} className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex justify-between align-center">
                <h3 className="font-medium text-black dark:text-white">
                    Add a Service Provider
                </h3>
                <h3 className='bg-white dark:bg-boxdark cursor-pointer text-2xl'

                >
                    {showProvider ? '-' : '+'}
                </h3>
            </div>
            <ToastContainer />
            {(showProvider) && <form >
                <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full  xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Provider's Name
                            </label>
                            <input
                                required
                                onChange={(e) => addData(e)}
                                type="text"

                                name="name"
                                placeholder="Enter Service Provider's Name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                        <div className="w-full  xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Provider's Email Address
                            </label>
                            <input
                                required
                                onChange={(e) => addData(e)}
                                type="text"
                                name="email"
                                placeholder="Enter Service Provider's Email Address"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                    </div>


                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Address
                            </label>
                            <input
                                required
                                onChange={(e) => addData(e)}
                                type="text"
                                name='address'
                                placeholder="Provider's Address"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>

                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Contact
                            </label>
                            <input
                                required
                                onChange={(e) => addData(e)}
                                type="number"
                                name='contact'
                                placeholder="Provider's Contact Number"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Rate (in NPR)
                            </label>
                            <input
                                required
                                onChange={(e) => addData(e)}
                                type="number"
                                name='rate'
                                placeholder="Provider's Working Rate"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>

                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Rate Type
                            </label>
                            <select
                                required
                                onChange={(e) => addData(e)}
                                name='rateType'
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                <option value="">Select Type</option>
                                <option value="per hour">Hour</option>
                                <option value="per day">Day</option>
                                <option value="per month">Month</option>
                                <option value="per year">Year</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Service provider's Description
                        </label>
                        <textarea
                            required
                            rows={6}
                            onChange={(e) => addData(e)}
                            name='description'
                            placeholder="Service providers Description"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        ></textarea>
                    </div>
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Available
                            </label>
                            <>
                                <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                                    <input
                                        required
                                        type='checkbox'
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className='sr-only'
                                    />
                                    <span className='label flex items-center text-sm font-medium dark:text-white'>
                                        No
                                    </span>
                                    <span
                                        className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-[#377419]' : 'bg-[#a52020]'
                                            }`}
                                    >
                                        <span
                                            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''
                                                }`}
                                        ></span>
                                    </span>
                                    <span className='label flex items-center text-sm font-medium dark:text-white'>
                                        Yes
                                    </span>
                                </label>
                            </>
                        </div>

                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Service Type
                            </label>
                            <select
                                onChange={(e) => addData(e)}
                                required
                                name='service'
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                <option value="hour">Select Type</option>
                                {service.map((data) => {
                                    return (
                                        <option value={data._id}>{data.title}</option>
                                    )
                                })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="mb-4.5 w-full ">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Image
                        </label>
                        <input
                            required
                            type="text"
                            onChange={(e) => addImage(e)}
                            name='image'
                            placeholder="Provider's Profile Picture"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    {(!!ppImage) && <img className='mb-4.5 h-32' src={ppImage} alt="" />}

                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray" onClick={(e) => saveData(e)}>
                        Save
                    </button>
                </div>
            </form>}
        </div>

    )
}

export default AddserviceProviders