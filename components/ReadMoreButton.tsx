"use client"
import { useRouter } from "next/navigation"
import { encode } from "querystring"
type Props = {
    article: Article
}

function ReadMoreButton({ article }: Props) {
    const router = useRouter()

    const handleClick = () => {
        const url = `/article?${encode(article)}`
        router.push(`${url}`)
    }

    return (
        <button
            onClick={handleClick}
            className="bg-[#D2B05C] h-10 rounded-b-lg dark:text-gray-900 hover:bg-[#D2B05C]"
        >Read More

        </button>
    )
}

export default ReadMoreButton