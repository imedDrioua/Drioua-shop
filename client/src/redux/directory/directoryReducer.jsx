const INITIAL_STATE = {
  sections: [{

      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      size: ' col-md-4 col-6',
      id: 1
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      size: 'col-md-4 col-6 ',
      id: 2
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      size: 'col-md-4 col-6 ',
      id: 3
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'col-6 ',
      id: 4
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'col-md-6 col-12 ',
      id: 5
    }
  ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
  return state
}

export default directoryReducer;