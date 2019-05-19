import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

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
    
    render() {
        return (
            <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onReveal={()=>this.percentage}
                >
                    <div className="discount_porcentage">
                        <span>30%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3>Buy race entry before August 1 </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div>button</div>
                    </div>
                </Slide>
            </div> 
        </div>
        );
    }
}

export default Discount;

