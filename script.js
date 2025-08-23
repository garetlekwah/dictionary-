/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url('https://img.freepik.com/free-photo/bookshelf-books-background_53876-148117.jpg') no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  transition: 0.3s;
}

/* Header */
header {
  background: rgba(0,0,0,0.7);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 1.5rem;
}

#theme-toggle {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #fff;
}

/* Search */
.search-section {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.search-box {
  display: flex;
  gap: 10px;
}

.search-box input {
  padding: 12px;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  width: 300px;
}

.search-box button {
  padding: 12px 18px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #ff9800;
  color: #fff;
  transition: 0.3s;
}

.search-box button:hover {
  background: #e68900;
}

/* Main Layout */
.dictionary-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
}

.result-box {
  background: rgba(0,0,0,0.6);
  padding: 20px;
  border-radius: 12px;
}

.hidden {
  display: none;
}

.word-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.word-header h2 {
  font-size: 2rem;
  margin-right: 10px;
}

.word-header button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #ff9800;
}

#meanings {
  margin-top: 15px;
}

.meaning {
  margin-bottom: 15px;
  padding: 10px;
  border-left: 4px solid #ff9800;
  background: rgba(255, 255, 255, 0.1);
}

/* Sidebar */
.sidebar {
  background: rgba(0,0,0,0.6);
  padding: 15px;
  border-radius: 12px;
}

.sidebar h3 {
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}

.sidebar ul {
  list-style: none;
}

.sidebar ul li {
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.sidebar ul li:hover {
  color: #ff9800;
}

/* Footer */
footer {
  background: rgba(0,0,0,0.7);
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;
}

/* Light Theme */
body.light {
  background: url('https://img.freepik.com/free-photo/stack-books-library-blurred-background_1232-3102.jpg') no-repeat center center fixed;
  background-size: cover;
  color: #000;
}

body.light header, body.light footer, body.light .sidebar, body.light .result-box {
  background: rgba(255,255,255,0.8);
  color: #000;
}

body.light #theme-toggle {
  color: #000;
}

body.light .meaning {
  background: rgba(0,0,0,0.05);
}
