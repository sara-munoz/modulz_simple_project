const initialState = {
    foodArray: {
        e5d9d9f5: {
            label: 'ice cream',
            isDelicious: true,
            isHealthy: false,
        },
        a9ba692b: {
            label: 'pizza',
            isDelicious: true,
            isHealthy: false,
        },
        ze128a47: {
            label: 'spinach',
            isDelicious: false,
            isHealthy: true,
        },
    },
};


const foodReducer = (state = initialState, action) => {
        switch (action.type) {
        case "CHANGE_FOOD_ARRAY":
            return Object.assign({}, state, {
                foodArray: action.array
            });

        default:
            return state;
    }
};

export default foodReducer;
