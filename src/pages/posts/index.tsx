import React from 'react';
import {PostsPage, PostsWrapper} from "./style.ts";
import {Container, Flex, Grid, LoadingOverlay, Title} from "@mantine/core";
import {PostCard} from "@/pages/posts/components/post-card";
import useHook from "./useHook.ts";
import {PaginationCustom} from "@/components/pagination/pagination.tsx";
import {useSearchParams} from "react-router-dom";

const Posts = () => {
    const [searchParams] = useSearchParams();
    const {data, isLoading, changePage} = useHook();
    return (
        <>
            <PostsPage>
                <Container size={1504} className='container'>
                    <PostsWrapper>
                        <Flex justify={'space-between'} mb={32}>
                            <Title size={32}>Posts</Title>
                        </Flex>
                        <Grid gutter={30}>
                            {
                                data?.posts?.map((item: any) => (
                                    <Grid.Col span={{base: 12, sm: 6, md: 4, lg: 3}}>
                                        <PostCard data={item}/>
                                    </Grid.Col>
                                ))
                            }

                        </Grid>
                        {
                            !isLoading && data?.posts?.length > 0 ?
                                <PaginationCustom
                                    totalCount={Math.ceil(data?.total / 16)}
                                    activePage={Number(searchParams.get('page') ?? 1)}
                                    setPage={changePage}
                                    style={{marginTop: 'auto', paddingTop: '20px'}}
                                />
                                : null
                        }
                    </PostsWrapper>
                </Container>
            </PostsPage>
            <LoadingOverlay visible={isLoading}/>
        </>
    );
};

export default Posts;
