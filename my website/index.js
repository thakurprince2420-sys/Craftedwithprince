import Image from 'next/image';
import { useState, useEffect } from 'react';

// Editable project/video data
const projects = [
  {
    type: 'ebook',
    title: 'My Noida Adventure Story',
    image: '/ebook-cover.jpg',
    description:
      'My First Day in Noida is a 21-page eBook where I combined storytelling with visual design. The project focused on creating a clean layout, consistent typography, and a reader-friendly flow. It captures real-life experiences in a professional format, showing how narrative and design can work together to engage an audience.',
    viewUrl: 'https://www.canva.com/design/DAGx7_Akymc/PdnHbe2Y--SDcNavOn-2Hw/edit?utm_content=DAGx7_Akymc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    downloadUrl: 'https://drive.google.com/file/d/1LmcBIeBjeS-nQurI-yINlAAIr84KuCOh/view?usp=drive_link'
  },
  // Add more projects here if needed
];

const thumbnails = [
  {
    title: 'Bankbenchers Funny Video',
    image: '/backbenchers-thumb.jpg',
    canvaUrl: 'https://www.canva.com/design/DAF39WfZPPM/WpVUOPGBgfUeBl-ubVdRGQ/edit?utm_content=DAF39WfZPPM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    title: 'Batman Thumbnail',
    image: '/batman-thumb.jpg',
    canvaUrl: 'https://www.canva.com/design/DAGfPsLs_k8/qw03yqrQn7SZITVOc9CXYg/edit?utm_content=DAGfPsLs_k8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    title: 'Nexit Construction',
    image: '/nexit-thumb.jpg',
    canvaUrl: 'https://www.canva.com/design/DAGfPsLs_k8/qw03yqrQn7SZITVOc9CXYg/edit?utm_content=DAGfPsLs_k8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
];

const videos = [
  {
    title: 'Horror Blog Teaser',
    image: '/horror-blog-thumb.jpg',
    youtubeUrl: 'https://youtu.be/XlN8PEfQ5mk?si=hlqvEa9tdyoXcKmN',
  },
  {
    title: 'Lisa Fan Made Hindi Music Video',
    image: '/lisa-fanmade-thumb.jpg',
    youtubeUrl: 'https://youtu.be/yZCFKhefQJU?si=9eYrA1w7H-ZzaAc5',
  },
  // Add more videos easily here
];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Auto dark/light mode by time (manual toggle also)
    const hour = new Date().getHours();
    setDark(hour >= 19 || hour < 7);
  }, []);

  return (
    <div className={dark ? 'dark' : ''}>
      <header className="header">
        <div>
          <Image
            src="/logo.png"
            alt="Craftedwithprince Logo"
            width={120}
            height={120}
            className="logo-animate"
          />
        </div>
        <div className="tagline">
          Graphic & Catalogue Designer | Skilled in Canva, MS Excel, PowerPoint, AI tools
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#thumbnails">YouTube Thumbnails</a>
          <a href="#videos">My Video Edit</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="toggle-mode"
          onClick={() => setDark((d) => !d)}
          title="Toggle dark/light mode"
        >
          {dark ? '🌞' : '🌙'} Mode
        </button>
      </header>
      <main>
        {/* About Me */}
        <section id="about" className="card">
          <h2>About Me</h2>
          <p>
            Hi, I'm <b>Prince</b>, a Graphic Designer helping startups and small businesses with catalogues, social media posts, and logos. Skilled in Canva, AI tools, and data annotation, I create professional visuals that combine creativity and technology.
          </p>
          <div className="social-row">
            <a href="https://www.instagram.com/designswithprince/" target="_blank" rel="noopener" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://princeportfoliowork.my.canva.site/" target="_blank" rel="noopener" title="Portfolio">
              <i className="fa fa-globe"></i>
            </a>
            <a href="https://www.linkedin.com/in/prince-chauhan-018b98340" target="_blank" rel="noopener" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/craftedbyprince" target="_blank" rel="noopener" title="X (Twitter)">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((p) => (
              <div key={p.title} className="project-card ebook-card">
                <Image src={p.image} alt={p.title} width={320} height={180} />
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <a href={p.viewUrl} target="_blank" rel="noopener" className="view-btn">View E-Book</a>
                <a href={p.downloadUrl} target="_blank" rel="noopener" className="download-btn" title="Download E-Book">
                  <i className="fas fa-download"></i>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Thumbnails */}
        <section id="thumbnails">
          <h2>YouTube Thumbnails (Canva Previews)</h2>
          <div className="thumb-list">
            {thumbnails.map((t) => (
              <div key={t.title} className="thumb-card project-card">
                <Image src={t.image} alt={t.title} width={320} height={180} />
                <h3>{t.title}</h3>
                <a href={t.canvaUrl} target="_blank" rel="noopener" className="view-btn">Preview on Canva</a>
              </div>
            ))}
          </div>
        </section>

        {/* My Video Edit */}
        <section id="videos">
          <h2>My Video Edit</h2>
          <div className="video-list">
            {videos.map((v) => (
              <div key={v.title} className="video-card project-card">
                <Image src={v.image} alt={v.title} width={320} height={180} />
                <h3>{v.title}</h3>
                <a href={v.youtubeUrl} target="_blank" rel="noopener" className="view-btn">Watch on YouTube</a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="card">
          <h2>Contact</h2>
          <p>
            Interested in working together or want to say hello? Email me:&nbsp;
            <a href="mailto:thakurprince2420@gmail.com" className="btn">thakurprince2420@gmail.com</a>
          </p>
        </section>
      </main>
      <footer>
        &copy; 2025 Craftedwithprince | Designed by Prince
      </footer>
      {/* FontAwesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <style jsx global>{`
        :root {
          --primary: #20435c;
          --secondary: #e6842a;
          --accent: #a83d4d;
          --bg: #f6f4ee;
          --text: #222;
          --card: #fff;
          --shadow: 0 4px 24px rgba(0,0,0,0.1);
        }
        .dark {
          --primary: #f6f4ee;
          --bg: #23272f;
          --text: #f6f4ee;
          --card: #2c2f36;
          --shadow: 0 4px 24px rgba(0,0,0,0.3);
        }
        body, .dark body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Montserrat', 'Roboto', Arial, sans-serif;
          margin: 0;
        }
        .header {
          text-align: center;
          padding: 2.5rem 1rem 1.2rem 1rem;
          background: var(--card);
          box-shadow: var(--shadow);
          position: relative;
        }
        .logo-animate {
          margin: 0 auto 1.2rem;
          display: block;
          animation: logoIn 1.2s cubic-bezier(.6,0,.39,.98);
        }
        @keyframes logoIn {
          0% { opacity:0; transform:scale(0.7) rotate(-15deg);}
          60% {opacity:1; transform:scale(1.15) rotate(10deg);}
          100% {opacity:1; transform:scale(1) rotate(0);}
        }
        .tagline {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        nav {
          margin: 0.7rem auto 0;
          display: flex;
          justify-content: center;
          gap: 2rem;
          font-size: 1.08rem;
          font-weight: 500;
        }
        nav a {
          color: var(--primary);
          text-decoration: none;
          transition: color 0.2s;
        }
        nav a:hover { color: var(--secondary);}
        .toggle-mode {
          position: absolute;
          right: 2rem;
          top: 2rem;
          cursor: pointer;
          font-size: 1.35rem;
          background: var(--secondary);
          color: #fff;
          border: none;
          border-radius: 1.2rem;
          padding: 0.45rem 1rem;
          transition: background 0.2s, color 0.2s;
        }
        main {
          max-width: 900px;
          margin: 2rem auto;
          padding: 1rem;
        }
        section {
          margin-bottom: 2.5rem;
        }
        h2 { font-size: 2rem; color: var(--primary); margin-bottom: 1.3rem;}
        .card, .project-card, .ebook-card {
          background: var(--card);
          border-radius: 1rem;
          box-shadow: var(--shadow);
          padding: 1.3rem;
          margin-bottom: 1.2rem;
          transition: background 0.3s;
        }
        .about-me p { font-size: 1.18rem; line-height:1.7;}
        .social-row {
          display: flex;
          gap: 1.3rem;
          margin-top: 0.8rem;
        }
        .social-row a {
          font-size: 1.65rem;
          color: var(--accent);
          text-decoration: none;
          transition: color 0.2s;
        }
        .social-row a:hover { color: var(--secondary);}
        .project-list, .thumb-list, .video-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 1.3rem;
        }
        .project-card img, .thumb-card img, .ebook-card img, .video-card img {
          width:100%; border-radius: 0.65rem; box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          margin-bottom:0.7rem;
          object-fit:cover;
          max-height: 180px;
        }
        .project-card h3, .thumb-card h3, .video-card h3, .ebook-card h3 {
          margin: 0.2rem 0 0.5rem 0;
          color: var(--primary);
          font-size: 1.12rem;
        }
        .project-card p, .thumb-card p, .video-card p, .ebook-card p {
          font-size: 1rem;
          margin-bottom: 0.6rem;
        }
        .btn, .view-btn, .download-btn {
          display: inline-block;
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: 0.6rem;
          padding: 0.4rem 1rem;
          font-size: 1rem;
          text-decoration: none;
          margin-right:0.5rem;
          transition: background 0.2s;
        }
        .btn:hover, .view-btn:hover, .download-btn:hover { background: var(--secondary);}
        .download-btn {
          padding: 0.4rem 0.7rem;
          background: var(--primary);
          font-size: 1.2rem;
          vertical-align: middle;
        }
        .download-btn i {
          font-size: 1.3rem;
          vertical-align: middle;
        }
        footer {
          text-align:center;
          padding:1.2rem;
          background:var(--card);
          color:var(--primary);
          font-size:1rem;
        }
        @media (max-width: 600px) {
          .header { padding: 1.2rem 0.3rem;}
          .logo-animate { width: 78px;}
          nav { gap: 1rem; font-size: 1rem;}
          main { padding: 0.5rem;}
          h2 { font-size: 1.3rem;}
          .project-list, .thumb-list, .video-list { grid-template-columns: 1fr;}
        }
      `}</style>
    </div>
  );
}