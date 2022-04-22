import { useEffect } from 'react'
import { AxiosResponse } from 'axios'
export const useAsync = (
    asyncFn: () => Promise<AxiosResponse<any, any>>,
    successFn: Function,
    returnFn: Function,
    deps: any[] = []
) => {
    useEffect(() => {
        let isActive = true;
        asyncFn().then(({ data }) => { if(isActive) successFn(data) } );
        return () => {
            returnFn && returnFn();
            isActive = false;
        }
    }, deps)
}