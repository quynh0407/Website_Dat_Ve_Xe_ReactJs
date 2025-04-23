const BlogCategoryModel = require('../../models/blogCategoryModel');
const BlogModel = require('../../models/blogModel');
const UserModel = require('../../models/userModel');

class BlogController {

    static async get(req, res) {
        try {
        const categoryId = req.query.categoryId;

        const filter = { where: { status: 1 } };

        if (categoryId) {
            filter.include = [
                { model: UserModel },
                { model: BlogCategoryModel, as: 'blogCategory', where: { id: categoryId } }
            ];
        } else {
            filter.include = [
                { model: UserModel },
                { model: BlogCategoryModel, as: 'blogCategory' }
            ];
        }

        const blogs = await BlogModel.findAll(filter);

        res.status(200).json({
            status: 200,
            success: true,
            message: "Lấy danh sách bài viết thành công",
            data: blogs
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }
    


    static async getLatest(req, res) {
        try {
            const latestBlogs = await BlogModel.findAll({
                where: { status: 1 },
                order: [['createAt', 'DESC']],
                limit: 3
            });

            res.status(200).json({
                success: true,
                message: "Lấy 3 bài blog mới nhất thành công",
                data: latestBlogs
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }



    static async getById(req, res) {
        try {
            const { id } = req.params;
            const blog = await BlogModel.findOne({
                where: { id, status: 1 },
                include: [{ model: UserModel, as: 'User' }]
            });

            if (!blog) {
                return res.status(404).json({ message: "Không tìm thấy bài viết" });
            }

            res.status(200).json({
                status: 200,
                success: true,
                message: "Lấy dữ liệu thành công",
                data: blog,
            });
        } catch (err) {
            res.status(500).json({
                status: 500,
                success: false,
                message: "Lấy dữ liệu thất bại",
            });
        }
    }



}

module.exports = BlogController;
