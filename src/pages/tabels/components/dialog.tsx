import { Button } from '#/components/ui/button'
import type { IProduct } from '#/services/products/types'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface ProductDialogProps {
  product: IProduct | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function ProductDialog({ product, open, onOpenChange }: ProductDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
          <DialogDescription>View product information.</DialogDescription>
        </DialogHeader>

        {product && (
          <div className="space-y-3">
            <p>Name: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
          </div>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDialog
