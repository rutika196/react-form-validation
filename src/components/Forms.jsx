import React, { useState } from "react";
import "./Form.css";

export const Form = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [country, setCountry] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault(); //stop page reload
        let formErrors = {};
        
        //full name validation
        if(!fullName.trim()){
            formErrors.fullName = 'full name is required';
        }
        // email validation
        if(!email.trim()){
            formErrors.email = 'email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'email is invalid';
        }

        // passward validation
        if(!password.trim()){
            formErrors.password = 'passward is required';
        }else if(password.length <6){
            formErrors.password = 'Password must be at least 6 characters';
        }

        // bio validation
        if(!bio.trim()){
            formErrors.bio = 'Bio is required';
        } else if (bio.length < 10){
            formErrors.bio ='Bio must be at least 10 characters';
        }

        // gender validation
        if(!gender) {
            formErrors.gender = 'Please select your gender';
        }
         // Country Validation
        if (!country) {
            formErrors.country = 'Please select your country';
        }

        // Accept Terms Validation
        if (!acceptTerms) {
            formErrors.acceptTerms = 'You must accept the Terms and Conditions';
        }

        // Profile Picture Validation
        if (!profilePic) {
            formErrors.profilePic = 'Please upload a profile picture';
        }

        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors);
            return;
        }else {
            console.log({fullName,
                email,
                password,
                bio,
                gender,
                acceptTerms,
                country,
                profilePicName: profilePic.name,});
            alert('form submitted successfully');
        }
    }
    
    const handleFileChange =(e) => {
        setProfilePic(e.target.files[0]);
    };   

    return (
        <div className="form-container">
            <div className="sidebar">
                {/* Sidebar content removed */}
            </div>
            
            <div className="form-fields">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullname">Full Name:</label>
                        <input 
                            type="text" 
                            id="fullname" 
                            name="fullname" 
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)} 
                            placeholder="Enter your full name"
                        />
                        {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                    </div>
                    
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your email" 
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter your password" 
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>

                    <div>
                        <label htmlFor="bio">Bio:</label>
                        <textarea
                            id="bio"
                            name="bio"
                            rows="4"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell us about yourself"
                        />
                        {errors.bio && <p className="error-message">{errors.bio}</p>}
                    </div>

                    <div>
                        <label>Gender:</label>
                        <div className="gender-options">
                            <div className="gender-option">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="Male"
                                    checked={gender === 'Male'}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            
                            <div className="gender-option">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="Female"
                                    checked={gender === 'Female'}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                            
                            <div className="gender-option">
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="Other"
                                    checked={gender === 'Other'}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                        {errors.gender && <p className="error-message">{errors.gender}</p>}
                    </div>

                    <div>
                        <label htmlFor="acceptTerms">Terms:</label>
                        <div className="checkbox-container">
                            <div className="gender-option">
                                <input
                                    type="checkbox"
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    checked={acceptTerms}
                                    onChange={(e) => setAcceptTerms(e.target.checked)}
                                />
                                <label htmlFor="acceptTerms">I accept the Terms and Conditions</label>
                            </div>
                            {errors.acceptTerms && <p className="error-message">{errors.acceptTerms}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="country">Country:</label>
                        <select
                            id="country"
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="">-- Select your country --</option>
                            <option value="United States">United States</option>
                            <option value="India">India</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                        </select>
                        {errors.country && <p className="error-message">{errors.country}</p>}
                    </div>

                    <div>
                        <label htmlFor="profilePic">Profile Picture:</label>
                        <div className="file-upload">
                            <input
                                type="file"
                                id="profilePic"
                                name="profilePic"
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                        </div>
                        {errors.profilePic && <p className="error-message">{errors.profilePic}</p>}
                        {profilePic && <p className="selected-file">Selected File: {profilePic.name}</p>}
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};