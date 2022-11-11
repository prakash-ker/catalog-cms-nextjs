import Link from "next/link";
import Banner from "../../components/layout/banner";
export default function Blogs() {
  return (
    <>
    <Banner bannerTitle="Blogs" />
    <section id="pageContent" className="page-content py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-12">
                <div className="card shadow rounded-0 mb-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                          <Link href="/blogs/post-name">
                              <img src="https://dummyimage.com/275x200/f8f9fa/6c757d.jpg" className="img-fluid w-100 h-100" alt="post title" />
                          </Link>
                      </div>
                      <div className="col-md-8">
                          <div className="card-body">
                              <strong className="d-inline-block mb-2 text-primary">Category Name</strong>
                              <Link href="/blogs/post-name" className="text-dark text-decoration-none">
                                  <h5 className="card-title text-capitalize mb-0">Post Title</h5>
                              </Link>
                              <div className="mb-1 text-muted">Nov 12</div>
                              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nunc purus. Cras ut tempus diam, nec convallis mauris. Etiam Link mollis odio.</p>
                              <Link href="/blogs/post-name" className="btn btn-outline-primary">Read More</Link>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-5 mb-md-0">
            <div className="position-sticky" style={{top: "2rem"}}>
              <div className="card mb-3 rounded-0">
                  <div className="card-header bg-light">Search</div>
                  <div className="card-body">
                      <div className="input-group ">
                          <input type="text" className="form-control" placeholder="Enter Text" aria-describedby="button-addon2" />
                          <span className="input-group-text bg-light">
                              <button className="btn m-0 p-0" type="submit" id="button-addon2"><i className="bi bi-search"></i></button>
                          </span>
                      </div>
                  </div>
              </div>

              <div className="card mb-3 rounded-0">
                  <div className="card-header bg-light">
                    Category
                  </div>
                  <div className="list-group border-0 rounded-0">
                      <Link href="" className="list-group-item list-group-item-action">Category 1</Link>
                      <Link href="" className="list-group-item list-group-item-action">Category 2</Link>
                      <Link href="" className="list-group-item list-group-item-action">Category 3</Link>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}