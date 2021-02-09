import React from 'react';

class App extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            name:'',
            email:'',
            phoneNumber:'',
            info:[],
            isEditing:false,
           
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleChange(e){
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            isEditing:!this.state.isEditing,
        })
    }
    
    handleEdit(){
        this.setState({
            isEditing:!this.state.isEditing,
        })
    }
   
    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <GenInfo isEditing={this.state.isEditing} name={this.state.name} email={this.state.email} number={this.state.phoneNumber} handleChange={this.handleChange}/>
                <ReturnInfo info={this.state.info} />
                {this.state.isEditing?<button onClick={this.handleEdit} type='button'>Edit</button>:<div><button type='submit'>Submit!</button></div>}
            </form>
            
        );
    }
}

class GenInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const inputInfoName = <input name="name" value={this.props.name} onChange={this.props.handleChange}></input>;
        const inputInfoEmail = <input name="email" value={this.props.email} onChange={this.props.handleChange}></input>;
        const inputInfoNumber = <input name="phoneNumber" value={this.props.number} onChange={this.props.handleChange}></input>;
        return(
            <div>
                Name:{this.props.isEditing ?<div>{this.props.name}</div>:inputInfoName}
                Email:{this.props.isEditing ?<div>{this.props.email}</div>:inputInfoEmail}
                Phone Number:{this.props.isEditing ?<div>{this.props.number}</div>:inputInfoNumber}
            </div>
        );
    }
}

class ReturnInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>Information:</h2>
                <p>{this.props.info}</p>
            </div>
        )
    }
}

export default App;