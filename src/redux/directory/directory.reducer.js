const INITIAL_STATE = { 
    sections:  [
        {
            title: 'consoles',
            imageUrl: 'https://i.ibb.co/47JzMVb/consoles.jpg',
            id: 1,
            linkUrl: 'shop/consoles'
        },
        {
            title: 'PS4 Games',
            imageUrl: 'https://i.ibb.co/5YV9Y4K/games.jpg',
            id: 2,
            linkUrl: 'shop/ps4'
        },
        {
            title: 'Xbox Games',
            imageUrl: 'https://i.ibb.co/WcCbtPD/xboxg.jpg',
            id: 3,
            linkUrl: 'shop/xbox'
        },
        {
            title: 'nintendo games',
            imageUrl: 'https://i.ibb.co/x3kwf2W/Nintendo-D.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/nintendo'
        },
        {
            title: 'SmartPhones',
            imageUrl: 'https://i.ibb.co/v1DG4ph/a-s.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/smartphones'
        }
    ]  
} 

const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        default: 
            return state
    }
}

export default directoryReducer;