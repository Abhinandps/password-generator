import axios from "axios";

export const getPasswords = async (email: string) => {

    try {
        const response = await axios.get(`https://react-password-generator-myca.vercel.app/api/password/${email}`);

        if (response.status === 200) {
            const savedPassword = response.data.res;
            return savedPassword
        }
    } catch (error: any) {
        throw new Error(error.response.data.message[0])
    }
};


