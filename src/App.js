import React from 'react';

class App extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            name:'',
            email:'',
            phoneNumber:'',
            info:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
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
            info:this.state.name
        })
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <GenInfo name={this.state.name} email={this.state.email} number={this.state.phoneNumber} handleChange={this.handleChange}/>
                <ReturnInfo info={this.state.info} />
                <button type='submit'>Submit!</button>
            </form>
            
        );
    }
}

class GenInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>
                <input name="name" value={this.props.name} onChange={this.props.handleChange}></input>
                <input name="email" value={this.props.email} onChange={this.props.handleChange}></input>
                <input name="number" value={this.props.phoneNumber} onChange={this.props.handleChange}></input>
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