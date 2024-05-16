import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import { Formik } from 'formik';
import axios from 'axios';

const Add = () => {
    const { data, setdata } = useContext(MainContext);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <Formik
                    initialValues={{
                        title: '',
                        image: '',
                        description: '',
                        price: ''
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        axios.post("http://localhost:8080/api/product", values).then((res) => {
                            setdata([...data, res.data]);
                            console.log(data);
                        });
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                placeholder='title'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            {errors.title && touched.title && errors.title}
                            <input
                                type="text"
                                name="image"
                                placeholder='image'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.image}
                            />
                            {errors.image && touched.image && errors.image}
                            <input
                                type="text"
                                name="description"
                                placeholder='description'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            {errors.description && touched.description && errors.description}
                            <input
                                type="number"
                                name="price"
                                placeholder='price'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                            {errors.price && touched.price && errors.price}
                            <button type="submit">
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Add;
