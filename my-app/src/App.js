import "./App.css";

function MyApp() {
  return (
    <main>
      <div className="card">
        <img src="/Splash-of-colours.png" alt="An images of colour splash" />
        <p className="tag">Learning</p>
        <p>Published 21 Dec 2013</p>
        <h1> HTML and CSS Foundations</h1>
        <p>
          These languages are the backbone of every website, defining contest,
          structure, and presentation
        </p>

        <div className="profile">
          <img className="avatar-img"
            src="https://img.favpng.com/3/11/24/3d-woman-avatar-stylized-cartoon-woman-avatar-with-glasses-g0FutwYY_t.jpg"
            alt="A young lady's avatar-img"
          />
          <p> Grey hooper</p>
        </div>
      </div>
    </main>
  );
}
export default MyApp;
