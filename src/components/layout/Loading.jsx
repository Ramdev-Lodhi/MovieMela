export const Loading = () => {
  return (
    <div className="container loader-section">
      <div className="loader"></div>
    </div>
  );
};

export const MovieCardSkeletonAnimation = () => {
  return (
    <ul className="container grid grid-four--cols">
      {Array.from({ length: 12 }).map((_, index) => (
        <li key={index} className="hero-container">
          <div className="main-container animate-pulse flex">
            <div className="poster-container">
              <div className="poster flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
            </div>
            <div className="ticket-container flex-1">
              <div className="ticket__content">
                <div className="h-20 flex bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const MovieCardDetialsAnimation = () => {
  return (
    <li className="hero-container-card-details hero-movie-container h-[400px]">
      <div className="movie-main-container animate-pulse flex">
        <figure className="movie">
          <div className="movie__hero flex w-full">
            <div className="flex items-center justify-center w-full bg-gray-300 rounded dark:bg-gray-300">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
          </div>
          <div className="movie__content">
            <div className="movie__title flex gap-4 items-center  mb-4 justify-between">
              <div className="w-1/2 h-9 bg-gray-300 rounded dark:bg-gray-300"></div>
              <div className="flex gap-4 items-center mb-4 ">
                <div className="w-20 h-9 bg-gray-300 rounded-full dark:bg-gray-300"></div>
                <div className="w-20 h-9 bg-gray-300 rounded-full dark:bg-gray-300"></div>
              </div>
            </div>

            <p className="movie__description items-cente bg-gray-300 h-20 w-full mb-20 rounded"></p>
            <p className="movie__description items-cente bg-gray-300 h-16 w-1/2 mb-20 rounded"></p>

            <div className="movie__details flex flex-row gap-2">
              <div className="movie__detail flex items-center gap-2">
                <div className="w-64 h-8 bg-gray-300 rounded"></div>
                <span className="w-10 h-8 bg-gray-300 rounded-full"></span>
              </div>
              <div className="movie__detail flex items-center gap-2">
                <div className="w-28 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="movie__detail flex items-center gap-2">
                <div className="w-20 h-8 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="mt-4">
              <div className="w-full h-10 bg-gray-300 rounded text-center"></div>
            </div>
          </div>
          <div className="movie__price bg-gray-300 h-full w-20 rounded"></div>
        </figure>
      </div>
    </li>
  );
};
