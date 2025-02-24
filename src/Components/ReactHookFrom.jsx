import React from 'react';
import { useForm } from 'react-hook-form'; // Importing the hook from react-hook-form
import Layout from './Layout/Layout';

const ReactHookForm = () => {
    // Destructure methods from useForm
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log("Form Submitted");
        console.log("Form Data:", data);
    };

    return (
        <Layout>    
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Field */}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "Email is required", pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                {/* Name Field */}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                {/* Phone Number Field */}
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        {...register("phoneNumber", { required: "Phone Number is required" })}
                    />
                    {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
                </div>
                {/* Submit Button */}
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </Layout>
    );
};

export default ReactHookForm;





// Key Changes:
// useForm Hook:

// The useForm hook is used to manage the form's state and validation. You no longer need useState for each field individually.
// The register method is used to connect form inputs to React Hook Form. It takes care of registering input values and handling the validation rules.
// The handleSubmit function is used to trigger form submission. It takes the onSubmit function that is called when the form is valid.
// Validation:

// Validation rules are passed to the register method for each input. You can specify rules like required (field must not be empty), or you can set a pattern (to match a specific format, such as email or phone).
// errors is an object that contains validation error messages. If any error occurs during validation, we display it next to the input.
// Error Handling:

// If there are validation errors, an error message is shown below each input.
// Form Submission:

// On form submission, the onSubmit function is called, which will log the entire form data to the console.
// Validation Example:
// Email: It is marked as required, and a basic email pattern is used.
// Name: It is also marked as required.
// Phone Number: It is marked as required.
// Advantages of Using React Hook Form:
// Simplified State Management: React Hook Form automatically manages the state of the form fields, so you don't need to manage them with useState manually.
// Easy Validation: It makes validation and error handling very easy with just a few lines of code.
// Performance: React Hook Form is optimized for performance because it minimizes re-renders of the form components.
// Less Boilerplate: By using useForm and register, you avoid having to manually manage each input field's state and onChange handlers.
// This is a more efficient, scalable, and easier way to handle forms in React, especially when forms become larger or more complex.