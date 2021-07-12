const INITIAL_STATE = {
    sections: [
        {
          title: 'soaps',
          imageUrl: "https://i.ibb.co/JyVnCdq/soap2.jpg",
          id: 1,
          linkUrl: 'shop/soaps'
        },
        {
          title: 'oils',
          imageUrl: 'https://i.ibb.co/5MdxtxY/oils-serums.jpg',
          id: 2,
          linkUrl: 'shop/oilsandserums'
        },
        {
          title: 'body butters',
          imageUrl: 'https://i.ibb.co/vB887jv/body-butters.jpg',
          id: 3,
          linkUrl: 'shop/bodybutters'
        },
        {
          title: 'Lip Balms',
          imageUrl: 'https://i.ibb.co/qp7C6Rt/lip-balm.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/lipbalms',
        },
        {
          title: 'gift sets',
          imageUrl: 'https://i.ibb.co/gZ6wVV7/gift-sets.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/giftsets'
        }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
        return state;
    }
};

export default directoryReducer;