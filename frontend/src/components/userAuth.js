import { jwtDecode } from "jwt-decode";

export default async function UserAuth() {
    const token = await localStorage.getItem("token");
    if (token == null) {
        // toast.success("Token expire");
        return {
            role:"",
            name:"",
            email:""
        }
    } else {
        const decoded = jwtDecode(token);
        if (decoded === undefined) {
            return {
                role:"",
                name:"",
                email:""
            }
        } else {
            // console.log("decode ", decoded);
            return decoded
        }
    }
}
