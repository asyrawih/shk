import React from 'react'
import Header from '../../compoents/Header/Index'
import Inputs from '../../compoents/Inputs/Inputs'
import router from 'next/router'
import Modal from '../../compoents/Modal'

import { Button } from '../../compoents/button'
import { useModal } from '../../providers/ModalProvider'
import { withAuth } from '../../hoc/withAuth'
import { AuthToken } from '../../services/auth_token'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { storeStation } from '../../store/actions/stations/CREATE/StationCreateAction'

const Create = ({ auth }) => {
    const dispatch = useDispatch()
    const { modal, setModal } = useModal()
    const { register, handleSubmit } = useForm()
    const user: AuthToken = auth

    const handleForm = (data) => {
        console.log(data)
        dispatch(storeStation(data))
    }

    return (
        <div>
            <Header variant='admin' variantUser='admin' variantTitle="admin" title="Halaman Admin" username={user.decodeToken.name} />
            <div className="flex flex-col z-20">
                <div className="mt-10 flex justify-center">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <span className="font-roboto text-2xl font-bold mt-24">TAMBAH SPBU</span>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(handleForm)}>
                <div className="flex justify-center md:px-16 mt-10">
                    <div className="card-add w-full bg-alt py-10 rounded-lg space-y-4">
                        <div className="flex items-center mx-2">
                            <div className="label w-1/6 ml-2 mr-6">
                                <span className="font-bold">Username</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="flex items-center w-full md:pr-24 flex-grow-0">
                                <Inputs name="username" placeholder="Masukan username" ref={register({ required: true })} />
                            </div>
                        </div>
                        <div className="flex items-center mx-2">
                            <div className="label w-1/6 ml-2 mr-10 md:mr-6">
                                <span className="font-bold">Name</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="flex items-center w-full md:pr-24 flex-grow-0">
                                <Inputs name="name" placeholder="Masukan Nama User" ref={register({ required: true })} />
                            </div>
                        </div>
                        <div className="flex items-center mx-2 justify-between">
                            <div className="label w-1/6 ml-2 mr-6">
                                <span className="font-bold">Password</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="items-center w-full md:pr-24 flex-grow-0">
                                <Inputs name="password" type="password" placeholder="Masukan password" autoComplete="off" ref={register({ required: true })} />
                            </div>
                        </div>
                        <div className="flex items-center mx-2 justify-between">
                            <div className="label w-1/6 ml-2 mr-10 md:mr-6">
                                <span className="font-bold">Nama SPBU</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="flex items-center w-full md:pr-24">
                                <Inputs name="name_station" placeholder="Masukan Nama SPBU" ref={register({ required: true })} />
                            </div>
                        </div>
                        <div className="flex items-center mx-2 justify-between">
                            <div className="label w-1/6 ml-2 mr-10 md:mr-6">
                                <span className="font-bold">Nomor SPBU</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="flex items-center w-full md:pr-24">
                                <Inputs name="no_station" placeholder="Masukan No SPBU" ref={register({ required: true })} />
                            </div>
                        </div>
                        <div className="flex items-center mx-2 justify-between">
                            <div className="label w-1/6 ml-2 mr-10 md:mr-6">
                                <span className="font-bold">Lokasi SPBU</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="flex items-center w-full md:pr-24">
                                <Inputs name="location" placeholder="Masukan Lokasi SPBU" ref={register({ required: true })} />
                            </div>
                        </div>
                        <div className="flex items-center mx-2 justify-between">
                            <div className="label w-1/6 ml-2 mr-10 md:mr-6 ">
                                <span className="font-bold">No. Telpon SPBU</span>
                            </div>
                            <div className="flex items-center w-full md:pr-24">
                                <Inputs name="phone_number" placeholder="Masukan Phone Number" ref={register({ required: true })} />
                            </div>
                        </div>
                        <div className="flex items-center mx-2 justify-between">
                            <div className="label w-1/6 ml-2 mr-10 md:mr-6 ">
                                <span className="font-bold">Link Google Map</span>
                            </div>
                            <div className="flex items-center w-full md:pr-24">
                                <Inputs name="location_link" placeholder="Masukan Lokasi link" ref={register({ required: true })} />
                            </div>
                        </div>
                        <div className="flex ml-2 justify-between pt-3 space-x-1">
                            <Button type="button" onClick={() => setModal(!modal)} variant='alternative'>
                                Tambahkan foto
                            </Button>
                            <div className="flex pr-24 space-x-4">
                                <Button type="submit">
                                    Simpan
                            </Button>
                                <Button type="button" onClick={() => router.push('/admin')} variant='outline'>
                                    Batalkan
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Modal>
                <div className="p-2">
                    <div className="flex flex-col item-center justify-center space-y-4 h-44">
                        <span className="text-4xl font-bold">TODO Dropdown ZONE</span>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default withAuth(Create)
