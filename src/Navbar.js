import React from 'react';
class Navbar extends React.Component{
    
   
    render(){
         return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon}
                    src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" alt="cart-icon"/>
                    <span style={styles.cartCount}>3</span>
                </div>
            </div>
        );
    }
}
const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alightItems:'center'
    },
    cartIconContainer:{
        position: 'relative',
        top:20
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-15
    }
}

export default Navbar;
