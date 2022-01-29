import React from 'react';
import logo from '../../assets/logo.png';

const RegisterFormComponent = (props) => {
    const [currentPage, setCurrentPage] = React.useState('personalInformation');
    
    /** Form states */
    const [fullName, setFullName] = React.useState();
    const [address, setAddress] = React.useState();
    const [dob, setDob] = React.useState();
    const [ssn, setSsn] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [passwordVerify, setPasswordVerify] = React.useState();

    switch (currentPage){
        case 'personalInformation':
            return <PersonalInformation
                fullName={fullName}
                address={address}
                dob={dob}
                ssn={ssn}
                setFullName={setFullName}
                setAddress={setAddress}
                setDob={setDob}
                setSsn={setSsn}
                setCurrentView={props.setCurrentView} 
                setCurrentPage={setCurrentPage} />
        case 'userInformation':
            return <UserInformation 
            email={email}
            password={password}
            passwordVerify={passwordVerify}
            setEmail={setEmail}
            setPassword={setPassword}
            setPasswordVerify={setPasswordVerify}
            setCurrentView={props.setCurrentView} 
            setCurrentPage={setCurrentPage} />
        case 'summary':
            return <Summary 
                    fullName={fullName}
                    address={address}
                    dob={dob}
                    ssn={ssn}
                    email={email}
                    setCurrentPage={setCurrentPage}
             />
        default:
            return <PersonalInformation 
                setFullName={setFullName}
                setAddress={setAddress}
                setDob={setDob}
                setSsn={setSsn}
                setCurrentView={props.setCurrentView} 
                setCurrentPage={setCurrentPage} />
    }
  
}

const PersonalInformation = (props) => {
    return <div className='login-box'>
            <img src={logo} className='login-box-logo' />
            <input type='text' placeholder='Full name' className='login-box-input' value={props.fullName} onChange={(ev) => props.setFullName(ev.target.value)}/>
            <input type='text' placeholder='Address' className='login-box-input' value={props.address} onChange={(ev) => props.setAddress(ev.target.value)}/>
            <input type='date' placeholder='Date of birth' className='login-box-input' value={props.dob} onChange={(ev) => props.setDob(ev.target.value)}/>
            <input type='number' max='4' placeholder='Last four of SSN' value={props.ssn} className='login-box-input' onChange={(ev) => {if(ev.target.value.length <= 4){props.setSsn(ev.target.value)}}}/>
            
            {(props.fullName && props.address && props.dob && props.ssn) ? 
            <span className='login-submit-button' onClick={() => props.setCurrentPage('userInformation')}>Next</span>
            :
            <span className='login-submit-button-disabled'>All fields required</span>
            }
            <p className='sign-up-text' onClick={() => props.setCurrentView('login')}>Already have an account? Sign in</p>
        </div>
}

const UserInformation = (props) => {
    return <div className='login-box'>
            <img src={logo} className='login-box-logo' />
            <input type='email' placeholder='E-mail' className='login-box-input' value={props.email} onChange={(ev) => props.setEmail(ev.target.value)}/>
            <input type='password' placeholder='Password' className='login-box-input' value={props.password} onChange={(ev) => props.setPassword(ev.target.value)}/>
            <input type='password' placeholder='Verify password' className='login-box-input' value={props.passwordVerify} onChange={(ev) => props.setPasswordVerify(ev.target.value)}/>
            {(props.email && props.password && props.password.length > 7 && (props.passwordVerify === props.password)) ? 
            <span className='login-submit-button' onClick={() => props.setCurrentPage('summary')}>Next</span>
            :
            <span className='login-submit-button-disabled'>All fields required</span>
            }
            <p className='sign-up-text' onClick={() => props.setCurrentPage('personalInformation')}>Go back</p>
        </div>
}

const Summary = (props) => {
    return <div className='login-box'>
            <img src={logo} className='login-box-logo' />
            <div className='summary-section'>
                <span className='summary-text'>Confirm details</span>
                <div className='summary-item'>
                    <span>Name:</span>
                    <span className='summary-value'>{props.fullName}</span>
                </div>
                <div className='summary-item'>
                <span>Address: </span>
                <span className='summary-value'>{props.address}</span>
                </div>
                <div className='summary-item'>
                    <span>Date of birth: </span>
                    <span className='summary-value'>{props.dob}</span>
                </div>
                <div className='summary-item'>
                    <span>Last four of SSN: </span>
                    <span className='summary-value'>{props.ssn}</span>
                </div>
                <div className='summary-item'>
                    <span>Email: </span>
                    <span className='summary-value'>{props.email}</span>
                </div>
            </div>
            <span className='login-submit-button' maxlength='4'>Confirm & sign up</span>
            <p className='sign-up-text' onClick={() => props.setCurrentPage('userInformation')}>Go back</p>
        </div>
}

export default RegisterFormComponent;