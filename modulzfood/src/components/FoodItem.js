import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import PropTypes from 'prop-types';
import FoodList from "./FoodList";

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
        display:flex;
        flex-direction: column;
        align-items: center;
        `;

const colorChange = keyframes`
    from { background-color: white; }
    to { background-color: green; }
`;

const movement = keyframes`
        from {transform:  translate(0px)}
        to {transform:  translate(30px)}`;


const Button = styled.button`
        background: ${props => props.colorStyle && !props.isDelicious ? "green" : "white"};
        color: ${props => props.colorStyle && !props.isDelicious ? "white" : "rebeccapurple"};
        margin-top:1em;
        border: 2px solid rebeccapurple;
        border-radius: 3px;
        font-size: 0.9em;
        display:flex;  
        
        ${props => props.colorStyle  && props.isDelicious && css`
        animation: ${movement} 1s linear alternate; animation-fill-mode: forwards;`}
        
        ${props => props.colorStyle && !props.isDelicious && css`
        animation: ${colorChange} 1s alternate; animation-fill-mode: forwards;`}        
        `;


class FoodItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <TitleItem>{this.props.label}</TitleItem>
                <Button colorStyle={this.props.isDelicious} isDelicious={true}
                        onClick={() => this.props.changeData(this.props.keyFood, 'delicious')}>
                    {this.props.isDelicious ? 'Delicious' : 'Distasteful'}</Button>
                <Button colorStyle={this.props.isHealthy} isDelicious={false}
                        onClick={() => this.props.changeData(this.props.keyFood, 'healthy')}>
                    {this.props.isHealthy ? 'Healthy' : 'Unhealthy'}</Button>
            </Wrapper>
        )
    }
}

FoodItem.propTypes = {
    key: PropTypes.string,
    keyFood: PropTypes.string,
    label: PropTypes.string,
    isDelicious: PropTypes.bool,
    isHealthy: PropTypes.bool,
    changeData: PropTypes.func
};


export default FoodItem;
