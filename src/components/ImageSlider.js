import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

export default function ImageSlider(props) {
  var items = [
    {
      image: {
        src: "https://cdn.rtrcdn.com/assets/imgs/082520_MembershipLP_Hero.jpg",
      },
      cta: "/women",
    },
    {
      image: {
        src:
          "http://d9hhrg4mnvzow.cloudfront.net/go.generationtux.com/wedding-rentals/9683dc82-hero-image_100000000000000000001o.jpg",
      },
      cta: "/men",
    },
    {
      image: {
        src: "https://cdn.rtrcdn.com/assets/imgs/082520_ReturnHP_WideTile.jpg",
      },
      cta: "/kids",
    },
  ];

  return (
    <Carousel timeout={0} navButtonsAlwaysVisible="true">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      {/* <h2>{props.item.name}</h2>
      <p>{props.item.description}</p> */}
      <img
        src={props.item.image.src}
        style={{ width: "100vw", height: "70vh" }}
        alt="sliderImage"
      />

      {/* <div className={classes.slide}>
        {/* <Button
          href={props.item.cta}
          size="large"
          color="primary"
          variant="contained"
        >
          SHOP NOW
        </Button> 
      </div> */}
    </Paper>
  );
}
