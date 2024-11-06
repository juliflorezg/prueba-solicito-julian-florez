import React, { useState } from 'react';
import useGetData from '../hooks/useGetData';
import Loading from './Loading';
import List from './List';


function Page({ endpoint, listName }) {
  console.log({ endpoint, listName })
  const [ept, setEpt] = useState(endpoint) // endpoint, used for pagination 

  const [list, loadingList, error] = useGetData(ept);


  console.log({ list, loadingList, error })

  let Items

  switch (listName) {
    case "episodes":
      Items = !loadingList && <List dataList={list.results} dataInfo={list.info} title="Episode List" clickHandler={setEpt} />
      break
    case "locations":
      Items = !loadingList && <List dataList={list.results} dataInfo={list.info} title="Location List" clickHandler={setEpt} />
      break
    case "characters":
      Items = !loadingList && <List dataList={list.results} dataInfo={list.info} title="Character List" clickHandler={setEpt} />
      break
    default:
      Items = null;
  }


  return (
    <section>
      {loadingList ? (
        <Loading message={`Loading list for ${listName}...`} />
      ) : error ? (
        <Error message={error} />
      ) : (
        Items
      )}
    </section>
  );
}

export default Page;
