import { createColumnHelper } from '@tanstack/react-table'

import type { DataTableFeatures } from './data-table-features'
import type { IProduct } from '#/services/products/types'
import { Badge } from '#/components/ui/badge'
import { cn } from 'cn'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'
import { Button } from '#/components/ui/button'
import { Eye, MoreHorizontal, Pencil, Trash } from 'lucide-react'

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, IProduct>()

const createColumns = (onViewProduct: (product: IProduct) => void) =>
  columnHelper.columns([
    columnHelper.accessor('thumbnail', {
      header: 'Thumbnail',
      cell: ({ row }) => {
        const img = row.original.thumbnail
        return <img src={img} className="size-8" />
      },
    }),
    columnHelper.accessor('title', {
      header: 'Title',
      cell: ({ row }) => {
        const title = row.original.title
        return <span className="text-sm font-sans">{title}</span>
      },
    }),
    columnHelper.accessor('category', {
      header: 'Category',
      cell: ({ row }) => {
        const category = row.original.category
        return <Badge className="bg-[#a3a3a3]">{category}</Badge>
      },
    }),
    columnHelper.accessor('brand', {
      header: 'Brand',
      cell: ({ row }) => {
        const brand = row.original.brand
        return <span className="text-sm font-sans">{brand}</span>
      },
    }),

    columnHelper.accessor('tags', {
      header: 'Tags',
      cell: ({ row }) => {
        const tags = row.original.tags
        return (
          <div className="gap-1 flex">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-[#a3a3a3]">
                {tag}
              </Badge>
            ))}
          </div>
        )
      },
    }),
    columnHelper.accessor('stock', {
      header: 'Stock',
    }),
    columnHelper.accessor('price', {
      header: 'Price',
      cell: ({ row }) => {
        const amount = row.original.price
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount)

        return <div className="text-right font-medium">{formatted}</div>
      },
    }),
    columnHelper.accessor('availabilityStatus', {
      header: 'Status',
      cell: ({ row }) => {
        const status = row.original.availabilityStatus
        return (
          <Badge
            className={cn(
              status === 'In Stock'
                ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300'
                : status === 'Low Stock'
                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300'
                  : 'bg-destructive',
            )}
          >
            {status}
          </Badge>
        )
      },
    }),

    columnHelper.display({
      id: 'actions',
      cell: ({ row }) => {
        const product = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem variant="default" onSelect={() => onViewProduct(product)}>
                  <Eye/> View
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Pencil />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <Trash />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    }),
  ])

export default createColumns
