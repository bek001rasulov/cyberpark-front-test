import React from 'react';
import {UsersPage, UsersWrapper} from "./style.ts";
import {Container, Flex, Title} from "@mantine/core";
import UsersTable from "@/pages/users/components/users-table";
import useHook from "./useHook.ts";


const Users = () => {
    const {data} = useHook();
    return (
        <UsersPage>
            <Container size={1504} className='container'>
                <UsersWrapper>
                    <Flex justify={'space-between'} mb={32}>
                        <Title size={32}>Users</Title>
                    </Flex>
                    <UsersTable data={data?.users}/>
                </UsersWrapper>
            </Container>
        </UsersPage>
    );
};

export default Users;