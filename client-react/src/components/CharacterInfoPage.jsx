import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useGetData from '../hooks/useGetData';

function CharacterInfoPage({ endpoint }) {
  const { id } = useParams();

  const [data, loading, error] = useGetData(`${endpoint}/${id}`);


  return (
    <main className={`mx-auto min-h-screen pb-16`}>
      <a className="no-underline text-blue-950" href="/">
        <button className="absolute top-3 left-3 p-4 rounded-lg bg-cyan-400">
          Go home
        </button>
      </a>

      <section>
        {loading ? (
          <Loading message={"Loading country info"} />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <article className="flex flex-col md:flex-row items-center justify-center gap-3 w-full px-4 bg-teal-100 py-4 md:py-8">
              {/* <h1 className="text-blue-950">{countryInfo.countryName}</h1>
              <div className="max-w-36">
                <img
                  src={countryInfo.flagURL ? countryInfo.flagURL : "https://upload.wikimedia.org/wikipedia/commons/1/19/Unknown_flag.svg"}
                  alt="flag for country"
                  className="w-full"
                />
              </div> */}
            </article>

          </>
        )}
      </section>
    </main>
  );
}

export default CharacterInfoPage;
