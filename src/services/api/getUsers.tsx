import { useNavigate } from "react-router-dom";

export const getUsers = async (...props: any)  => {


        const uri2 = 'https://good-luck-app-back-end.herokuapp.com/auth';

        const postUser = async () => {
            try {
                const resp = await fetch(uri2, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: props.data.get('email'), password: props.data.get('password') }),
                })
                if (!resp.ok) {
                    throw new Error(`Error! status: ${resp.status}`);
                }
                const result = await resp.json();
                if (result.message == 'Incorrect Username and/or Password!') {
                    console.log('Usuário não validado')
                    return false
                } else {
                    console.log('Usuário validado')
                    return true
                }
            } catch (err) {
                console.log(err);
            }
        }
        postUser()



    function handleClickHome() {
        props.setAuth(true)
        props.navigate("/home");
    }


};
