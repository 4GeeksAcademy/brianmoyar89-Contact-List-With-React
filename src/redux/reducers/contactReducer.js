const initialState = [
  {
    id: 0,
    name: "Brian Moya",
    number: 5917695711,
    email: "brianmoyar@gmail.com",
  },
  {
    id: 1,
    name: "Test Name",
    number: 5912345678,
    email: "asd@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default contactReducer;
