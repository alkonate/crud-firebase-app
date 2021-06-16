import LocalSelect from '../LocalSelect'
export default function Footer () {
     
    return <footer className="fixed-bottom bg-light text-center text-white">
                <div className="container p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#0082ca"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor : "#333333"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-github"></i>
                    </a>
                    <LocalSelect />
                    </section>
                </div>

                <div className="text-center p-3">
                    <a className="text-success" href="https://alter.bakeli.tech/">Bakeli official website</a>
                </div>
        </footer>
}