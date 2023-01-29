import React from 'react';
import { IoReorderThreeOutline, IoNotificationsOutline } from 'react-icons/io5';
import { AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";

const HomePage = () => {
  return (
    <div className='fle h-full w-full flex-col'>
      <header className="flex h-20 w-full flex-row justify-around items-center bg-white border border-b-[1px] border-gray-200">
        <div>
          <IoReorderThreeOutline className='text-2xl text-gray-600' />
        </div>
        <div className='font-thin text-2xl'>Le Blog App</div>
        <div className='flex items-center space-x-2'>
          <div>
            <IoNotificationsOutline className='text-2xl text-gray-600' />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600"></div>
          </div>
          <div>
            <button className='flex rounded items-center px-4 py-2.5 space-x-4 border border-gray-200
            hover:border-gray-900 hover:text-gray-900 transition
            '>
              <div>Write</div>
              <div>
                <AiFillEdit />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className='grid h-full w-full grid-cols-12 place-items-center'>
        <main className='col-span-8 w-full h-full border-r border-gray-300 py-10 px-24'>
          <div className='flex-col flex w-full space-y-4'>
            <div className='flex w-full items-center space-x-4'>
              <label htmlFor="search" className='relative w-full rounded-lg border border-gray-800'>
                <div className="absolute left-3 flex h-full items-center">
                  <AiOutlineSearch />
                </div>
                <input
                  type="text"
                  name='search'
                  id='search'
                  className='py-1 px-4 pl-8 w-full h-full rounded-lg text-sm outline-none placeholder:text-xs placeholder:text-gray-30 '
                  placeholder="Search..."
                />
              </label>
              <div className="flex items-center w-full space-x-4 justify-end">
                <div>My topics</div>
                <div className="flex space-x-2 items-center">
                  {Array.from({length:4}).map((_, i)=> {
                    return (
                      <div key={i} className='rounded-3xl px-4 py-[2px] bg-gray-200/50'> tag: {i}</div>
                    )
                  }
                  )}
                </div>
              </div>
            </div>
            <div className='w-full justify-between flex items-center border-b border-gray-200 pb-10'>
              <div>
                Articles
              </div>
              <div>
                <button className='flex items-center font-semibold space-x-2 border-gray-400 rounded-3xl border px-3.5 py-1.5'>
                  <div>Following</div>
                  <div>
                    <HiChevronDown className='text-xl' />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col justify-center space-y-8'>
            {
              Array.from({length:5}).map((_,i) => {
                return (
                <div key={i} className='flex group flex-col space-y-8 pb-8 border-b border-gray-200 last:border-none'>
                  <div className='flex w-full items-center space-x-2'>
                    <div className='w-10 h-10 bg-gray-400 rounded-full'></div>
                    <div>
                      <p className='my-font-semibold'>Kiattipan Muangyai &#2022; 22 Dec, 2022</p>
                      <p className='text-sm'>Web Developer</p>
                    </div>
                  </div>
                  <div className='grid w-full grid-cols-12 gap-4'>
                    <div className='col-span-8 flex flex-col space-y-4'>
                      <p className='text-2xl font-bold text-gray-700 group-hover:underline decoration-red-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil rem architecto totam?</p>
                      <p className='text-sm text-gray-500 break-words'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis cupiditate repellendus sequi corporis cumque illum porro incidunt est rem, soluta ea voluptas fugiat quidem itaque earum impedit, sit assumenda animi ratione voluptatibus in modi iusto. Magni, saepe. Minus, eius reprehenderit voluptatem nisi vero dolores eveniet sed sit suscipit facere?</p>
                    </div>
                    <div className='col-span-4'>
                      <div className='h-full w-full rounded-xl bg-gray-300 transition hover:scale-105 hover:duration-100 hover:shadow-sm'></div>
                    </div>
                  </div>
                  <div style={{'marginTop': '1.5rem'}}>
                    <div className='flex w-full items-center justify-start space-x-4'>
                        <div className="flex space-x-2 items-center">
                          {Array.from({length:4}).map((_, i)=> {
                            return (
                              <div key={i} className='rounded-3xl px-4 py-[2px] bg-gray-200/50'> tag: {i}</div>
                            )
                          })}
                        </div>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </main>
        <aside className='col-span-4 flex h-full w-full flex-col space-y-4 p-6'>
          <div>
            <h3 className='my-5 font-semibold'>People you might be interested</h3>
            <div className='flex flex-col space-y-4'>
              {Array.from({length: 4}).map((_, i) => {
                return (
                    <div key={i} className="flex flex-row items-center space-x-5 px-6">
                      <div className='h-10 w-10 flex-none rounded-full bg-gray-300'></div>
                      <div>
                        <div className='text-sm font-bold text-gray-900'>
                          Kiattipan Muangyai
                        </div>
                        <div className='text-xs'>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam minima repudiandae esse excepturi enim incidunt ab provident nam sequi voluptate.
                        </div>
                      </div>
                        <div>
                          <button className='flex items-center space-x-3 rounded border border-gray-400/50 px-4 py-2 transition
                          hover:border-gray-900 hover:text-gray-900'>
                            Follow
                          </button>
                        </div>
                    </div>
                )
              })}
            </div>
          </div>
          <div>
            <h3 className='my-5 font-semibold'>Your reading list</h3>
            <div className='flex flex-col space-y-8'>
              {
                Array.from({length:4}).map((_, i) => {
                  return (
                    <div key={i} className='flex space-x-6 items-center group'>
                      <div className='w-2/5 aspect-square bg-gray-300 rounded-lg h-full'></div>
                      <div className='w-3/5 flex flex-col space-y-2'>
                        <div className='text-lg font-semibold group-hover:underline decoration-red-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe repudiandae vero unde autem magnam facere vel commodi hic eaque fugit.</div>
                        <div className='flex w-full items-center space-x-1'>
                          <div className='w-7 h-7 bg-gray-300 rounded-full'></div>
                          <div className='text-sm'>Kiattipan Muangyai &#x2022;</div>
                          <div className='text-sm'>Dec 20, 2023</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default HomePage