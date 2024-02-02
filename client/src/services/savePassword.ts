import axios from "axios";

export const savePassword = async (passwordDto: any) => {


    try {
        const response = await axios.post('http://localhost:3001/api/password/save', passwordDto, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            // const savedPassword = response.data.password;
            console.log('status Password:', response.data);
            // return generatedPassword
        } else {
            // throw new Error(response.data.message[0])
            // console.error('Error generating password:', response.statusText);
        }
    } catch (error: any) {
        throw new Error(error.response.data.message[0])
        // console.error('Error generating password:', error.message);
    }
};


