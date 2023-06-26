

function About(){
  return (
    <section className="bg-light text-dark p-5 text-center" id="about">
      <div className="container h-100 mt-5">
        <div className="row h-100">
          <div className="col col-lg-6 col-12 my-auto">
            <h1 className="" style={{color: "#536DFE"}} >Hello</h1>
            <p className="text-secondary" style={{fontSize: 20, fontWeight: 500}}>
            I am Nurkhat Jumabaev and currently majoring Computer Science at the University of Arizona.
            I love web development and I want to be Full-Stack Web Developer in the near future.

            </p>
          </div>
          <div className="col col-lg-6 col-12">
            <img className="img-fluid rounded-circle me" src="me3.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About