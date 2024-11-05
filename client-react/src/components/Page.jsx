import React from 'react';
import useGetData from '../hooks/useGetData';
import Loading from './Loading';
import List from './List';


function Page({ endpoint, listName }) {
  console.log({ endpoint, listName })
  const [list, loadingList, error] = useGetData(endpoint);


  console.log({ list, loadingList, error })

  let Items

  switch (listName) {
    case "episodes":
      Items = !loadingList && <List dataList={list.results} title="Episode List" />
      break
    case "locations":
      Items = !loadingList && <List dataList={list.results} title="Location List" />
      break
    case "characters":
      Items = !loadingList && <List dataList={list.results} title="Character List" />
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
        // <EpisodeList episodes={episodes.results} title="Episode List" />
        Items
      )}
    </section>
  );
}

export default Page;
