import React, { PureComponent } from 'react';

class Animation extends PureComponent {
    state = {  }
    componentDidMount() {
        console.log('ANIMATION COMPONENT MOUNT');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('ANIMATION COMPONENT UPDATE');
    }
    render() { 
        const children = this.props.children
        return ( 
            <div>
                {children}
            </div>
         );
    }
}
 
export default Animation;