 const modelList = [
    {
      id: "GL012A",
      name: "GL012A orange",
      images: [
        import.meta.env.BASE_URL + "/crystals/GL012A/GL012A.jpg",
        import.meta.env.BASE_URL + "/crystals/GL012A/GL012A-2.jpg",
      ],
      specification:{
        color: ["white","orange"],
        surfaceShape: ["circle", "rectangle"]
      }
    },
    {
      id: "bird",
      name: "bird",
      images: [
        import.meta.env.BASE_URL + "/crystals/bird/bird.jpg",
      ],
      specification:{
        surfaceShape: ["circle", "rectangle"]
      }
    },
  ];




//sample data structure
    // {
    //   id: "c1",
    //   name: "cylinder",
    //   images: [
    //     import.meta.env.BASE_URL + "/crystals/crystal1/crystal1.jpg",
    //     import.meta.env.BASE_URL + "/crystals/crystal1/mock 1.jpg",
    //     import.meta.env.BASE_URL + "/crystals/crystal1/mock 2.jpg",
    //     import.meta.env.BASE_URL + "/crystals/crystal1/mock 3.jpg",
    //     import.meta.env.BASE_URL + "/crystals/crystal1/mock 4.jpg",
    //     import.meta.env.BASE_URL + "/crystals/crystal1/mock 5.jpg",
    //   ],
    //   specification:{
    //     color: ["red","blue", "clear", "green"],
    //     fitting: ["fit1","fit2"],
    //     size: ["small", "large"]
    //   }
    // },
  export default modelList;