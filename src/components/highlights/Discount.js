import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { timeout } from 'q';
import MyButton from '../utils/MyButton'

class Discount extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           discountStart: 0,
           discountEnd: 30
        }
      }
    
    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd ){
            this.setState({
                discountStart: this.state.discountStart + 1 
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },30)
    }
    
    render() {
        return (
            <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onReveal={()=>this.percentage()}
                >
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3>Buy race entry before August 1 </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <MyButton/>
                    </div>
                </Slide>
            </div> 
        </div>
        );
    }
}

export default Discount;

