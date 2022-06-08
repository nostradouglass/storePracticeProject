

export const Description = ({description}: {description: string}) => {
    return (
        <div className="m-4 text-gray-500 md:mx-48">
            <h3>Description</h3>
            <p>{description}</p>
        </div>
    )
}