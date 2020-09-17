import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Footer from "../Footer";

class Cases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
      cases: [
        {
          name: `Practice`,
          link: `/cases/practice`,
          image: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Fpractice_cover_case.png?alt=media&token=3da2d8c4-5913-4ebe-a459-80044c788548`
        },
        {
          name: `Revolver`,
          link: `/cases/revolver`,
          image: `https://firebasestorage.googleapis.com/v0/b/belenewman-9704b.appspot.com/o/cases%2Frevolver_cover_case.png?alt=media&token=415f72de-eedd-41dc-9065-6a949a360ebe`
        }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onMouseEnterLi(id) {
    this.setState({ listNumber: id });
  }

  onMouseLeaveLi() {
    this.setState({ listNumber: null });
  }

  renderCases() {
    const { cases } = this.state;

    return cases.map(({ name, link, image }, index) => {
      // const { listNumber, listSelected } = this.state;
      return (
        <div
          key={index}
          className="col-md-6 col-12 pt-3 pb-5"
          onMouseEnter={() => this.onMouseEnterLi(index)}
          onMouseLeave={() => this.onMouseLeaveLi()}
        >
          <Link to={link}>
            <img src={image} className="img-case" alt="gallery" />
            <h3 className="text-center m-0 pt-3">{name}</h3>
            <h5 className="text-center m-0 pt-1">Case Study</h5>
            {/*<h4 className="m-0 p-1">
              {listNumber === index || listSelected === index ? (
                <span>→&nbsp;</span>
              ) : (
                <span />
              )}
              ({index + 1})&nbsp;
              {name}
            </h4>*/}
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="content-box-lg">
        <div className="row m-0">
          <div
            className="col-1ym fixed-md-top px-0"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            <Link to={"/works"}>
              <div className="h100v">
                <h3 className="menu-v m-0">Selected</h3>
              </div>
            </Link>
          </div>

          <div className="col-md-11 col-12 px-0 pb-50 pt-50" id="scrolly">
            <div className="row m-0 pw-5">
              {this.renderCases()}
              <Footer />
            </div>
          </div>
          <div
            className="col-1ym fixed-md-botton px-0"
            style={{ backgroundColor: "#F0F2F8" }}
          >
            <Link to={"/about"}>
              <div className="h100v">
                <h3 className="menu-v m-0">About</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cases;
