function Skills() {
  return (
    <section className="text-light bg-dark p-5 text-center" id="skills">
      <div className="container h-100">
        <div className="row h-100">
          <div className="my-auto">
            <br />
            <br />
            <h1 className="text-info">What I know</h1>
            <br />
            <div className="row justify-content-center">
              <div className="col-md card m-3" style={{ width: "20rem" }}>
                <img src="python.jpeg" className="card-img-top img-fluid my-2" alt="Python" style={{ objectFit: "cover", height: "10rem" }} />
                <div className="card-body">
                  <h2 className="card-title">Python</h2>
                  <p className="card-text">I started with Python as my first programming language. In fact, Python was the reason I switched from studying physics to computer science. I have 2 years of experience in python.</p>
                </div>
              </div>
              <div className="col-md card m-3" style={{ width: "20rem" }}>
                <img src="java.png" className="card-img-top img-fluid my-2" alt="Java" style={{ objectFit: "cover", height: "10rem" }} />
                <div className="card-body">
                  <h2 className="card-title">Java</h2>
                  <p className="card-text">Switching from Python to Java was tough at first, but the more I learned, the more I realized that Java has several great benefits, even though its syntax is more complex. I have 1 year experience with Java.</p>
                </div>
              </div>
              <div className="col-md card m-3" style={{ width: "20rem" }}>
                <img src="html.png" className="card-img-top img-fluid my-2" alt="HTML" style={{ objectFit: "cover", height: "10rem" }} />
                <div className="card-body">
                  <h2 className="card-title">HTML</h2>
                  <p className="card-text">
                  Although HTML is not considered a programming language, it was an enjoyable experience for me to learn. I began learning HTML at the start of the new year.
                  </p>
                </div>
              </div>
              
            </div>
            <div className="row justify-content-center">
              <div className="col-md card m-3" style={{ width: "20rem" }}>
                <img src="css.avif" className="card-img-top img-fluid my-2" alt="Python" style={{ objectFit: "cover", height: "10rem" }} />
                <div className="card-body" >
                  <h2 className="card-title">CSS</h2>
                  <p className="card-text">
                  I learned CSS while learning HTML, so I have similar experience with both. However, I found CSS concepts to be more difficult than plain HTML.
                  </p>
                </div>
              </div>
              <div className="col-md card m-3" style={{ width: "20rem" }}>
                <img src="js.png" className="card-img-top img-fluid my-2" alt="Java" style={{ objectFit: "cover", height: "10rem" }} />
                <div className="card-body">
                  <h2 className="card-title">JavaScript</h2>
                  <p className="card-text">JavaScript feels similar to Python, which is why I feel confident in writing code in JavaScript. I have 6 months of experience in JavaScript.</p>
                </div>
              </div>
              <div className="col-md card m-3" style={{ width: "20rem" }}>
                <img src="node.png" className="card-img-top img-fluid my-2" alt="HTML" style={{ objectFit: "cover", height: "10rem" }} />
                <div className="card-body" >
                  <h2 className="card-title">NodeJS</h2>
                  <p className="card-text">
                    For backend programming I use NodeJS and I think it is very good for backend programming. I am confident in writing code using NodeJS.
                  </p>
                </div>
              </div>
              
            </div>
            <div className="row justify-content-center">
              <div className="col-md card m-3" style={{ width: "20rem" }}>
                <img src="threejs.jpeg" className="card-img-top img-fluid my-2" alt="Python" style={{ objectFit: "cover", height: "10rem" }} />
                <div className="card-body" >
                  <h2 className="card-title">Three.js</h2>
                  <p className="card-text">
                  I just started learning Three.js during my summer break, so I'm still new to it. However, 
                  I'm really enjoying making 3D websites and I plan to keep learning and improving.
                  </p>
                </div>
              </div>
              <div className="col-md card m-3" style={{ width: "20rem" }}>
                <img src="bootstrap.png" className="card-img-top img-fluid my-2" alt="Java" style={{ objectFit: "cover", height: "10rem" }} />
                <div className="card-body">
                  <h2 className="card-title">Bootstrap</h2>
                  <p className="card-text">
                    I love Bootstrap. It makes so much easier to style my website and make it responsive. In fact, I used bootstrap 5 to build this portfolio.
                  </p>
                </div>
              </div>
              <div className="col-md card m-3" style={{ width: "20rem" }}>
                <img src="react.png" className="card-img-top img-fluid my-2" alt="Java" style={{ objectFit: "cover", height: "10rem" }} />
                <div className="card-body">
                  <h2 className="card-title">React JS</h2>
                  <p className="card-text">
                  I started using React JS recently, and it has made my coding much neater and simpler. Even though I'm new to React JS, I have already found it highly advantageous.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
