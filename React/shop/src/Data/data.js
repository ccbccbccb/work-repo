let data = [
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
    picture: (
      <img
        src="https://codingapple1.github.io/shop/shoes1.jpg"
        width="80%"
      ></img>
    ),
  },

  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
    picture: (
      <img
        src="https://codingapple1.github.io/shop/shoes2.jpg"
        width="80%"
      ></img>
    ),
  },

  {
    id: 2,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000,
    picture: (
      <img
        src="https://codingapple1.github.io/shop/shoes3.jpg"
        width="80%"
      ></img>
    ),
  },
];

export default data;

// export 여러개 하려면 export{변수1, 변수2} default x , 여러개 export 시
// 변수명 그대로
