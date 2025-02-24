import React, { Component } from 'react';

class Blogs extends Component {

    render() {
        return (<div id="blogs" className="main-wrapper">
            <section className="cta-section theme-bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">Microsoft and Open Source article is coming soon...</h2>
                    <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                    <form className="signup-form form-inline justify-content-center pt-3">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="semail">Your email</label>
                            <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
                        </div>
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>
            <section className="blog-list px-3 py-5 p-md-5">
                <div className="container">
                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/images/blog/blog-post-thumb-1.jpg" alt="image" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="#">Why Every Developer Should Have A Blog</a></h3>
                                <div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5 min read</span><span className="comment"><a href="#">8 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="#">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/images/blog/blog-post-thumb-2.jpg" alt="image" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="#">A Guide to Becoming a Full-Stack Developer</a></h3>
                                <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">3 min read</span><span className="comment"><a href="#">26 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="#">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/images/blog/blog-post-thumb-3.jpg" alt="image" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="#">High Performance JavaScript</a></h3>
                                <div className="meta mb-1"><span className="date">Published 1 month ago</span><span className="time">8 min read</span><span className="comment"><a href="#">12 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="#">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/images/blog/blog-post-thumb-4.jpg" alt="image" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="#">Top 5 JavaScript Frameworks</a></h3>
                                <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">15 min read</span><span className="comment"><a href="#">3 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="#">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/images/blog/blog-post-thumb-5.jpg" alt="image" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="#">Learn React in 24 Hours</a></h3>
                                <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">10 min read</span><span className="comment"><a href="#">23 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="#">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="/images/blog/blog-post-thumb-6.jpg" alt="image" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="#">About Remote Working</a></h3>
                                <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">2 min read</span><span className="comment"><a href="#">1 comment</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="#">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }
}
export default Blogs;
