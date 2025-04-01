import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const userData = [
    { ID: 1, fullName: "Dương Quốc Trọng", email: "trong@gmail.com", phone: "0987654321", role: "customer", status: 1 },
    { ID: 2, fullName: "Trần Thị B", email: "tranthib@gmail.com", phone: "0978123456", role: "admin", status: 0 },
];

const validationSchema = Yup.object({
    fullName: Yup.string()
        .required("Vui lòng nhập họ tên đầy đủ")
        .min(5, "Họ và tên phải ít nhất có 5 kí tự"),
    email: Yup.string()
        .required("Vui lòng nhập địa chỉ email")
        .email("Email không đúng định dạng"),
    phone: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/^[0-9\-\+]{10}$/, "Số điện thoại không đúng định dạng"),
});

function UserEdit() {
    const { id } = useParams();
    const [initialValues, setInitialValues] = useState({ fullName: "", email: "", phone: "",  });

    useEffect(() => {
        const userToEdit = userData.find(user => user.ID.toString() === id);
        if (userToEdit) {
            setInitialValues({
                fullName: userToEdit.fullName,
                email: userToEdit.email,
                phone: userToEdit.phone,
                role: userToEdit.role,
                status: userToEdit.status
            });
        }
    }, [id]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(values) => {
                console.log("Updated User Data:", values);
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="container mx-auto p-4">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Chỉnh sửa người dùng</h3>

                        <div className="mb-4">
                            <label className="block text-sm font-medium">Họ và Tên</label>
                            <Field 
                                name="fullName" 
                                type="text" 
                                className={`w-full p-2 border-[1.5px] rounded ${touched.fullName && errors.fullName ? 'border-red-700' : 'border-gray-300'}`} 
                                placeholder="Nhập họ và tên" 
                            />
                            <ErrorMessage name="fullName" component="div" className="text-red-700 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium">Email</label>
                            <Field 
                                name="email" 
                                type="text" 
                                className={`w-full p-2 border-[1.5px] rounded ${touched.email && errors.email ? 'border-red-700' : 'border-gray-300'}`} 
                                placeholder="Nhập email" 
                            />
                            <ErrorMessage name="email" component="div" className="text-red-700 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium">Số điện thoại</label>
                            <Field 
                                name="phone" 
                                type="text" 
                                className={`w-full p-2 border-[1.5px] rounded ${touched.phone && errors.phone ? 'border-red-700' : 'border-gray-300'}`} 
                                placeholder="Nhập số điện thoại" 
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-700 text-sm mt-1" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Vai trò</label>
                                <Field as="select" name="role" className="w-full p-2 border-[1.5px] rounded">
                                    <option value="admin">Admin</option>
                                    <option value="customer">Khách hàng</option>
                                </Field>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Trạng thái</label>
                                <Field as="select" name="status" className="w-full p-2 border-[1.5px] rounded">
                                    <option value="0">Khóa</option>
                                    <option value="1">Đang hoạt động</option>
                                </Field>
                            </div>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-[#073272] text-white rounded">
                            Cập nhật người dùng
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default UserEdit;
