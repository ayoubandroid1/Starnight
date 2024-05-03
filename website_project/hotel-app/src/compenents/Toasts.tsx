import React, { useEffect } from 'react';
import "./toasts.css";

type ToastProps = {
    message: string;
    type: "SUCCESS" | "ERROR";
    onClose: () => void;
};

function Toasts({ message, type, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    const toastClasses = `toast ${
        type === "SUCCESS" ? "bg-green-400" : "bg-red-400"
    } text-white font-medium shadow-md rounded-md p-4`;

    return (
        <div className={toastClasses}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <svg
                        className={`h-6 w-6 ${
                            type === "SUCCESS" ? "text-green-700" : "text-red-700"
                        } mr-2`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        {type === "SUCCESS" ? (
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 6a1 1 0 00-1 1v5a1 1 0 102 0V7a1 1 0 00-1-1zm0 10a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 5.293a1 1 0 10-1.414 1.414l8 8a1 1 0 001.414-1.414l-8-8z"
                                clipRule="evenodd"
                            />
                        )}
                    </svg>
                    <span>{message}</span>
                </div>
                <button
                    className="text-xl font-semibold focus:outline-none"
                    onClick={onClose}
                >
                    &times;
                </button>
            </div>
        </div>
    );
}

export default Toasts;
