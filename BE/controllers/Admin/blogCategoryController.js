const BlogCategoryModel = require('../../models/blogCategoryModel');

class BlogCategoryController {
    static async getAll(req, res) {
        try {
            const categories = await BlogCategoryModel.findAll();
            res.status(200).json({
                success: true,
                message: "Lấy danh sách danh mục thành công",
                data: categories
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const category = await BlogCategoryModel.findByPk(id);
            if (!category) {
                return res.status(404).json({ success: false, message: "Không tìm thấy danh mục" });
            }

            res.status(200).json({
                success: true,
                message: "Lấy danh mục thành công",
                data: category
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const { name, description, status } = req.body;
            const image = req.file ? req.file.filename : null;
    
            // Kiểm tra bắt buộc trường name và status
            if (!name) {
                return res.status(400).json({ success: false, message: "Tên danh mục là bắt buộc!" });
            }
    
            if (status !== '0' && status !== '1') {
                return res.status(400).json({ success: false, message: "Trạng thái không hợp lệ!" });
            }
    
            // Kiểm tra xem tên danh mục đã tồn tại chưa
            const existingCategory = await BlogCategoryModel.findOne({
                where: { name }
            });
    
            if (existingCategory) {
                return res.status(400).json({
                    success: false,
                    message: "Tên danh mục đã tồn tại! Vui lòng chọn tên khác."
                });
            }
    
            // Tạo mới danh mục blog
            const newCategory = await BlogCategoryModel.create({
                name,
                description,
                image,
                status
            });
    
            res.status(201).json({
                status: 201,
                success: true,
                message: "Thêm danh mục blog thành công!",
                data: newCategory
            });
    
        } catch (error) {
            console.error("Lỗi khi tạo danh mục blog:", error);
            res.status(500).json({ success: false, message: "Lỗi server khi tạo danh mục blog" });
        }
    }
    

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, description, status } = req.body;
            const image = req.file ? req.file.filename : undefined;
    
            // Kiểm tra xem danh mục có tồn tại không
            const category = await BlogCategoryModel.findByPk(id);
            if (!category) {
                return res.status(404).json({
                    status: 404,
                    success: false,
                    message: "Không tìm thấy danh mục"
                });
            }
    
            // Kiểm tra trùng tên trước khi cập nhật
            if (name) {
                const existingCategory = await BlogCategoryModel.findOne({ where: { name } });
                if (existingCategory && existingCategory.id !== category.id) {
                    return res.status(400).json({
                        status: 400,
                        success: false,
                        message: "Tên danh mục đã tồn tại"
                    });
                }
            }
    
            // Cập nhật danh mục
            const updatedCategory = await category.update({
                name: name || category.name,
                description: description || category.description,
                status: status !== undefined ? parseInt(status) : category.status,
                ...(image && { image }) // Chỉ cập nhật ảnh nếu có
            });
    
            res.status(200).json({
                status: 200,
                success: true,
                message: "Cập nhật danh mục thành công",
                data: updatedCategory
            });
        } catch (error) {
            console.log("Error updating category: ", error); // Log error để dễ dàng debug
            res.status(500).json({
                status: 500,
                success: false,
                message: "Lỗi khi cập nhật danh mục",
                error: error.message
            });
        }
    }
    

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const category = await BlogCategoryModel.findByPk(id);
            if (!category) {
                return res.status(404).json({ success: false, message: "Danh mục không tồn tại" });
            }

            await category.destroy();

            res.status(200).json({
                success: true,
                message: "Xóa danh mục thành công"
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getActive(req, res) {
        try {
            const categories = await BlogCategoryModel.findAll({
                where: { status: 1 }
            });
    
            res.status(200).json({
                success: true,
                message: "Lấy danh mục đang hiển thị thành công",
                data: categories
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    
}

module.exports = BlogCategoryController;
