

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
              I worked on a project in college with two friends. It was about book reviews, as you can tell from the title. However, the website is currently offline. Luckily, my project partner created a video showcasing the site, which I can share with you for more information.
            </p>
          </div>
          <div className="col-md col-12 p-5">
            <a className="youtube-thumbnail" href="https://youtu.be/yClRM98TeAU" target="_blank">
              <img className="img img-fluid rounded border border-danger border-2" src="bookish.jpg" alt="Video Thumbnail" />
              <span class="youtube-logo"></span>
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