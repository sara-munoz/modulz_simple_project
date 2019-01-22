export const changeFoodArray = (array) => ({
    type: "CHANGE_FOOD_ARRAY",
    array
});


export function changeData(key, flag) {
    return function action(dispatch, getState) {

        let cloneArray = JSON.parse(JSON.stringify(getState().foodArray));

        if (flag === 'delicious') {
            cloneArray[key].isDelicious = !cloneArray[key].isDelicious;
            dispatch(changeFoodArray(cloneArray));
        } else {
            cloneArray[key].isHealthy = !cloneArray[key].isHealthy;
            return dispatch(changeFoodArray(cloneArray));
        }

    }
}


