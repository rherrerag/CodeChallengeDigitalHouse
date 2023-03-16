const responseOK = {
  data: [
    {
      createdAt: '2023-03-11T04:50:50.205Z',
      product: 'Recycled Plastic Tuna',
      points: 92984,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '2',
    },
    {
      createdAt: '2023-03-11T04:35:35.259Z',
      product: 'Fantastic Granite Bacon',
      points: 42416,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '3',
    },
    {
      createdAt: '2023-03-11T13:57:33.428Z',
      product: 'Fantastic Fresh Gloves',
      points: 23913,
      image: 'https://loremflickr.com/640/480/city',
      is_redemption: true,
      id: '4',
    },
    {
      createdAt: '2023-03-11T12:17:47.118Z',
      product: 'Rustic Rubber Bacon',
      points: 69814,
      image: 'https://loremflickr.com/640/480/people',
      is_redemption: true,
      id: '5',
    },
    {
      createdAt: '2023-02-04T07:48:16.249Z',
      product: 'Licensed Metal Salad',
      points: 93367,
      image: 'https://loremflickr.com/640/480/food',
      is_redemption: false,
      id: '12',
    },
  ],
  error: false,
  isCancel: false,
};

const responseError = {
  data: {message: 'Error', code: 'ERR'},
  error: true,
};

export {responseOK, responseError};
