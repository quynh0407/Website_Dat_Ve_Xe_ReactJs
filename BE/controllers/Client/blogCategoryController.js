const BlogCategoryModel = require('../../models/blogCategoryModel');

class BlogCategoryController {
    static async getAll(req, res) {
        try {
            const categories = await BlogCategoryModel.findAll({
                where: { status: 1 } 
            });
    
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

    
}

module.exports = BlogCategoryController;
