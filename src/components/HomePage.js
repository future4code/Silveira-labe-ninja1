import React from "react";

class HomePage extends React.Component {
    render() {
        return (
            <>
                <button onClick={(this.props.deleteCart)}>QUERO SER UM NINJA</button>
                <button onClick={(this.props.deleteCart)}>QUERO SER UM NINJA</button>
                <button onClick={(this.props.deleteCart)}>CONTRATAR UM NINJA</button>
            </>
        )
    }
}

export default HomePage