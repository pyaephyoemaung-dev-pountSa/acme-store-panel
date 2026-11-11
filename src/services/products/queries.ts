import api from "../api"
import { useQuery } from '@tanstack/react-query'
import { productsSchemaWithMeta } from "./schema"

const getProductsByPagination = async (page: number) =>
{
    const response = await api.get(`products?limit=10&skip=${page}`)
    return productsSchemaWithMeta.parse(response.data)
}
export const useProductsPaginationQuery = (page: number) =>
{
    return useQuery({
        queryKey: ['products-pagination', page],
        queryFn:()=> getProductsByPagination(page)
    })
}