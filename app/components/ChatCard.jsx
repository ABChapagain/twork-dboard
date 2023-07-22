'use client'
import Link from 'next/link'

export const datas = [
  {
    id: 1,
    image:
      'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1060&t=st=1688720677~exp=1688721277~hmac=337e2f2b7abbb9b767351521a7f72ab311839e673e4114dbb1e96efe9fe5b818',
    name: 'Devid Heilo',
    message: 'Hello, how are you?',
    time: '12 min',
    unread: 3,
  },
  {
    id: 2,
    image: '/images/avatars/avatar-2.jpg',
    name: 'Henry Fisher',
    message: 'I am waiting for you',
    time: '5:54 PM',
    unread: 0,
  },
  {
    id: 3,
    image: '/images/avatars/avatar-3.jpg',
    name: 'Wilium Smith',
    message: 'Where are you now?',
    time: '10:12 PM',
    unread: 0,
  },
  {
    id: 4,
    image: '/images/avatars/avatar-4.jpg',
    name: 'Henry Deco',
    message: 'Thank you so much!',
    time: 'Sun',
    unread: 2,
  },
]

const ChatCard = () => {
  return (
    <div className='col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4'>
      <h4 className='mb-6 px-7.5 text-xl font-semibold text-black dark:text-white'>
        Chats
      </h4>

      <div>
        {datas?.map((data) => (
          <Link
            key={data.id}
            href='/'
            className='flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4'
          >
            <div className='relative h-14 w-14'>
              <img
                className='rounded-full h-14 w-14 object-cover'
                src={data.image}
                alt='User'
              />
              <span className='absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3'></span>
            </div>

            <div className='flex flex-1 items-center justify-between'>
              <div>
                <h5
                  className={`font-medium ${
                    data.unread === 0 ? '' : 'text-black dark:text-white'
                  } `}
                >
                  {data.name}
                </h5>
                <p>
                  <span
                    className={`text-sm ${
                      data.unread === 0 ? '' : 'text-black dark:text-white'
                    } `}
                  >
                    {data.message}
                  </span>
                  <span className='text-xs'> {data.time}</span>
                </p>
              </div>
              {data.unread === 0 ? null : (
                <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary'>
                  <span className='text-sm font-medium text-white'>
                    {data.unread}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ChatCard
