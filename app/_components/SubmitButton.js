"use client"
import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingText }) {
    const { pending } = useFormStatus(); // the parent client component
    return <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300" disabled={pending}>
        {pending ? pendingText : children}
    </button>

}

export default SubmitButton
