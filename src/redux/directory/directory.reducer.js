const INITIAL_STATE = {
    sections: [
        {
          title: 'soaps',
          imageUrl: "images/soap2.jpg",
          id: 1,
          linkUrl: 'shop/soaps'
        },
        {
          title: 'oils',
          imageUrl: 'images/oils_serums.jpg',
          id: 2,
          linkUrl: 'shop/oils'
        },
        {
          title: 'body butters',
          imageUrl: 'images/body_butters.jpg',
          id: 3,
          linkUrl: 'shop/bodybutters'
        },
        {
          title: 'Lip Balms',
          imageUrl: 'images/lip_balm.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/lipbalms',
        },
        {
          title: 'gift sets',
          imageUrl: 'images/gift_sets.jpg',
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