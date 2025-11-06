<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OthmanIQ | Tech & Student Life</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <div class="logo">Othman<span>IQ</span></div>
    <nav>
      <a href="#">Home</a>
      <a href="#">Articles</a>
      <a href="about.html">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h2>Learn Smart. Live Smart — OthmanIQ Tech & Student Guides</h2>
    <div class="icons">
      <img src="https://cdn-icons-png.flaticon.com/512/2172/2172892.png" alt="icon">
      <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="icon">
      <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="icon">
      <img src="https://cdn-icons-png.flaticon.com/512/2331/2331942.png" alt="icon">
    </div>
  </section>

  <section class="articles">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1581091870622-1a11f3e2cc12" alt="">
      <h3>How Students Can Learn Coding from Home</h3>
      <p>Step-by-step tips to start your tech learning journey, even if you’re just beginning!</p>
    </div>
    <div class="card">
      <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9" alt="">
      <h3>Top Free Tools Every Tech Student Should Know</h3>
      <p>Discover the best free software and platforms that make studying and coding easier.</p>
    </div>
    <div class="card">
      <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="">
      <h3>Balancing Studies & Projects Like a Pro</h3>
      <p>Simple productivity hacks that help you stay focused, creative, and motivated.</p>
    </div>
  </section>

  <footer>
    <p>© 2025 OthmanIQ | Built with ❤️ and curiosity</p>
  </footer>
</body>
</html>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.logo {
  font-weight: 700;
  font-size: 1.5rem;
}
.logo span {
  color: #1e90ff;
}

nav a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
nav a:hover {
  color: #1e90ff;
}

.hero {
  text-align: center;
  padding: 2rem 1rem;
  background: #e8f1ff;
}
.hero h2 {
  margin-bottom: 1rem;
  font-weight: 600;
}
.icons img {
  width: 60px;
  margin: 10px;
  filter: grayscale(30%);
}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
}
.card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}
.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.card h3 {
  margin: 1rem;
  font-size: 1.1rem;
  color: #222;
}
.card p {
  margin: 0 1rem 1.5rem;
  font-size: 0.95rem;
  color: #555;
}

footer {
  text-align: center;
  padding: 1.5rem;
  background: #222;
  color: #fff;
  margin-top: 2rem;
}
