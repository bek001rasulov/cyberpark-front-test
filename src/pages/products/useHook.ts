import {useQuery} from "@tanstack/react-query";
import {getRequest} from "@/shared/modules/getAllRequest.ts";
import {useSearchParams} from "react-router-dom";

export default function useHook() {
    // const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();


    const {data, isLoading} = useQuery({
        queryKey: ['get-products', searchParams.get('page')],
        queryFn: () => getRequest(`https://dummyjson.com/products?limit=16&skip=${searchParams.get('page')}`),
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
