import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormData {
  fullName: string;
  email: string;
  dateOfBirth: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  username: string;
  password: string;
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  // Validasi atau requirement dicek
  // STEP 1
  const validationsSchemaStep1 = Yup.object({
    fullName: Yup.string().required("Full name is required!"),
    email: Yup.string()
      .email("Invalid Format")
      .required("Email Address is required!"),
    dateOfBirth: Yup.date().required("DOB is required"),
  });

  // STEP 2
  const validationsSchemaStep2 = Yup.object({
    streetAddress: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string()
      .matches(/^[0-9]{5}$/, "Invalid Zip Code")
      .required("Zipcode is required"),
  });

  // STEP 3
  const validationsSchemaStep3 = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  // Formik, value kosong
  const formik = useFormik<FormData>({
    initialValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      username: "",
      password: "",
    },
    validationSchema:
      step === 1
        ? validationsSchemaStep1
        : step === 2
        ? validationsSchemaStep2
        : validationsSchemaStep3,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const nextStep = () => setStep((prevStep) => prevStep + 1);

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* STEP1 */}
      {step === 1 && (
        <>
          <h2>Personal Information</h2>
          {/* UNTUK NAMA */}
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div>{formik.errors.fullName}</div>
            )}
          </div>

          {/* UNTUK EMAIL */}
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email && (
              <div>{formik.errors.email}</div>
            )}
          </div>

          {/* UNTUK DOB */}
          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
              <div>{formik.errors.dateOfBirth}</div>
            )}
          </div>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <h2>Address Information</h2>
          {/* ADDRESS */}
          <div>
            <label htmlFor="streetAddress">Street Address</label>
            <input
              id="streetAddress"
              name="streetAddress"
              type="text"
              value={formik.values.streetAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.streetAddress && formik.errors.streetAddress && (
              <div>{formik.errors.streetAddress}</div>
            )}
          </div>

          {/* CITY */}
          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.city && formik.errors.city && (
              <div>{formik.errors.city}</div>
            )}
          </div>

          {/* UNTUK STATE */}
          <div>
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              type="text"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.state && formik.errors.state && (
              <div>{formik.errors.state}</div>
            )}
          </div>

          {/* UNTUK ZIPCODE */}
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.zipCode && formik.errors.zipCode && (
              <div>{formik.errors.zipCode}</div>
            )}
          </div>
        </>
      )}

      {/* STEP3 */}
      {step === 3 && (
        <>
          <h2>Account Information</h2>
          {/* UNTUK USERNAME */}
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <div>{formik.errors.username}</div>
            )}
          </div>

          {/* UNTUK PASSWORD */}
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div>{formik.errors.password}</div>
            )}
          </div>
        </>
      )}

      {/* BUTTON SESSION */}
      <div>
        {/* previous button */}
        {step > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}

        {/* next button */}
        {step < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}

        {/* submit button */}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default MultiStepForm;
