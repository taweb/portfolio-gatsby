import React, { PureComponent } from 'react';

class Animation extends PureComponent {
    state = {  }
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