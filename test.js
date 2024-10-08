import React from 'react';
import useForm from './useForm';
import useApi from './useApi';

const validate = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = 'Name is required';
    }
    return errors;
};

const FormComponent = () => {
    const { values, errors, handleChange, handleSubmit } = useForm({ name: '' }, validate);

    const submitForm = () => {
        console.log('Form submitted:', values);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e, submitForm)}>
            <input name="name" value={values.name} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}
            <button type="submit">Submit</button>
        </form>
    );
};

const ApiComponent = () => {
    const { data, loading, error } = useApi('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {data.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

const App = () => (
    <div>
        <h1>Form Handling and API Requests Hooks</h1>
        <FormComponent />
        <ApiComponent />
    </div>
);

export default App;
