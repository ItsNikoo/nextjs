"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error("Произошла ошибка:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-red-600">Что-то пошло не так!</h1>
            <p className="mt-4 text-lg text-gray-700">
                Произошла ошибка: {error.message}
            </p>
            {error.digest && (
                <p className="mt-2 text-sm text-gray-500">
                    Код ошибки: {error.digest}
                </p>
            )}
            <button
                onClick={() => reset()}
                className="mt-6 px-4 py-2 bg-gray-200 rounded transition cursor-pointer hover:bg-black/20"
            >
                Попробовать снова
            </button>
        </div>
    );
}