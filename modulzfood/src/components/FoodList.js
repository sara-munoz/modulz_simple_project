import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import FoodItem from "./FoodItem";
import styled from 'styled-components';

const Container = styled.section`
        padding: 2em;
        border-radius: 25px;
        display: flex;
        flex-direction:row;
        justify-content:space-evenly;`;

const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: rebeccapurple;`;


class FoodList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const array = Object.keys(this.props.food);

        return (
            <div>
                <Title> My Food List </Title>
                <Container>
                    {array.map((e) =>
                        <FoodItem
                            key={e}
                            keyFood={e}
                            label={this.props.food[e].label}
                            isDelicious={this.props.food[e].isDelicious}
                            isHealthy={this.props.food[e].isHealthy}
                            changeData={this.props.changeData}
                            />)}
                </Container>
            </div>
        );
    }
}

FoodList.propTypes = {
    food: PropTypes.array,
};


export default FoodList;
