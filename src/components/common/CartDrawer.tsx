import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useCart } from '../context/CartContext'
import CartProductItem from './CartProductItem'
import Button from './Button'

export default function CartDrawer() {
  const { isCartOpen, closeCart, cart, totalPrice } = useCart()

  return (
    <Transition appear show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 overflow-hidden" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full justify-end">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transform transition ease-in-out duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-gray-900 p-6 text-left align-middle shadow-xl transition-all text-white flex flex-col">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-200"
                >
                  Mi carrito
                </Dialog.Title>
                <ul className="flex flex-col mt-4 divide-y divide-gray-800 flex-1">
                  {Object.values(cart).map((cartItem) => (
                    <CartProductItem
                      key={cartItem.product.id}
                      cartItem={cartItem}
                    />
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-semibold">Total</p>
                  <p className="text-lg font-bold">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <Button
                  className="mt-4"
                  onClick={closeCart}
                  aria-label="Checkout"
                >
                  Checkout
                </Button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
