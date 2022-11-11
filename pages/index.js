import Link from "next/link";

export default function Home() {
  return (
    <>
     <section id="homeHero" className="home-hero-section bg-dark text-secondary py-5 text-center">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <span className="text-light">Welcome to the</span>
              <h1 className="display-5 fw-bold text-uppercase text-white">Catalog Site</h1>
              <p className="fs-5 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam Link mollis odio.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-center">
                <Link href="/products" className="btn btn-outline-primary btn-lg fw-bold">Explore Our Products</Link >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="homeAboutUs" className="home-about-us-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-2 mb-3 mb-md-0 text-center text-md-end">
              <img src="https://dummyimage.com/450x260/f8f9fa/6c757d.jpg" alt="About Us" className="img-fluid" />
            </div>
            <div className="col-md-7 order-md-1">
              <h3>About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam Link mollis odio.</p>
              <p>Suspendisse blandit leo molestie eleifend vehicula. Integer quis bibendum lacus, vitae ultricies ante. Cras et tortor vel nullLink luctus auctor.</p>
              <p>Nullam egestas libero elit, quis elementum tortor tincidunt eu. Vivamus consequat orci erat, et eleifend mi posuere nec. Vestibulum ultricies ornare feugiat.</p>
              <Link href="/Link bout-us" className="btn btn-outline-primary">Read More</Link >
            </div>
          </div>
        </div>
      </section>

      <section id="homeWhyChooseUs" className="home-why-choose-us-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4 text-center">
              <h3 className="p-0 m-0">Why Choose Us</h3>
            </div>
            <div className="col-md-4 mb-2 mb-md-0">
              <div className="h1 d-inline-block">
                  <i className="bi-alarm"></i>
              </div>
              <h4>On Time Delivery</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam Link mollis odio.</p>
            </div>
            <div className="col-md-4 mb-2 mb-md-0">
              <div className="h1 d-inline-block">
                  <i className="bi bi-key"></i>
              </div>
              <h4>Safe and secure</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam Link mollis odio.</p>
            </div>
            <div className="col-md-4 mb-2 mb-md-0">
              <div className="h1 d-inline-block">
                  <i className="bi bi-headset"></i>
              </div>
              <h4>Excellent Customer Support</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam Link mollis odio.</p>
            </div>
            <div className="col-12 mt-0 mt-md-3 text-center">
              <Link href="/products" className="btn btn-outline-primary">Explore Our Products</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="homeFeaturedProducts" className="home-featured-products py-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <h3 className="mb-4">Featured Products</h3>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="card shadow rounded-0">
                        <Link href="/product">
                            <img src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg" className="card-img-top" alt="Product title" />
                        </Link>
                        <div className="card-body">
                            <Link href="/product" className="text-dark text-decoration-none">
                                <h5 className="card-title text-capitalize">Product Title</h5>
                            </Link>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Price:</b><span className="float-end">$12.00</span>
                                </small>
                            </li>
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Color:</b><span className="float-end">Red</span>
                                </small>
                            </li>
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Size:</b><span className="float-end">XL</span>
                                </small>
                            </li>
                        </ul>
                        <div className="card-body">
                            <Link href="/product" className="btn btn-outline-primary">View Product</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="card shadow rounded-0">
                        <Link href="/product">
                            <img src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg" className="card-img-top" alt="Product title" />
                        </Link>
                        <div className="card-body">
                            <Link href="/product" className="text-dark text-decoration-none">
                                <h5 className="card-title text-capitalize">Product Title</h5>
                            </Link>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Price:</b><span className="float-end">$12.00</span>
                                </small>
                            </li>
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Color:</b><span className="float-end">Red</span>
                                </small>
                            </li>
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Size:</b><span className="float-end">XL</span>
                                </small>
                            </li>
                        </ul>
                        <div className="card-body">
                            <Link href="/product" className="btn btn-outline-primary">View Product</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="card shadow rounded-0">
                        <Link href="/product">
                            <img src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg" className="card-img-top" alt="Product title" />
                        </Link>
                        <div className="card-body">
                            <Link href="/product" className="text-dark text-decoration-none">
                                <h5 className="card-title text-capitalize">Product Title</h5>
                            </Link>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Price:</b><span className="float-end">$12.00</span>
                                </small>
                            </li>
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Color:</b><span className="float-end">Red</span>
                                </small>
                            </li>
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Size:</b><span className="float-end">XL</span>
                                </small>
                            </li>
                        </ul>
                        <div className="card-body">
                            <Link href="/product" className="btn btn-outline-primary">View Product</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="card shadow rounded-0">
                        <Link href="/product">
                            <img src="https://dummyimage.com/285x140/f8f9fa/6c757d.jpg" className="card-img-top" alt="Product title" />
                        </Link>
                        <div className="card-body">
                            <Link href="/product" className="text-dark text-decoration-none">
                                <h5 className="card-title text-capitalize">Product Title</h5>
                            </Link>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Price:</b><span className="float-end">$12.00</span>
                                </small>
                            </li>
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Color:</b><span className="float-end">Red</span>
                                </small>
                            </li>
                            <li className="list-group-item">
                                <small className="text-muted">
                                    <b>Size:</b><span className="float-end">XL</span>
                                </small>
                            </li>
                        </ul>
                        <div className="card-body">
                            <Link href="/product" className="btn btn-outline-primary">View Product</Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4 text-center">
                    <Link href="/products" className="btn btn-outline-primary">View All Products</Link>
                </div>
            </div>
        </div>
      </section>

      <section id="homeFeaturedBlogs" className="home-featured-blogs bg-light py-5">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h3 className="mb-4">Featured Blogs</h3>
                      <div className="row">
                          <div className="col-md-5">
                              <div className="card shadow rounded-0">
                                  <Link href="/blog">
                                      <img src="https://dummyimage.com/550x330/f8f9fa/6c757d.jpg" className="card-img-top" alt="post title" />
                                  </Link>
                                  <div className="card-body">
                                      <strong className="d-inline-block mb-2 text-primary">Category Name</strong>
                                      <Link href="/blog" className="text-dark text-decoration-none">
                                          <h5 className="card-title text-capitalize mb-0">Post Title</h5>
                                      </Link>
                                      <div className="mb-1 text-muted">Nov 12</div>
                                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam Link mollis odio.</p>
                                      <Link href="/blog" className="btn btn-outline-primary">Read More</Link>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-7">
                              <div className="card shadow rounded-0 mb-4">
                                  <div className="row g-0">
                                      <div className="col-md-4">
                                          <Link href="/blog">
                                              <img src="https://dummyimage.com/250x250/f8f9fa/6c757d.jpg" className="img-fluid w-100 h-100" alt="post title" />
                                          </Link>
                                      </div>
                                      <div className="col-md-8">
                                          <div className="card-body">
                                              <strong className="d-inline-block mb-2 text-primary">Category Name</strong>
                                              <Link href="/blog" className="text-dark text-decoration-none">
                                                  <h5 className="card-title text-capitalize mb-0">Post Title</h5>
                                              </Link>
                                              <div className="mb-1 text-muted">Nov 12</div>
                                              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam Link mollis odio.</p>
                                              <Link href="/blog" className="btn btn-outline-primary">Read More</Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="card shadow rounded-0">
                                  <div className="row g-0">
                                      <div className="col-md-4">
                                          <Link href="/blog">
                                              <img src="https://dummyimage.com/250x250/f8f9fa/6c757d.jpg" className="img-fluid w-100 h-100" alt="post title" />
                                          </Link>
                                      </div>
                                      <div className="col-md-8">
                                          <div className="card-body">
                                              <strong className="d-inline-block mb-2 text-primary">Category Name</strong>
                                              <Link href="/blog" className="text-dark text-decoration-none">
                                                  <h5 className="card-title text-capitalize mb-0">Post Title</h5>
                                              </Link>
                                              <div className="mb-1 text-muted">Nov 12</div>
                                              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam Link mollis odio.</p>
                                              <Link href="/blog" className="btn btn-outline-primary">Read More</Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-12 mt-4 text-center">
                              <Link href="/blogs" className="btn btn-outline-primary">View All Blogs</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="newsLetter" className="catalog-newsletter my-5">
          <div className="container">
              <div className="py-5 bg-light text-center">
                  <div className="row">
                      <div className="col-11 col-md-8 col-lg-5 mx-auto">
                          <span>Subscribe to Our</span>
                          <h3>Newsletter</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris.</p>
                          <form method="post">
                              <div className="input-group mb-3">
                                  <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                                  <span className="input-group-text">
                                      <button className="btn" type="submit" id="button-addon2"><i className="bi bi-search"></i></button>
                                  </span>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}