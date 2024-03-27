import {useState} from "react";
export const useHandleInputChange = (event) => {
    const initialState={
        name:'',
        email:'',
        message:''
    }

    const [form, setForm] = useState(initialState);

    const updateForm = (event) => {
        const {name, value} = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return {form, updateForm};
}