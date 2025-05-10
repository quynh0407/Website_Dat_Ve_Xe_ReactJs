import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const ConfirmCancelModel = ({ ticketId, onClose }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const selectedReason = watch('reason');
    const customReason = watch('customReason');

    const predefinedReasons = [
        'Vé không còn hiệu lực',
        'Lịch trình bị thay đổi',
        'Sự cố cá nhân',
        'Vé đã mua nhầm',
        'Khác'
    ];

    const onSubmit = async (data) => {
        const reasonToSend = data.reason === 'Khác' ? data.customReason : data.reason;

        try {
            console.log('id vé ==>', ticketId);
            console.log('lý do ==>', reasonToSend);
            toast.success('Vé đã được hủy thành công');
            onClose();
        } catch (err) {
            toast.error('Vé hủy thất bại');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg min-w-[35rem]">
                <div className="flex items-center rounded-t-lg py-2 bg-orange-600">
                    <hr className="flex-grow border-t-2 border-gray-300" />
                    <h3 className="mx-4 text-xl font-semibold text-white text-center">Hủy vé</h3>
                    <hr className="flex-grow border-t-2 border-gray-300" />
                </div>

                <form className="p-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p className="mb-2 text-red-600">Lý do hủy vé:</p>
                        <div className="space-y-2">
                            {predefinedReasons.map((reason, index) => (
                                <label key={index} className="block">
                                    <input
                                        type="radio"
                                        value={reason}
                                        {...register('reason', { required: 'Vui lòng chọn lý do hủy vé' })}
                                        className="mr-2"
                                    />
                                    {reason}
                                </label>
                            ))}
                        </div>
                        {errors.reason && (
                            <p className="text-red-500 mt-1">{errors.reason.message}</p>
                        )}
                    </div>

                    {selectedReason === 'Khác' && (
                        <div className="mt-4">
                            <label className="block text-red-600">Lý do hủy (nếu khác):</label>
                            <textarea
                                {...register('customReason', {
                                    required: 'Vui lòng nhập lý do hủy vé nếu chọn Khác'
                                })}
                                placeholder="Nhập lý do hủy vé của bạn"
                                rows={4}
                                className="mt-2 p-2 border rounded w-full"
                            />
                            {errors.customReason && (
                                <p className="text-red-500 mt-1">{errors.customReason.message}</p>
                            )}
                        </div>
                    )}

                    <div className="mt-4 flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                        >
                            Hủy vé
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConfirmCancelModel;
