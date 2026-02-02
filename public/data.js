 const modelList = [
    {
      id: "c1",
      name: "cylinder",
      images: [
        import.meta.env.BASE_URL + "/crystals/crystal1/crystal1.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 1.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 2.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 3.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 4.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal1/mock 5.jpg",
      ],
      specification:{
        color: ["red","blue", "clear", "green"],
        surfaceShape: ["circle", "rectangle"]
      }
    },
    {
      id: "c2",
      name: "teardrop",
      images: [
        import.meta.env.BASE_URL + "/crystals/crystal 2/crystal2.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 1.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 2.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 3.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 4.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 2/mock 5.jpg",
      ],
      specification:{
        color: ["red","blue"]
      }
    },
    {
      id: "c3",
      name: "circle",
      images: [
        import.meta.env.BASE_URL + "/crystals/crystal 3/crystal3.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 1.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 2.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 3.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 4.jpg",
        import.meta.env.BASE_URL + "/crystals/crystal 3/mock 5.jpg",
      ],
      specification:{
        color: ["red","blue"]
      }
    }
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