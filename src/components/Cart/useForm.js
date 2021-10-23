import { useState, useMemo } from 'react';

const useForm = () => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [email, setEmail] = useState("");
    const [emailVerification, setEmailVerification] = useState("");
    const [errors, setErrors] = useState([false, false, false, false]);

    const disabled = useMemo(() => {
        let result = false;

        setErrors((prevErrors) => {
            if (name.length < 3) {
                prevErrors[0] = true; result = true;
            } else prevErrors[0] = false;

            if (number.toString().length < 9) {
                prevErrors[1] = true; result = true;
            } else prevErrors[1] = false;

            if (!validateEmail(email)) {
                prevErrors[2] = true; result = true;
            } else prevErrors[2] = false;

            if (email !== emailVerification) {
                prevErrors[3] = true; result = true;
            } else prevErrors[3] = false;

            return prevErrors;
        })

        return result;

    }, [name, number, email, emailVerification])

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return useMemo(() => ({ name, number, email, emailVerification, setName, setNumber, setEmail, setEmailVerification, disabled, errors }),
        [name, number, email, emailVerification, setName, setNumber, setEmail, setEmailVerification, disabled, errors]);

}

export default useForm;