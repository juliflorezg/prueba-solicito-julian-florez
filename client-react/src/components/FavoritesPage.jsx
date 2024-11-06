import React, { useContext } from 'react';
import useGetData from '../hooks/useGetData';
import Loading from './Loading';
import List from './List';
import GlobalDataContext from '../store/globalDataContext';


function FavoritesPage({ endpoint, listName }) {
  console.log({ endpoint, listName })
  const [{ favorites }, setData] = useContext(GlobalDataContext)
  // const [list, loadingList, error] = useGetData(endpoint);

  const handleSaveFavs = () => {
    console.log("save in SQL Through nestjs")
    console.log(JSON.stringify(favorites, null, 2))
  }



  let Items = <List dataList={favorites} title="Your favorites" clickHandler={handleSaveFavs}></List>



  return (
    <section>
      {
        Items
      }
      {/* {loadingList ? (
        <Loading message={`Loading list for ${listName}...`} />
      ) : error ? (
        <Error message={error} />
      ) : (
        // <EpisodeList episodes={episodes.results} title="Episode List" />
        Items
      )} */}
    </section>
  );
}

export default FavoritesPage;
