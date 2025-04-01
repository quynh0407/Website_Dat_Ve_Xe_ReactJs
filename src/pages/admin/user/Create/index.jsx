import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
    password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số'
        ),
   
});

function UserCreate() {
    return (
        <Formik
            initialValues={{ fullName: '', email: '', phone: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form data =>', values);
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="container mx-auto p-4">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-2">Thêm người dùng</h3>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Họ và Tên</label>
                            <Field
                                name="fullName"
                                type="text"
                                className={`w-full p-2 border-[1.5px] rounded ${touched.fullName && errors.fullName ? 'border-red-700' : 'border-gray-300'}`}
                                placeholder="Nhập họ và tên"
                            />
                            <ErrorMessage name="fullName" component="div" className="text-red-700 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <Field
                                name="email"
                                type="text"
                                className={`w-full p-2 border-[1.5px] rounded ${touched.email && errors.email ? 'border-red-700' : 'border-gray-300'}`}
                                placeholder="Nhập email"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-700 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                            <Field
                                name="phone"
                                type="text"
                                className={`w-full p-2 border-[1.5px] rounded ${touched.phone && errors.phone ? 'border-red-700' : 'border-gray-300'}`}
                                placeholder="Nhập số điện thoại"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-700 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Mật khẩu</label>
                            <Field
                                name="password"
                                type="password"
                                className={`w-full p-2 border-[1.5px] rounded ${touched.password && errors.password ? 'border-red-700' : 'border-gray-300'}`}
                                placeholder="Nhập mật khẩu"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-700 text-sm mt-1" />
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
                            Thêm người dùng
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default UserCreate;
