export const datas = [
  {
    id: 1,
    name: 'Google',
    visitors: '3.5K',
    revenues: '$5,768',
    sales: '590',
    conversion: '4.8%',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png',
  },
  {
    id: 2,
    name: 'Twitter',
    visitors: '2.2K',
    revenues: '$4,635',
    sales: '467',
    conversion: '4.3%',
    image:
      'https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c',
  },
  {
    id: 3,
    name: 'Github',
    visitors: '2.1K',
    revenues: '$4,290',
    sales: '420',
    conversion: '3.7%',
    image:
      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },

  {
    id: 5,
    name: 'Facebook',
    visitors: '1.2K',
    revenues: '$2,740',
    sales: '230',
    conversion: '1.9%',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png',
  },
]

const TableData = () => {
  return (
    <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
      <h4 className='mb-6 text-xl font-semibold text-black dark:text-white'>
        Top Channels
      </h4>

      <div className='flex flex-col'>
        <div className='grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5'>
          <div className='p-2.5 xl:p-5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Source
            </h5>
          </div>
          <div className='p-2.5 text-center xl:p-5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Visitors
            </h5>
          </div>
          <div className='p-2.5 text-center xl:p-5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Revenues
            </h5>
          </div>
          <div className='hidden p-2.5 text-center sm:block xl:p-5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Sales
            </h5>
          </div>
          <div className='hidden p-2.5 text-center sm:block xl:p-5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Conversion
            </h5>
          </div>
        </div>
        {datas.map((data) => (
          <div
            key={data.id}
            className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5'
          >
            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
              <div className='avatar flex-shrink-0'>
                <img
                  className='rounded-full w-10 h-10'
                  src={data.image}
                  alt='Brand'
                />
              </div>
              <p className='hidden text-black dark:text-white sm:block'>
                Google
              </p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='text-black dark:text-white'>{data.visitors}</p>
            </div>

            <div className='flex items-center justify-center p-2.5 xl:p-5'>
              <p className='text-meta-3'>{data.revenues} </p>
            </div>

            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
              <p className='text-black dark:text-white'>{data.sales} </p>
            </div>

            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
              <p className='text-meta-5'>{data.conversion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableData
