import {useMutation, useQuery} from "@tanstack/react-query";
import {getRequest} from "@/shared/modules/getAllRequest.ts";
import {useSearchParams} from "react-router-dom";
import {useDisclosure} from "@mantine/hooks";
import {useForm} from "react-hook-form";
import {postRequest} from "@/shared/modules/postAllRequiest.ts";
import {notifications} from "@mantine/notifications";
import {queryClient} from "@/config/react-query.ts";
import {useState} from "react";
import {putRequest} from "@/shared/modules/putAllRequest.ts";
import {deleteRequest} from "@/shared/modules/deleteAllRequest.ts";

export default function useHook() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [opened, {open, close}] = useDisclosure(false);
    const form = useForm();

    const [id, setId] = useState(null);
    const [completed, setCompleted] = useState(false);


    const {data, isLoading} = useQuery({
        queryKey: ['get-todos', searchParams.get('page')],
        queryFn: () => {
            const params = `?limit=16&skip=${searchParams.get('page') ? (Number(searchParams.get('page')) - 1) * 16 : 0}`;
            return getRequest(`https://dummyjson.com/todos` + params)
        },
        select: (res) => res?.data,
    })

    const changePage = (page: number) => {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            page: String(page)
        })
    }

    const {mutate: createTodo} = useMutation((data: any) => postRequest('https://dummyjson.com/todos/add', data), {
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-todos']})
            close();
            notifications.show({
                title: "Adding Todo",
                message: "New todo successfully added",
                color: "teal",
            });
        }
    })

    const {isFetching: loadingSingleTodo} = useQuery({
        queryKey: ['get-single-todo', id],
        queryFn: () => getRequest(`https://dummyjson.com/todos/${id}`),
        select: (res) => res?.data,
        onSuccess: (res) => {
            form.reset({
                todo: res?.todo
            })
        },
        enabled: !!id
    });

    const {mutate: updateTodo} = useMutation((data: any) => putRequest(`https://dummyjson.com/todos/${id}`, data).then(() => setId(null)), {
        onSuccess: () => {
            form.reset({
                todo: '',
            })
            queryClient.invalidateQueries({queryKey: ['get-todos']})
            close();
            notifications.show({
                title: "Update Todo",
                message: "Todo successfully updated",
                color: "teal",
            });
        }
    })

    const {mutate: deleteTodo} = useMutation((data: any) => deleteRequest(`https://dummyjson.com/todos/${data}`), {
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get-todos']})
            notifications.show({
                title: "Delete Todo",
                message: "Todo successfully deleted",
                color: "red",
            });
        }
    })

    const onSubmit = (data: any) => {
        id ?
            updateTodo({
                todo: data?.todo,
                completed: completed

            })
            : createTodo({
                todo: data.todo,
                completed: false,
                userId: 5
            })
    }


    return {
        form,
        data,
        isLoading,
        changePage,
        opened,
        open,
        close,
        onSubmit,
        id,
        setId,
        loadingSingleTodo,
        setCompleted,
        completed,
        deleteTodo
    }
}
