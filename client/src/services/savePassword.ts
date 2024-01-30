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
            console.error('Error saving password:', response.statusText);
        }
    } catch (error: any) {
        console.error('Error saving password:', error.message);
    }
};


