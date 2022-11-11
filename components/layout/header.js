import Link from "next/link";

const Header = () => {
    return(
        <>
        <header id="siteHeader" className="site-header py-3">
            <div className="container">
                <div className="row">
                    <div className="col-9 col-md-3">
                        <Link href="/" className="text-dark text-decoration-none">
                            <h4 className="m-0 p-0 mt-1 text-uppercase">Catalog Site</h4>
                        </Link>
                    </div>
                    <div className="col-md-9 d-md-block d-none">
                        <ul className="nav justify-content-end">
                            <li className="nav-item"><Link href="/" className="nav-link text-dark active">Home</Link></li>
                            <li className="nav-item"><Link href="/about-us" className="nav-link">About Us</Link></li>
                            <li className="nav-item"><Link href="/products" className="nav-link">Products</Link></li>
                            <li className="nav-item"><Link href="/blogs" className="nav-link">Blogs</Link></li>
                            <li className="nav-item"><Link href="/contact-us" className="nav-link">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 d-md-none text-end">
                        <a href="#" className="btn btn-outline-primary">
                            <i className="bi bi-list"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;