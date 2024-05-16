
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import axios from 'axios'
import { Formik } from 'formik'
    
    const Dashboard = () => {
        const {data,setdata} = useContext(MainContext)
        console.log(data);

        const deleteData = (id) => {
            console.log(`http://localhost:8080/api/product/${id}`);
            axios.delete(`http://localhost:8080/api/product/${id}`).then(res => {
                setdata(data.filter(item => item._id !== id))
                console.log("item deleted");
            })
        }
        
        return (
        <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dashboard</title>
                    {/* <link rel="icon" type="image/x-icon" href="x"></link> favicon*/}
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">image</th>
                        <th scope="col">title</th>
                        <th scope="col">discrip</th>
                        <th scope="col">price</th>
                        <th scope="col">delete</th>
                        <th scope="col">edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                {
                    data.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td scope="col">{index}</td>
                                <td scope="col"><img src={item.image} width={"60px"} height={"60px"} alt="" /></td>
                                <td scope="col">{item.title}</td>
                                <td scope="col">{item.description}</td>
                                <td scope="col">{item.price}</td>
                                <td scope="col"><button className='btn btn-danger' onClick={() => deleteData(item._id)}>delete</button></td>
                                <td scope="col">

                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal_${item._id}`}>
                                edit
                                </button>
                                </td>
                                <div class="modal fade" id={`exampleModal_${item._id}`}  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">edit product</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            
                                        <Formik
                                                initialValues={{
                                                    title: item.title,
                                                    image:item.image,
                                                    description: item.description,
                                                    price: item.price
                                                }}
                                                onSubmit={(values, { setSubmitting }) => {
                                                    axios.put(`http://localhost:8080/api/product/${item._id}`, values).then((res) => {
                                                        
                                                    setdata(data.map(d => d._id === item._id ? res.data : d));
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
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                            </tr>
                        );
                    })
                }

                    </tbody>
                    </table>
                </div>
        </>
        )
    }
    
    export default Dashboard
        