import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Sponsors() {
    const itemData = [
        {
          img: require("../images/sponsors/mercurytax.png"),
          title: 'Mercury Tax',
        },
        {
          img: require("../images/sponsors/anura.png"),
          title: 'Anura Sirimanna',
        },
        {
          img: require("../images/sponsors/veena.png"),
          title: 'Veena Shell',
        },
        {
          img: require("../images/sponsors/mega.png"),
          title: 'Mega Financial Group',
        },
        {
          img: require("../images/sponsors/dissa.png"),
          title: 'Dissa Real Estate',
        },
        {
          img: require("../images/sponsors/airlines.png"),
          title: 'Sri Lankan Airlines',
        },
        {
          img: require("../images/sponsors/sahab.png"),
          title: 'Sahab',
        },
        {
          img: require("../images/sponsors/shan.png"),
          title: 'Shan',
        },
        {
          img: require("../images/sponsors/thinusha.png"),
          title: 'Thinusha',
        },
        {
          img: require("../images/sponsors/mahendra.png"),
          title: 'Mahendra Costa',
        },
      ];
  return (
    <ImageList sx={{ width: 780, height: 650 }} cols={3} rowHeight={150}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=260&h=150&fit=crop&auto=format`}
            srcSet={`${item.img}?w=260&h=150&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Sponsors;
