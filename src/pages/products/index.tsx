import React from 'react';
import {ProductsWrapper} from "./style.ts";
import {Grid, LoadingOverlay, Title} from "@mantine/core";
import ProductCard from "@/pages/products/components/product-card";
import useHook from "./useHook.ts";
import {PaginationCustom} from "@/components/pagination/pagination.tsx";
import {useSearchParams} from "react-router-dom";

const Products = () => {

    const {
        data,
        changePage,
        isLoading
    } = useHook();

    const [searchParams] = useSearchParams();

    return (
        <>
            <ProductsWrapper>
                <Title size={32} mb={21}>Products</Title>
                <Grid gutter={30}>
                    {
                        data?.products?.map((item: any, index: number) => (
                            <Grid.Col span={{base: 12, sm: 6, md: 4, lg: 3}} key={index}>
                                <ProductCard data={item}/>
                            </Grid.Col>
                        ))
                    }
                </Grid>

                <PaginationCustom
                    totalCount={Math.ceil(data?.total / data?.limit)}
                    activePage={Number(searchParams.get('page'))}
                    setPage={changePage}
                    style={{marginTop: '42px'}}
                />
            </ProductsWrapper>
            <LoadingOverlay visible={isLoading} />
        </>

    );
};

export default Products;
