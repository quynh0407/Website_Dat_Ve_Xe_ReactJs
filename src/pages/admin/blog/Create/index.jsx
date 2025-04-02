import { useForm } from "react-hook-form";

function BlogCreate(){
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return(
        <>
            <div className="container mx-auto p-4">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-full mx-auto">
                    <h3 className="text-2xl font-bold mb-2">Thêm bài viết</h3>
                    <form className="p-4 border  rounded-md shadow-lg">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Tiêu đề bài viết</label>
                            <input
                                type="text"
                                className={`w-full p-2 border rounded ${errors.title ? '!border-red-500' : 'border-gray-300'}`}
                                {...register("title", {required: "Vui lòng nhập tiêu đề bài viết" })}
                                placeholder="Vui lòng nhập tiêu đề bài viết"
                            />
                            {errors.title && <p className="text-red-700">{errors.title.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Nội dung</label>
                            <textarea
                                type="text"
                                rows={10}
                                className={`w-full p-2 border rounded ${errors.content ? '!border-red-500' : 'border-gray-300'}`}
                                {...register("content", {required: "Vui lòng nhập nội dung bài viết" })}
                                placeholder="Vui lòng nhập nội dung bài viết"
                            />
                            {errors.content && <p className="text-red-700">{errors.content.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Hình ảnh</label>
                            <input
                                type="file"
                                className="w-full p-2 border rounded"
                                placeholder="Vui lòng nhập giờ kết thúc"
                                required
                            />
                        </div>
                        <button type="submit" onClick={handleSubmit(onSubmit)} className="px-4 py-2 bg-[#073272] text-white rounded">
                            Thêm bài viết</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default BlogCreate;