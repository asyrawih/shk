import React from 'react'
import { useSWRInfinite } from 'swr'
import { Button } from '../../compoents/button'
import MainContent from '../../compoents/container/MainContent'
import Header from '../../compoents/Header/Index'
import Sidebar from '../../compoents/Sidebar'
import { Tbody, TbodyContentWrapper } from '../../compoents/Table/Tbody'
import { Thead, TheadWrapper } from '../../compoents/Table/Thead'
import { withAuth } from '../../hoc/withAuth'
import { Product as Iproducts } from '../../model/Product'
import { API } from '../../services/api'

const fetcher = url => API.get(url).then(res => res.data);

const Product = () => {

    const { data, size, setSize } = useSWRInfinite(index => `/api/v1/product?page=${index + 1}`, fetcher);
    const product = data ? [].concat(...data) : [];



    return (
        <>
            <Sidebar />
            <MainContent>
                <Header />
                <div className="flex justify-between  px-24 py-2">
                    <header className="text-3xl font-semibold text-gray-800">Produk</header>
                    <Button variant='primary' textVariant='bold' size='xlarge' type='button' onClick={() => setSize(size + 1)}>
                        Tambah
                    </Button>
                </div>
                <div className="px-24 py-4 flex  justify-center">
                    <table className='w-full text-md  shadow-md rounded-lg mb-4' >
                        <tbody>
                            <TheadWrapper>
                                <Thead name="Nama Produk" />
                                <Thead name="Harga 8/KL" />
                                <Thead name="Harga Beli /L" />
                                <Thead name="Harga Jual /l" />
                            </TheadWrapper>
                            {product.map(({ data }) => (
                                (data as Iproducts[]).map(val => (
                                    <TbodyContentWrapper key={val.id}>
                                        <Tbody value={val.name} />
                                        <Tbody value={val.price_8kl} />
                                        <Tbody value={val.price_sell} />
                                        <Tbody value={val.price_buy} />
                                    </TbodyContentWrapper>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainContent>
        </>
    )
}

export default withAuth(Product)
