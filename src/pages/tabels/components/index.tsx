import { useState } from 'react'
import { DataTable } from './data-table'
import { useProductsPaginationQuery } from '#/services/products/queries'
import createColumns from './columns'
import ProductDialog from './dialog'
import type { IProduct } from '#/services/products/types'

const DemoPage = () => {
  const [page, setPage] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const { data } = useProductsPaginationQuery(page * 10)
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={createColumns((product) => {
          setSelectedProduct(product)
          setOpenDialog(true)
        })}
        data={data?.products || []}
        pageCount={data?.total ? Math.floor(data.total / 10) : 0}
        pageIndex={page}
        onPaginationChange={(p) => setPage(p)}
      />
      <ProductDialog
        product={selectedProduct}
        open={openDialog}
        onOpenChange={setOpenDialog}
      />
    </div>
  )
}
export default DemoPage
