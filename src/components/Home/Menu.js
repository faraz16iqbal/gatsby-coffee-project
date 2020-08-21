import React, { Component } from "react"
import Title from "../Globals/Title"
import Image from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  return Array.from(new Set(tempItems))
}
class Menu extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  render() {
    console.log(this.state.categories)
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row mb-5">
              <div className="col">
                {/* {} */}
                {/* {} */}
                <div className="row">
                  {this.state.coffeeItems.map(({ node }) => {
                    return (
                      <div
                        key={node.id}
                        className="col-11 col-md-6 my-3 d-flex mx-auto"
                      >
                        <div>
                          <Image fixed={node.image.fixed} />
                        </div>
                        <div className="flex-grow-1 px-3">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-0">{node.title}</h6>
                            <small>
                              <h6 className="mb-0 text-yellow">
                                ${node.price}
                              </h6>
                            </small>
                          </div>
                          <p className="text-muted">
                            <small>{node.description.description}</small>
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
