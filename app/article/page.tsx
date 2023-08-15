
import TimeStamp from "@/components/Timestamp";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article
}

function ArticlePage({ searchParams }: Props) {
    if (
        (searchParams && Object.entries(searchParams).length === 0) || !searchParams
    ) return notFound()

    const article: Article = searchParams;
    console.log(article)
    return (
        <article>
            <section className="flex flex-col lg:flex-row px-0 lg:px-10">
                {article.image && (
                    <img src={article.image} alt="article.title"
                        className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl
                    object-cover object-center rounded-lg shadow-lg
                    "
                    />
                )}
                <div className="px-10">
                    <h1 className="Title px-0  pb-2">{article.title}</h1>
                    <div className="flex divide-x-2 space-x-4">
                        <h2 className="font-bold">By: {(article.author !== null) ? article.author : "unknown"}</h2>
                        <h2 className="font-bold pl-4">Source: {(article.source !== null) ? article.source : "unknown"}</h2>
                        <p className="pl-4">
                            <TimeStamp time={article.published_at} />
                        </p>
                    </div>
                    <p className="pt-4 mb-6">{article.description}</p>
                    <Link href={article.url} target="_blank">
                        <button className="flex space-x-4 bg-slate-900 text-white  px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-400 ">
                            <p>Read More</p>
                            <ArrowUpRightIcon className="h-5 w-5 text-white" />
                        </button>
                    </Link>
                </div>
            </section>

        </article>
    )
}

export default ArticlePage