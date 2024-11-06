import React from 'react';
import Character from './Character';

function List({ dataList, dataInfo, title, clickHandler }) {


  const PaginationButtons = () => {

    const buttonClickHandler = (url) => {
      const newUrl = new URL(url)
      const urlParams = new URLSearchParams(newUrl.search)
      const page = urlParams.get("page")

      clickHandler(prev => {
        return prev.slice(0, -1) + page
      })

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    return (
      <div className='mt-8 flex justify-center gap-2 md:gap-8'>
        {dataInfo.prev &&
          <button className="p-1 px-3 bg-emerald-400 text-slate-900 rounded-md border-2 border-slate-900" onClick={() => buttonClickHandler(dataInfo.prev)}>
            Previous page
          </button>
        }
        {dataInfo.next &&
          <button className="p-1 px-3 bg-emerald-400 text-slate-900 rounded-md border-2 border-slate-900" onClick={() => buttonClickHandler(dataInfo.next)}>
            Next page
          </button>
        }
      </div>
    )
  }



  return (
    <article className="p-8 md:p-28 bg-grey-950">
      <div className="p-4 rounded-lg bg-green-200 md:max-w-2xl mx-auto">
        <h2 className="text-gray-900 font-bold text-2xl mb-6">{title}</h2>
        {dataList.length > 0 ?
          <>
            <ul>
              {dataList.map(({ id, name, episode, air_date, type, dimension, image, status, origin, location }, i) => (
                <li
                  key={id + name + i}
                  className=" bg-gray-800 border-b-2 p-4 border-green-200"
                >
                  {title.toLowerCase().includes("episode") &&
                    <div>
                      <p>Name: {name}</p>
                      <p>Air date: {air_date}</p>
                      <p>Episode: {episode}</p>
                    </div>
                  }
                  {title.toLowerCase().includes("location") &&
                    <div>
                      <p>Name: {name}</p>
                      <p>Type: {type}</p>
                      <p>Dimension: {dimension}</p>
                    </div>
                  }
                  {title.toLowerCase().includes("character") &&
                    <div className='flex flex-col sm:flex-row gap-10'>
                      <Character stats={{ id, name, status, origin, location, image }} />

                    </div>
                  }
                  {title.toLowerCase().includes("favorite") &&
                    <div>
                      <p>Name: {name}</p>
                      <p>Type: {type}</p>
                    </div>
                  }
                  {/* <Link
                  to={`/country/${country.countryCode}`}
                  className="block w-full py-2 px-2"
                  >
                  {country.name || country.commonName}
                  </Link> */}
                </li>
              ))}
            </ul>
            {title.toLowerCase().includes("favorite") &&
              <div className='flex justify-center mt-4' >
                <button className='rounded-lg bg-purple-800 hover:bg-purple-600 w-28 p-3 cursor-pointer font-bold transition-all' onClick={() => clickHandler()}>Save my favorites in the cloud </button>
              </div>
            }
            {
              dataInfo && <PaginationButtons />
            }
          </>

          : <p className='text-gray-900 text-xl mb-6'>There are no items in this list</p>
        }
      </div>
    </article>
  );
}

export default List;
