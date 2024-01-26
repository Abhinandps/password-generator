import axios from "axios";

export const generatePassword = async (passwordDto: any) => {

    try {
        const response = await axios.post('http://localhost:3001/api/password/generate', passwordDto, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            const generatedPassword = response.data.password;
            // console.log('Generated Password:', generatedPassword);
            return generatedPassword
        } else {
            console.error('Error generating password:', response.statusText);
        }
    } catch (error: any) {
        console.error('Error generating password:', error.message);
    }
};


