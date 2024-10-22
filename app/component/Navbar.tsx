import Link from "next/link";
import Image from "next/image";
import "../style.css";

export default function NavBar() {
  return (
    <div className="box1">
      <nav className="nav">
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={85} height={60} />
          <span>GIAIC</span>
        </div>
        <div className="navs">
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Latest</Link>
          </li>
          <li>
            <Link href="/">Category</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Feedback</Link>
          </li>
        </ul>
        </div>
      </nav>
      <div className="blog-main">
      <div className="blog">
        <Image src="/flag.png" alt="flag" width={700} height={400}/>
        <h3>
          Israeli foreign minister claims Hamas leader Yahya Sinwar killed in
          Gaza operation
          </h3>
        <p className="para">
          The audience on Wednesday was sent rolling in the aisles when the
          murder-espionage dramedy "The 39 Steps" opened on the 21st day of the
          ongoing World Culture Festival at the Arts Council of Pakistan (ACP)
          in Karachi
        </p>
      </div>
       <div className="blog2">
       <div className="b1">
    <Image src={"/prime.png"} alt="Prime" width={235.59} height={164.5}/>        
    <div className="text-container">
        <h4>Senate session, cabinet meeting set to begin as efforts underway to pass constitutional amendment</h4>
        <button>Read More</button>
    </div>
</div>

<div className="b2">
    <Image src={"/cirketer.png"} alt="circketer" width={235.59} height={164.5}/>        
    <div className="text-container">
        <h4>World Culture Festival: Audience takes 'The 39 Steps' for laughs of their lives</h4>
        <button>Read More</button>
    </div>
</div>

<div className="b3">
    <Image src={"/man.png"} alt="Foriener" width={235.59} height={164.5}/>        
    <div className="text-container">
        <h4>Steve Martin drops mysterious clue on Martin Short, Meryl Steep's romance</h4>
        <button>Read More</button>
    </div>
</div>

       
</div>
</div>
    </div>
    
  );
}

