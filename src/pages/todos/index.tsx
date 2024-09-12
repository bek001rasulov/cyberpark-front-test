import React from 'react';
import {TodosPage, TodosWrapper} from "./style.ts";
import {Button, Checkbox, Container, Flex, LoadingOverlay, Modal, Title} from "@mantine/core";
import useHook from "./useHook.ts";
import {PaginationCustom} from "@/components/pagination/pagination.tsx";
import {useSearchParams} from "react-router-dom";
import TodosTable from "./components/users-table";
import {Input} from "@/components/input/input.tsx";


const Users = () => {
    const {
        form,
        data,
        isLoading,
        changePage,
        opened,
        open,
        close,
        onSubmit,
        setId,
        id,
        loadingSingleTodo,
        completed,
        setCompleted,
        deleteTodo
    } = useHook();
    const [searchParams] = useSearchParams();


    return (
        <>
            <TodosPage>
                <Container size={1504} className='container'>
                    <TodosWrapper>
                        <Flex justify={'space-between'} align={'center'} mb={32}>
                            <Title size={32}>Todos</Title>
                            <Button color={'indigo'} onClick={open}>Add todo</Button>
                        </Flex>
                        <TodosTable data={data?.todos} setId={setId} open={open} deleteTodo={deleteTodo}/>
                        {
                            !isLoading && data?.todos?.length > 0 ?
                                <PaginationCustom
                                    totalCount={Math.ceil(data?.total / 16)}
                                    activePage={Number(searchParams.get('page') ?? 1)}
                                    setPage={changePage}
                                    style={{marginTop: 'auto', paddingTop: '20px'}}
                                />
                                : null
                        }
                    </TodosWrapper>
                </Container>
            </TodosPage>
            <LoadingOverlay visible={isLoading}/>

            <Modal
                opened={opened}
                onClose={() => {
                    setId(null);
                    form.reset({
                        todo: ''
                    });
                    close();
                }}
                title="New Todo"
            >
                <form style={{display: 'flex', gap: '8px', alignItems: 'center', position: 'relative'}}
                      onSubmit={form.handleSubmit(onSubmit)}>
                    {
                        id &&
                        <Checkbox
                            checked={completed}
                            onChange={(e: any) => setCompleted(e.target.checked)}
                            label="Complete"
                            styles={{
                                label: {paddingLeft: 4}
                            }}
                        />
                    }
                    <Input
                        name="todo"
                        control={form.control}
                        readOnly={!!id}
                    />
                    <Button
                        h={38}
                        style={{flexShrink: '0'}}
                        type="submit"
                    >
                        {id ? 'Update' : 'Add'}
                    </Button>
                    <LoadingOverlay
                        visible={loadingSingleTodo}
                        loaderProps={{type: 'dots'}}
                    />
                </form>

            </Modal>
        </>

    );
};

export default Users;
