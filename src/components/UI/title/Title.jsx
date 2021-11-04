import './title.css'

const Title = ({title, text}) => {
    return (
        <h1 className="heading">{title} <span>{text}</span></h1>
    )
}

export default Title;