import Link from "next/link"

export default function Button({ link = "", title, color="primary" }) {

    return (
    <>
    <Link href={link}>
        <button tabIndex="0" className={`btn btn-${color}`}>
            <a className="brevia_bold">{title}</a>
        </button>
    </Link>
    </>
    )
}