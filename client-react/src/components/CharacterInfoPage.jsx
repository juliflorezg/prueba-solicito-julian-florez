import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useGetData from '../hooks/useGetData';

function CharacterInfoPage({ endpoint }) {
  const { id } = useParams();
  const [data, loading, error] = useGetData(`${endpoint}/${id}`);
  const [episodeNames, setEpisodeNames] = useState([]);
  const [loadingEpisodes, setLoadingEpisodes] = useState(false);

  useEffect(() => {
    if (data && data.episode) {
      setLoadingEpisodes(true);

      Promise.all(data.episode.map((episodeUrl) =>
        fetch(episodeUrl)
          .then((response) => response.json())
          .then((episodeData) => episodeData.name)
      ))
        .then((names) => {
          setEpisodeNames(names);
          setLoadingEpisodes(false);
        })
        .catch(() => setLoadingEpisodes(false));
    }
  }, [data]);

  return (
    <main className={`mx-auto min-h-screen pb-16`}>
      <a className="no-underline text-blue-950" href="/">
        <button className="absolute top-3 left-3 p-4 rounded-lg bg-cyan-400">
          Go home
        </button>
      </a>

      <section>
        {loading ? (
          <Loading message={"Loading character info..."} />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <article className="flex flex-col md:flex-row items-center justify-center gap-3 w-full px-4 bg-teal-100 py-4 md:py-8 text-slate-800">
              <h1 className="text-blue-950">{data.name}</h1>
              <div className="max-w-36">
                <img
                  src={data.image || "https://upload.wikimedia.org/wikipedia/commons/1/19/Unknown_flag.svg"}
                  alt={`Image for ${data.name}`}
                  className="w-full"
                />
              </div>
            </article>

            <section className="mt-4 px-4">
              <h2 className="text-lg font-semibold mb-2">Episodes:</h2>
              {loadingEpisodes ? (
                <Loading message="Loading episodes..." />
              ) : (
                <ul className="list-disc pl-5 space-y-1">
                  {episodeNames.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </section>
    </main>
  );
}

export default CharacterInfoPage;
