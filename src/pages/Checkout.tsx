// components
import { Form } from '../components/form/Form'
// router hooks
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center px-6 md:px-10">
            <div className="w-full max-w-[1100px]">
                <p
                    onClick={() => navigate(-1)}
                    className="mb-6 mt-4 cursor-pointer text-p opacity-50 md:mt-[33px] xl:mb-14 xl:mt-[79px]"
                >
                    Go Back
                </p>
                <Form />
            </div>
        </div>
    )
}
