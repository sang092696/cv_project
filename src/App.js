import React from 'react';

const inputStyle ={
    padding: "25px 25px 25px 25px",
    border:"1px solid black", 
    borderRadius:"5px"
}

class App extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            generalInfo:{
                key:'',
                name:'',
                email:'',
                phoneNumber:'',
                isEditing:false,
                addAnother:false
            },
            educationInfo:{
                key:'',
                schoolName:'',
                major:'',
                yearAt:'',
                isEditing:false,
                addAnother:false
            },
            workInfo:{
                key:'',
                companyName:'',
                positionTitle:'',
                jobTasks:'',
                jobDateStart:'',
                jobDateEnd:'',
                isEditing:false,
                addAnother:false
            },


            name:'',
            email:'',
            phoneNumber:'',
            genInfo:[],
            workInfo:[],
            educationInfo:[],
            isEditing:false,
            schoolName:'',
            major:'',
            yearAt:'',
            companyName:'',
            positionTitle:'',
            jobTasks:'',
            jobDateStart:'',
            jobDateEnd:''
           
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeGeneral = this.handleChangeGeneral.bind(this)
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

    handleChangeGeneral(e){
        
        const value = e.target.value
        let nameIn = e.target.name
        //const newInfo = {...[e.target.id]}
        //newInfo[name] = value
        
        this.setState((prevState)=>({
            generalInfo:{
                ...prevState.generalInfo,
                key:Math.random().toString(36).substr(2,9),
                [e.target.name]:value,
            }
        }
        ),()=>{
            console.log(this.state.generalInfo)
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const newItem=this.state.generalInfo
        const items = [...this.state.genInfo, newItem]
        this.setState((prevState)=>({
            isEditing:!this.state.isEditing,
        }))
    }
    
    handleEdit(){
        this.setState({
            isEditing:!this.state.isEditing,
        })
    }
   
    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <GenInfo generalInfo={this.state.generalInfo} isEditing={this.state.isEditing} name={this.state.name} email={this.state.email} number={this.state.phoneNumber} handleChange={this.handleChangeGeneral}/>
                <br />
                <EducationInfo schoolName={this.state.schoolName} major={this.state.major} yearAt={this.state.yearAt} isEditing={this.state.isEditing} handleChange={this.handleChange} />
                <br />
                <ExperienceInfo companyName={this.state.companyName} positionTitle={this.state.positionTitle} jobTasks={this.state.jobTasks} jobDateStart={this.state.jobDateStart} jobDateEnd={this.state.jobDateEnd} isEditing={this.state.isEditing} handleChange={this.handleChange} />
                <br />
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
        const inputInfoName = <div><input id="generalInfo" name="name" value={this.props.generalInfo.name} onChange={this.props.handleChange}></input></div>;
        const inputInfoEmail = <div><input id="generalInfo" name="email" value={this.props.generalInfo.email} onChange={this.props.handleChange}></input></div>;
        const inputInfoNumber = <div><input id="generalInfo" name="phoneNumber" value={this.props.generalInfo.number} onChange={this.props.handleChange}></input></div>;
        return(
            <div style={inputStyle}>
                {!this.props.isEditing?
                <div>
                    Name:{inputInfoName}
                    Email:{inputInfoEmail}
                    Phone Number:{inputInfoNumber}
                </div>:
                <div>
                    Name:<div>{this.props.name}</div>
                    Email:<div>{this.props.email}</div>
                    Phone Number:<div>{this.props.number}</div>

                </div>
                }
                
                <br />
                {this.props.isEditing?<div><button>Add More (+)</button><button>Edit</button></div>:<div><button>Add More (+)</button></div>}
            </div>
        );
    }
}

class EducationInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const inputSchool = <div><input name="schoolName" value={this.props.schoolName} onChange={this.props.handleChange}></input></div>;
        const inputMajor = <div><input name="major" value={this.props.major} onChange={this.props.handleChange}></input></div>;
        const inputYears = <div><input name="yearAt" value={this.props.yearAt} onChange={this.props.handleChange}></input></div>;
        return(
            <div style={inputStyle}>
                School:{this.props.isEditing ? <div>{this.props.schoolName}</div>:inputSchool}
                Major that you studied:{this.props.isEditing ? <div>{this.props.major}</div>:inputMajor}
                Years you attened:{this.props.isEditing ? <div>{this.props.yearAt}</div>:inputYears}
                <br />
                
                {this.props.isEditing?<div><button>Add More (+)</button><button>Edit</button></div>:<div><button>Add More (+)</button></div>}
            </div>
        )
    }
}

class ExperienceInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const inputCompanyName = <div><input name="companyName" value={this.props.companyName} onChange={this.props.handleChange}></input></div>;
        const inputPositionTitle = <div><input name="positionTitle" value={this.props.positionTitle} onChange={this.props.handleChange}></input></div>;
        const inputJobTasks = <div><textarea rows="4" cols="50" name="jobTasks" value={this.props.jobTasks} onChange={this.props.handleChange}></textarea></div>;
        const inputJobDateStart=<div><input name="jobDateStart" value={this.props.jobDateStart} onChange={this.props.handleChange}></input></div>
        const inputJobDateEnd=<div><input name="jobDateEnd" value={this.props.jobDateEnd} onChange={this.props.handleChange}></input></div>

        return(
            <div style={inputStyle}>
                Company Name:{this.props.isEditing ? <div>{this.props.companyName}</div>:inputCompanyName}
                Position Title:{this.props.isEditing ? <div>{this.props.positionTitle}</div>:inputPositionTitle}
                Main tasks of your job:{this.props.isEditing ? <div>{this.props.jobTasks}</div>:inputJobTasks}
                Date Started:{this.props.isEditing ? <div>{this.props.jobDateStart}</div>:inputJobDateStart}
                Date Ended:{this.props.isEditing ? <div>{this.props.jobDateEnd}</div>:inputJobDateEnd}
                <br />
                
                {this.props.isEditing?<div><button>Add More (+)</button><button>Edit</button></div>:<div><button>Add More (+)</button></div>}
            </div>
        )
    }
}


export default App;