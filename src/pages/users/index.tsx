import React from 'react';
import {UsersPage, UsersWrapper} from "./style.ts";
import {Container, Flex, LoadingOverlay, Title} from "@mantine/core";
import UsersTable from "@/pages/users/components/users-table";
import useHook from "./useHook.ts";
import {PaginationCustom} from "@/components/pagination/pagination.tsx";
import {useSearchParams} from "react-router-dom";


const Users = () => {
    const {data, isLoading, changePage} = useHook();
    const [searchParams] = useSearchParams();
    return (
        <>
            <UsersPage>
                <Container size={1504} className='container'>
                    <UsersWrapper>
                        <Flex justify={'space-between'} mb={32}>
                            <Title size={32}>Users</Title>
                        </Flex>
                        <UsersTable data={data?.users}/>
                        {
                            !isLoading && data?.users?.length > 0 ?
                                <PaginationCustom
                                    totalCount={Math.ceil(data?.total / 16)}
                                    activePage={Number(searchParams.get('page') ?? 1)}
                                    setPage={changePage}
                                    style={{marginTop: 'auto', paddingTop: '20px'}}
                                />
                                : null
                        }
                    </UsersWrapper>
                </Container>
            </UsersPage>
            <LoadingOverlay visible={isLoading}/>
        </>

    );
};

export default Users;
