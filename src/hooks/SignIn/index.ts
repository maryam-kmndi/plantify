import api from "../../services/apiClient";

type LoginDataType = {
    email: string;
    password: string;
} 
const md5 = require("blueimp-md5");

interface loginReqParameter extends LoginDataType {
    salt: string
    challenge: string
}

const signInUsers = async (userDetails: loginReqParameter) => {
    console.log(userDetails);

    const { salt, challenge, email, password } = userDetails
    
    const hashPass = md5(`${password} ${salt}`)
    console.log(hashPass);

    const lastHashPass = md5(`${challenge} ${hashPass}`)
    console.log(lastHashPass);
    
    const userData = { email, password: lastHashPass, challenge }
    console.log(userData);

    try {
        const request = await api.post(`authhash`, userData)
        console.log(request.data);
        const { email, name } = request.data
        localStorage.setItem("LoginRequestInfo", JSON.stringify({ email, name }))
        return {success:true}
    } catch (e) {        
        return { success: false }
    }
}

export default signInUsers