import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

DropDonw.defaultProps = {
  title: "my title",
  items: ["item one", "item two"]
}

export default function DropDonw({ title, items, getItem }) {
  const [item, setItem] = useState(items?.[0])
  function handleSelectItem(item) {
    setItem(item)
    getItem?.(item)
  }
  return (
    <div className='flex justify-between items-center z-40'>
      <Menu as="div" className="relative w-max inline-block text-left  border-none outline-none">
        <div>
          <Menu.Button className="inline-flex w-full justify-center border-none outline-none gap-x-1.5 rounded-md text-white px-3 py-2 text-xs font-semibold bg-maroon shadow-sm ring-1 ring-inset ring-gray-300 cursor-pointer">
            {item}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-max border-none outline-none origin-top-right rounded-md bg-maroon shadow-lg  ">
            <div className="py-1">
              {items?.map(item => (
                <Menu.Item key={item} >
                  <div
                    className={'text-gray-700 border-none outline-none block px-4 py-2 text-sm cursor-pointer'}
                    onClick={() => handleSelectItem(item)}
                  >
                    {item}
                  </div>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div>
        <b>
          <small dir='rtl' className=' text-white opacity-55 cursor-default'>
            {title}
          </small>
        </b>
      </div>
    </div>
  )
}