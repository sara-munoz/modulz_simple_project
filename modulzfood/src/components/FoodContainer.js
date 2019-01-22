import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import FoodList from "./FoodList";
import * as actions from '../actions/foodActions';

class FoodContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FoodList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        food: state.foodArray,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeData: (key, flag) => dispatch(actions.changeData(key, flag)),
    };
};

FoodContainer.propTypes = {
    food: PropTypes.array,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodList);
