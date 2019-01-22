import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleItem = styled.h3`
        font-size: 1.5em;
        text-align: center;
        color: rebeccapurple;`;

const Wrapper = styled.section`
        padding: 2em;
        width: 16em;
        border-radius: 25px;
        background: #eeeeee;
        :hover {
            background: #bdbdbd;
        }
        display: in-line block;`;

const Button = styled.button`
        background: ${props => props.colorStyle ? "rebeccapurple" : "white"};
        color: ${props => props.colorStyle ? "white" : "rebeccapurple"};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid rebeccapurple;
        border-radius: 3px;`;


class FoodItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <TitleItem>{this.props.label}</TitleItem>
                <Button colorStyle={this.props.isDelicious}
                        onClick={() => this.props.changeData(this.props.keyFood, 'delicious')}>
                    {this.props.isDelicious ? 'Delicious' : 'Distasteful'}</Button>
                <Button colorStyle={this.props.isHealthy}
                        onClick={() => this.props.changeData(this.props.keyFood, 'healthy')}>
                    {this.props.isHealthy ? 'Healthy' : 'Unhealthy'}</Button>
            </Wrapper>
        )
    }
}

export default FoodItem;
