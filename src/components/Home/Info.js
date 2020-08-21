import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              facere incidunt sint corporis deleniti nihil dignissimos quis
              alias magnam veniam facilis, minus quod ullam odit distinctio!
              Provident earum officia velit temporibus voluptatem ipsum amet hic
              pariatur magni assumenda repellendus consequatur, voluptas vero
              consequuntur minus ipsam, quos iste repudiandae et qui facere
              libero. Neque tempora voluptatum aliquid hic quidem eius
              cupiditate sit corrupti, eum minus exercitationem repellendus
              aperiam error odio aliquam possimus voluptatem quas quisquam saepe
              id dolorum. Voluptatum consectetur aut eligendi aliquid odio
              nesciunt.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
