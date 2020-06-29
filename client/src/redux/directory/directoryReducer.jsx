const INITIAL_STATE = {
  sections: [{

      title: 'hats',
      imageUrl: 'https://i.ytimg.com/vi/cYRlb6C-uiA/maxresdefault.jpg',
      size: ' col-md-4 col-6',
      id: 1
    },
    {
      title: 'jackets',
      imageUrl: 'https://www.hjackets.com/blog/wp-content/uploads/2019/05/How-Much-Does-A-Good-Leather-Jacket-Costw.jpg',
      size: 'col-md-4 col-6 ',
      id: 2
    },
    {
      title: 'sneakers',
      imageUrl: 'https://townsquare.media/site/721/files/2019/09/GettyImages-576529342.jpg?w=980&q=75',
      size: 'col-md-4 col-6 ',
      id: 3
    },
    {
      title: 'womens',
      imageUrl: 'https://i.pinimg.com/originals/77/80/c8/7780c8f4b252bd4f3bbb4b9bfe17b1d5.jpg',
      size: 'col-6 ',
      id: 4
    },
    {
      title: 'mens',
      imageUrl: 'https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/89744201_2722151544577484_7475464727003398144_o.jpg?_nc_cat=108&_nc_sid=84a396&_nc_eui2=AeGn7viZzy6Y7-idSO5iQIgEr13UZvmQmwOvXdRm-ZCbA4j47bXBO64Nkall3d3rZE2D5v3dIP8tfRyDWcnCyHmp&_nc_ohc=K2uZM-1vbjgAX_mlr8Y&_nc_ht=scontent-mrs2-1.xx&oh=0b5e90d435bb00ab8f8f5e3f7372c773&oe=5F1E9810',
      size: 'col-md-6 col-12 ',
      id: 5
    }
  ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
  return state
}

export default directoryReducer;