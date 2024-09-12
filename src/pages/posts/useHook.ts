import {useQuery} from "@tanstack/react-query";
import {getRequest} from "@/shared/modules/getAllRequest.ts";
import {useSearchParams} from "react-router-dom";

export default function useHook() {
    const [searchParams, setSearchParams] = useSearchParams();

    const {data, isLoading} = useQuery({
        queryKey: ['get-users', searchParams.get('page')],
        queryFn: () => {
            const params = `?limit=16&skip=${searchParams.get('page') ? (Number(searchParams.get('page')) - 1) * 16 : 0}`;
            return getRequest(`https://dummyjson.com/posts` + params)
        },
        select: (res) => res?.data,
    })

    const changePage = (page: number) => {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            page: String(page)
        })
    }


    return {
        data,
        isLoading,
        changePage,
    }
}
