import {useQuery} from "@tanstack/react-query";
import {getRequest} from "@/shared/modules/getAllRequest.ts";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDebouncedValue} from "@mantine/hooks";
import {useEffect} from "react";

export default function useHook() {
    const [searchParams, setSearchParams] = useSearchParams();
    const form = useForm({
        defaultValues: {
            search: searchParams.get("search") ?? "",
        }
    })
    const [searchValue] = useDebouncedValue(form.watch('search'), 200);


    const {data, isLoading} = useQuery({
        queryKey: ['get-products', searchParams.get('page'), searchValue],
        queryFn: () => {
            const params = `?limit=16&skip=${searchParams.get('page') ? (Number(searchParams.get('page')) - 1) * 16 : 0}&q=${searchValue}`;
            return getRequest(`https://dummyjson.com/products/search` + params)
        },
        select: (res) => res?.data,
    })


    const changePage = (page: number) => {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            page: String(page)
        })
    }

    useEffect(() => {
        if (searchValue?.length > 0) {
            setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                search: searchValue,
            });
        } else {
            searchParams.delete("search");
            setSearchParams(searchParams);
        }
    }, [searchValue, searchParams, setSearchParams]);


    return {
        form,
        data,
        isLoading,
        changePage,
    }
}
