import React from 'react'
import { Field, Form, Formik } from "formik";
const UserAccountDetails = ({initialValues, filteredKeys, data, onSubmit}) => {

  return (
      <Formik
          initialValues={initialValues}
          onSubmit={(values, actions)=> onSubmit}
          validate={(values) => {
          }}
        >
          {(props) => (
            <Form className="h-full">
              {filteredKeys
                .filter((key) => Object.keys(data).includes(key))
                .map((x, index) => {
                  return (
                    <Field
                      key={index}
                      name="email"
                      type="text"
                      autoComplete="off"
                      className="user_info_data border-2 px-3 border-black w-full h-10 rounded-xl font-light mt-3"
                      value={data[x]}
                      disabled={x !== "full_name"}
                    />
                  );
                })}
              {/* <button type="submit">Submit</button> */}
            </Form>
          )}
        </Formik>
  )
}

export default UserAccountDetails
