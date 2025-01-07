export const About = () => {
  return (
    <>
      <section className="container">
        <section className="about-hero">
          <h1>About MovieMela</h1>
        </section>
        <p className="intro-text">
          Discover the magic of movies with MovieMela!
        </p>
        <section className="about-content">
          <div className="content-section">
            <h2>Our Story</h2>
            <p>
              MovieMela was born out of our love for cinema and storytelling.
              Whether you&apos;re a fan of action-packed blockbusters, romantic
              comedies, thrilling dramas, or inspiring documentaries, MovieMela
              is your go-to destination for everything movies.
            </p>
          </div>

          <div className="content-section">
            <h2>Why MovieMela?</h2>
            <ul>
              <li>
                🎥 <strong>Discover Movies:</strong> Explore a vast collection
                of movies across genres and languages.
              </li>
              <li>
                ⭐ <strong>Top Ratings & Reviews:</strong> Get insights from
                movie enthusiasts and critics.
              </li>
              <li>
                📅 <strong>Latest Releases:</strong> Stay updated with the
                newest blockbusters and indie films.
              </li>
              <li>
                🎬 <strong>Your Watchlist:</strong> Create and customize your
                own watchlist for must-watch movies.
              </li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Our Vision</h2>
            <p>
              At MovieMela, we believe that movies have the power to bring
              people together, spark conversations, and open up new worlds. Our
              vision is to build a community of movie lovers where everyone can
              share their passion for cinema and find their next favorite film.
            </p>
          </div>

          <div className="content-section creator-card">
            <h2>About the Creator</h2>
            <div className="creator-profile">
              <img
                src="./mr.ramdevlodhi.jpg"
                alt="Ramdev Lodhi"
                className="creator-image"
              />
              <div className="creator-details">
                <h3>Mr. Ramdev Lodhi</h3>
                <p>
                  Hi, I&apos;m Ramdev Lodhi, the creator of MovieMela! As a
                  passionate movie enthusiast and a dedicated developer, I
                  created MovieMela to bring together a community of film
                  lovers. This platform is my effort to make discovering and
                  enjoying movies more exciting and accessible.
                </p>
                <p>
                  I hope you enjoy using MovieMela as much as I enjoyed building
                  it. If you have feedback, suggestions, or just want to chat
                  about movies, feel free to connect with me through the contact
                  page. Let&apos;s celebrate the world of cinema together!
                </p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Join Us</h2>
            <p>
              Join our growing community of film enthusiasts and take your
              movie-watching experience to the next level. Dive into the world
              of movies with MovieMela today!
            </p>
          </div>
        </section>
      </section>
    </>
  );
};
