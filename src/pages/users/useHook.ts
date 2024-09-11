import {useQuery} from "@tanstack/react-query";
import {getRequest} from "@/shared/modules/getAllRequest.ts";

export default function useHook() {

    const {data, isLoading} = useQuery({
        queryKey: ['get-users'],
        queryFn: () => getRequest(`https://dummyjson.com/users`),
        select: (res) => res?.data,
    })


    return {
        data,
        isLoading,
    }
}
