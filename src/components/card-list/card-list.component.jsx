import { Component } from "react";

class CardList extends Component{
    render(){
        console.log(this.props.monsters);
        console.log('render from CardList');
        const {monsters} = this.props;
        return(
            <div>
            {monsters.map((monster)=>(
                        <h1 key={monster.id}>{monster.name}</h1>
                    ))}
                {/* <h1>Hello I´m the CardList Component</h1> */}
            </div>
        )
    }
}

export default CardList;