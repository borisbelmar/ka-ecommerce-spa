import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useCart } from '../context/CartContext'
import CartProductItem from './CartProductItem'

export default function CartDrawer() {
  const { isCartOpen, closeCart, cart } = useCart()

  return (
    <Transition appear show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeCart}>
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
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-gray-900 p-6 text-left align-middle shadow-xl transition-all text-white">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-200"
                >
                  Mi carrito
                </Dialog.Title>
                <ul className="flex flex-col gap-4 mt-4">
                  {Object.values(cart).map((cartItem) => (
                    <CartProductItem
                      key={cartItem.product.id}
                      cartItem={cartItem}
                    />
                  ))}
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
