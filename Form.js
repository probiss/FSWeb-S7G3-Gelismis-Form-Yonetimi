import React from 'react';

const Form =(props) => {
    const {handleChange,submitDisable,handleSubmit} =  props;
    const {name,email,password,terms} = props.member;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" > İsim
                <input id="name" name="name" onChange={handleChange} value={name} type="text" />
                </label>

                <label htmlFor="email" > E-Mail :
                <input id="email" name="email" onChange={handleChange} value={email} type="email" />
                </label>

                <label htmlFor="password" > Password
                <input id="password" name="password" onChange={handleChange} value={password} type="password" />
                </label>

                <input id="terms" name="terms" onChange={handleChange} value={terms} type="checkbox" />
                <label htmlFor="terms" > Kullanım koşullarını kabul ediyorum. </label>

                <input type="submit" value="Gönder Brooo" disabled={submitDisable} />
            </form>
        </div>
    )
};

export default Form ;