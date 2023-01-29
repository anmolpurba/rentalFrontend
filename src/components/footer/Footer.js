import React from 'react'
import "./Footer.css"
function Footer() {
    
  return (
    <div id="footerscroll">
        <footer className="footer text-center size text-lg-start bg-dark text-white">

        <section className="" style={{padding:"20px"}}>
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>AG
                </h6>
                <p>
                    This is a simple rental website to view all the houses available in India.
                </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Frameworks Used
                </h6>
                <p>
                    <a href="https://getbootstrap.com/" target="_blank" className="text-reset">Web Development</a>
                </p>
                <p>
                    <a href="https://reactjs.org/" target="_blank" className="text-reset">React Js</a>
                </p>
                <p>
                    <a href="https://expressjs.com/" target="_blank" className="text-reset">Express Js</a>
                </p>
                <p>
                    <a href="https://mongoosejs.com/" target="_blank" className="text-reset">MongoDB</a>
                </p>
                </div>


                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> PUNJAB</p>
                <p>
                    <i className="fas fa-envelope me-3"></i>
                    mail@mail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +91 7009270026</p>
                <p><i className="fas fa-print me-3"></i> +91 8360974700</p>
                </div>
            </div>
            </div>
        </section>


        <div className="text-center p-4" style={{backgroundColor: "black"}}>
            © 2023 Copyright:
            <a className="text-reset fw-bold">@AG</a>
        </div>
        </footer>
    </div>
  )
}

export default Footer