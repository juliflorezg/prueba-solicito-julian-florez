import React, { useContext, useState } from 'react';
import List from './List';
import GlobalDataContext from '../store/globalDataContext';
import useGetData from '../hooks/useGetData';


function FavoritesPage({ endpoint, listName }) {
  console.log({ endpoint, listName })
  const [{ favorites }, setData] = useContext(GlobalDataContext)
  const [response, setResponse] = useState(null)

  const handleSaveFavs = async () => {
    console.log("save in SQL Through nestjs")
    console.log(JSON.stringify(favorites, null, 2))

    try {
      const res = await fetch('/v1/api/nest/favorites/save-all', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(favorites),
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }



  let Items = <List dataList={favorites} title="Your favorites" clickHandler={handleSaveFavs}></List>

  return (
    <section>
      {
        Items
      }
    </section>
  );
}

export default FavoritesPage;
