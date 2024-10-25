import Image from "next/image";
import "../style.css";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="nav">
          <ul>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="header-content">
          <div className="profile-header">
            <h1>
              Hi, I am John,
              <br />
              Creative Technologist
            </h1>
           <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            <br />
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            <br />
            veniam consequat sunt nostrud amet.
          </p>
          <button className="cta-button">Download Resume</button> 
          </div>
          <div className="Image">
              <Image
              src="/profile-photo.png"
              alt="John's Profile Picture"
              width={292}
              height={200}
              className="profile-pic"
            />
            </div>
            </div>

      </header>

      <section className="recent-posts">
        <h2>Recent Post</h2>
        <a href="#" className="view-all">
          View all
        </a>
        <div className="posts-container">
          <div className="post">
            <h3>Making a design system from scratch</h3>
            <p className="p1">12th Feb 2023 | Design, Figma</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="post">
            <h3>Making a design system from scratch</h3>
            <p className="p1">12th Feb 2023 | Design, Figma</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              <br />
              amet sint. Velit officia consequat duis enim velit mollit.
              <br />
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-works">
        <h2>Featured Works</h2>
        <div className="work-container">
          <div className="work">
            <Image
              src="/work1.png"
              alt="Designing Dashboards"
              width={246}
              height={184}
            />
            <div className="work-text">
              <h3>Designing Dashboards</h3>
              <button>2023</button>
              <p>Dashboard</p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                <br />
                amet sint. Velit officia consequat duis enim velit mollit.
                <br />
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="work">
            <Image
              src="/work2.png"
              alt="Designing Dashboards"
              width={246}
              height={184}
            />
            <div className="work-text">
              <h3>Designing Dashboards</h3>
              <button>2023</button>
              <p>Dashboard</p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                <br />
                amet sint. Velit officia consequat duis enim velit mollit.
                <br />
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="work">
            <Image
              src="/work3.png"
              alt="Designing Dashboards"
              width={246}
              height={184}
            />
            <div className="work-text">
              <h3>Designing Dashboards</h3>
              <button>2023</button>
              <p>Dashboard</p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                <br />
                amet sint. Velit officia consequat duis enim velit mollit.
                <br />
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="social-links">
          <a href="#">
            <Image
              src="/icon-facebook.png"
              alt="Facebook"
              width={30}
              height={30}
            />
          </a>
          <a href="#">
            <Image
              src="/icon-twitter.png"
              alt="Twitter"
              width={30}
              height={30}
            />
          </a>
          <a href="#">
            <Image
              src="/icon-instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a href="#">
            <Image
              src="/icon-linkdein.png"
              alt="Lindein"
              width={30}
              height={30}
            />
          </a>
        </div>
        <p>Copyright © 2023 All rights reserved</p>
      </footer>
    </>
  );
}
