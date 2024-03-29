

function Projects(){
  return (
    <div>
      <section className="bg-light text-dark text-center" id="projects">
        <br />
        <br />
        <br />
        <h1 className="text-primary">My Projects</h1>
        
        <div className="row justify-content-center align-items-center">
          <div className="col-md col-12 p-5">
            <h3>YouTube Clone</h3>
            <p>
              This was my first big project. 
              I created this website, with plain html and css.
              This project helped me to realize some of the big concepts in css such as grids, flexbox, positions etc.
              It is also pretty responsive.
            </p>
          </div>
          <div className="col-md col-12 p-5">
            <a href="https://nurkhat18.github.io/youtube/" target="_blank">
              <img className="img-fluid border border-dark border-2 rounded" src="youtube.png" alt="Website Screenshot" />
            </a>
          </div>

        </div>

      </section>
      <section className="bg-dark text-light text-center" id="projects">
        
        <div className="row justify-content-center align-items-center">
          <div className="col-md col-12 p-5">
            <h3>Bookish</h3>
            <p>
            I've co-created a website named 'Bookish' with two of my friends. As the name suggests, it's a platform dedicated to book reviews. Here, you can add, comment, and rate books. 
            </p>
          </div>
          <div className="col-md col-12 p-5">
            <a href="http://167.99.60.236:3000" target="_blank">
              <img className="img-fluid border border-warning border-2 rounded" src="bookish.jpg" alt="Website Screenshot" />
            </a>
          </div>

        </div>

      </section>

      <section className="bg-light text-dark text-center" id="projects">
        
        
        <div className="row justify-content-center align-items-center">
          <div className="col-md col-12 p-5">
            <h3>Hello Three.js</h3>
            <p>
            I made a really basic 3D website not long ago. 
            I wanted to show it to you because I had fun creating this simple 3D world. 
            I'm still learning three.js to make more advanced 3D environments in the future.
            </p>
          </div>
          <div className="col-md col-12 p-5">
            <a href="https://txt-nu-teal.vercel.app/" target="_blank">
              <img className="img-fluid border border-warning border-2 rounded" src="threejs.png" alt="Website Screenshot" />
            </a>
          </div>

        </div>

      </section>
      
    </div>
  )
}

export default Projects