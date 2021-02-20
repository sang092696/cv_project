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
            generalInfoArr:[],
            workInfoArr:[],
            educationInfoArr:[],
            hasSubmitted:false
           
        }
        this.handleChangeGeneral = this.handleChangeGeneral.bind(this)
        this.handleChangeSchool = this.handleChangeSchool.bind(this)
        this.handleChangeWork =this.handleChangeWork.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleEditPage = this.handleEditPage.bind(this)
        this.handleEditSection = this.handleEditSection.bind(this)
    }

    handleChangeGeneral(e){
        
        const value = e.target.value
        
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
    handleChangeSchool(e){
        
        const value = e.target.value
        
        this.setState((state)=>({
            educationInfo:{
                ...state.educationInfo,
                key:Math.random().toString(36).substr(2,9),
                [e.target.name]:value,
            }
        }
        ),()=>{
            console.log(this.state.educationInfo)
        });
    }
    handleChangeWork(e){
        
        const value = e.target.value
        
        this.setState((prevState)=>({
            workInfo:{
                ...prevState.workInfo,
                key:Math.random().toString(36).substr(2,9),
                [e.target.name]:value,
            }
        }
        ),()=>{
            console.log(this.state.workInfo)
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const newItem1=this.state.generalInfo
        const newItem2=this.state.educationInfo
        const newItem3=this.state.workInfo
        const items1 = [...this.state.generalInfoArr, newItem1]
        const items2 = [...this.state.educationInfoArr,newItem2]
        const items3 = [...this.state.workInfoArr,newItem3]

        
        this.setState((prevState)=>({
            generalInfoArr:items1,
            educationInfoArr:items2,
            workInfoArr:items3,

            generalInfo:{
                ...prevState.generalInfo,
                name:'',
                email:'',
                phoneNumber:'',
            },
            educationInfo:{
                ...prevState.educationInfo,
                schoolName:'',
                major:'',
                yearAt:'',
            },
            workInfo:{
                ...prevState.workInfo,
                companyName:'',
                positionTitle:'',
                jobTasks:'',
                jobDateStart:'',
                jobDateEnd:'',
            },
            hasSubmitted:true
        }),()=>{
            console.log(this.state.generalInfoArr)
            console.log(this.state.workInfoArr)
            console.log(this.state.educationInfoArr)
        })
    }
    
    handleEditPage(){
        this.setState({
            hasSubmitted:!this.state.hasSubmitted,
        })
    }

    handleEditSection(key,arr){
    
        this.setState({

        })
    }

   
    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <GenInfo generalInfoArr={this.state.generalInfoArr} hasSubmitted={this.state.hasSubmitted} generalInfo={this.state.generalInfo} handleChange={this.handleChangeGeneral}/>
                <br />
                <EducationInfo educationInfoArr={this.state.educationInfoArr} hasSubmitted={this.state.hasSubmitted} educationInfo={this.state.educationInfo} handleChange={this.handleChangeSchool} />
                <br />
                <ExperienceInfo workInfoArr={this.state.workInfoArr} hasSubmitted={this.state.hasSubmitted} workInfo={this.state.workInfo} handleChange={this.handleChangeWork} />
                <br />
                {this.state.hasSubmitted?<div><button onClick={this.handleEditPage}>Edit Page</button></div>:<div><button type='submit'>Submit!</button></div>}
            </form>
            
        );
    }
}

class GenInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const inputInfoName = <div><input id='generalInfo' name="name" value={this.props.generalInfo.name} onChange={this.props.handleChange}></input></div>;
        const inputInfoEmail = <div><input id='generalInfo' name="email" value={this.props.generalInfo.email} onChange={this.props.handleChange}></input></div>;
        const inputInfoNumber = <div><input id='generalInfo' name="phoneNumber" value={this.props.generalInfo.phoneNumber} onChange={this.props.handleChange}></input></div>;
        return(
            <div style={inputStyle}>
                {!this.props.hasSubmitted?
                <div>
                    Name:{inputInfoName}
                    Email:{inputInfoEmail}
                    Phone Number:{inputInfoNumber}
                </div>:
                <div>
                    <ul styles={{listStyleType:"none"}}>
                        {this.props.generalInfoArr.map((info)=>{
                            return(
                                <li key={info.key} >
                                    {" "}
                                    <div>Name:{info.name}</div>
                                    <div>Email:{info.email}</div>
                                    <div>Phone Number:{info.phoneNumber}</div>
                                </li>
                            );
                        })}
                    </ul>

                </div>
                }
                
                <br />
                {this.props.hasSubmitted?<div><button>Edit</button></div>:<div></div>}
            </div>
        );
    }
}

class EducationInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const inputSchool = <div><input id="educationInfo" name="schoolName" value={this.props.educationInfo.schoolName||""} onChange={this.props.handleChange}></input></div>;
        const inputMajor = <div><input id="educationInfo" name="major" value={this.props.educationInfo.major||""} onChange={this.props.handleChange}></input></div>;
        const inputYears = <div><input id="educationInfo" name="yearAt" value={this.props.educationInfo.yearAt||""} onChange={this.props.handleChange}></input></div>;
        return(
            <div>
                Education Experience:
                <div style={inputStyle}>
                {!this.props.hasSubmitted?
                <div>
                    School Name:{inputSchool}
                    Major:{inputMajor}
                    Years Attended:{inputYears}
                </div>:
                <div>
                    <ul styles={{listStyleType:"none"}}>
                        {this.props.educationInfoArr.map((info)=>{
                            return(
                                <li key={info.key} >
                                    {" "}
                                    <div>School Name:{info.schoolName}</div>
                                    <div>Major:{info.major}</div>
                                    <div>Years Attended:{info.yearAt}</div>
                                </li>
                            );
                        })}
                    </ul>

                </div>
                }
                <br />
                    
                </div>
                {this.props.hasSubmitted?<div><button>Add More (+)</button><button>Edit</button></div>:<div><button>Add More (+)</button></div>}
            </div>
        )
    }
}

class ExperienceInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const inputCompanyName = <div><input id="workInfo" name="companyName" value={this.props.workInfo.companyName} onChange={this.props.handleChange}></input></div>;
        const inputPositionTitle = <div><input id="workInfo" name="positionTitle" value={this.props.workInfo.positionTitle} onChange={this.props.handleChange}></input></div>;
        const inputJobTasks = <div><textarea id="workInfo" rows="4" cols="50" name="jobTasks" value={this.props.workInfo.jobTasks} onChange={this.props.handleChange}></textarea></div>;
        const inputJobDateStart=<div><input id="workInfo" name="jobDateStart" value={this.props.workInfo.jobDateStart} onChange={this.props.handleChange}></input></div>
        const inputJobDateEnd=<div><input id="workInfo" name="jobDateEnd" value={this.props.workInfo.jobDateEnd} onChange={this.props.handleChange}></input></div>

        return(
            <div>
                Work Experience:
                <div style={inputStyle}>
                {!this.props.hasSubmitted?
                <div>
                    Company Name:{inputCompanyName}
                    Position Title:{inputPositionTitle}
                    Job Responsibilities:{inputJobTasks}
                    Date Started:{inputJobDateStart}
                    Date Ended: {inputJobDateEnd}
                </div>:
                <div>
                   <ul styles={{listStyleType:"none"}}>
                        {this.props.workInfoArr.map((info)=>{
                            return(
                                <li key={info.key} >
                                    {" "}
                                    <div>Company Name:{info.companyName}</div>
                                    <div>Position Title:{info.positionTitle}</div>
                                    <div>Job Responsibilities:{info.jobTasks}</div>
                                    <div>Date Started:{info.jobDateStart}</div>
                                    <div>Date Ended:{info.jobDateEnd}</div>
                                </li>
                            );
                        })}
                    </ul>

                </div>
                }
                <br />
                
                </div>
                {this.props.hasSubmitted?<div><button>Add More (+)</button><button>Edit</button></div>:<div><button>Add More (+)</button></div>}
            </div>
        )
    }
}


export default App;