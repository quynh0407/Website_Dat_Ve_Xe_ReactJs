import { Button, IconButton } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
    count, // Tổng số sản phẩm
    itemsPerPage, // Số sản phẩm mỗi trang
    currentPage, // Trang hiện tại
    onPageChange, // Hàm xử lý khi chuyển trang
}) {
    const totalPages = Math.ceil(count / itemsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex items-center gap-1">
            <Button variant="ghost" className="flex bg-white text-[#043175] shadow-none" onClick={handlePrev} disabled={currentPage === 1}>
                <ChevronLeft className="mr-1.5 h-4 w-4 stroke-2" />
                trước
            </Button>

            {Array.from({ length: totalPages }, (_, index) => (
                <IconButton
                    key={index + 1}
                    className={`bg-white shadow-none border-[1px] text-sky-950 ${currentPage === index + 1 ? 'bg-[#043175] text-white' : ''}`}
                    variant={currentPage === index + 1 ? "filled" : "ghost"}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </IconButton>
            ))}

            <Button variant="ghost" className="flex bg-white text-[#043175] shadow-none" onClick={handleNext} disabled={currentPage === totalPages}>
                <p>kế Tiếp</p>
                <ChevronRight className="ml-1.5 h-4 w-4 stroke-2" />
            </Button>
        </div>
    );
}
