export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <img src="./MovieMela.png" alt="logo" />
          <p>
            Welcome to MovieWeb, your ultimate destination for movie reviews,
            trailers, and the latest entertainment news!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_2">
          <h4>EXPLORE</h4>
          <a href="#">Latest Movies</a>
          <a href="#">Top Rated</a>
          <a href="#">Upcoming Releases</a>
          <a href="#">Genres</a>
        </div>
        <div className="content_3">
          <h4>RESOURCES</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="#" target="_blank">
            FAQs
          </a>
          <a href="#" target="_blank">
            Privacy Policy
          </a>
          <a href="#" target="_blank">
            Terms of Service
          </a>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Stay updated with the latest
            <br />
            movie news, reviews, and more!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code by Ramdev Lodhi</p>
        </div>
      </div>
    </footer>
  );
};
