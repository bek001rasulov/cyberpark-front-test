import React from 'react';
import {ProductsPage, ProductsWrapper} from "./style.ts";
import {Box, Container, Flex, Grid, LoadingOverlay, Text, Title} from "@mantine/core";
import ProductCard from "@/pages/products/components/product-card";
import useHook from "./useHook.ts";
import {PaginationCustom} from "@/components/pagination/pagination.tsx";
import {useSearchParams} from "react-router-dom";
import {Input} from "@/components/input/input.tsx";
import {IoIosSearch} from "react-icons/io";

const Products = () => {

    const {
        form,
        data,
        changePage,
        isLoading
    } = useHook();

    const [searchParams] = useSearchParams();

    return (
        <ProductsPage>
            <Container size={1504} className='container'>
                <ProductsWrapper>
                    <Flex justify={'space-between'} mb={32}>
                        <Title size={32}>Products</Title>
                        <Input
                            name="search"
                            control={form.control}
                            placeholder="Search"
                            maw={400}
                            leftSection={<IoIosSearch color={'#ced4da'} size={20}/>}
                        />
                    </Flex>

                    <Grid gutter={30}>
                        {
                            data?.products?.map((item: any, index: number) => (
                                <Grid.Col span={{base: 12, sm: 6, md: 4, lg: 3}} key={index}>
                                    <ProductCard data={item}/>
                                </Grid.Col>
                            ))
                        }
                    </Grid>

                    {
                        data?.products?.length === 0 &&
                        <Box display={'flex'} style={{justifyContent: "center", alignItems: 'center', flexGrow: '1'}}>
                            <Text size={'32px'} c={'dimmed'} mt={-145}>Nothing found</Text>
                        </Box>
                    }

                    {
                        !isLoading && data?.products.length > 0 ?
                            <PaginationCustom
                                totalCount={Math.ceil(data?.total / 16)}
                                activePage={Number(searchParams.get('page') ?? 1)}
                                setPage={changePage}
                                style={{marginTop: '42px'}}
                            />
                            : null
                    }
                </ProductsWrapper>
                <LoadingOverlay visible={isLoading}/>
            </Container>
        </ProductsPage>


    );
};

export default Products;
