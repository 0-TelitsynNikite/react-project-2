import './Header.css';
import {useState} from 'react'

const Header = () => {

    const [times, setTimes] = useState('fas fa-bars')
    const [active, setActive] = useState('navbar')
    const [toggle, setToggle] = useState(false)

    function handleClick() {
        if(!toggle) {
            setActive('navbar active')
            setTimes('fas fa-times')
        } else {
            setActive('navbar')
            setTimes('fas fa-bars')
        }

        
    }

    window.addEventListener('scroll', () => {
        setActive('navbar')
        setTimes('fas fa-bars')
    })
    

    return (
        <header className='header'>

            <a href="#" className="logo">marketo.</a>

            <nav className={active}>
                <a href="#home">home</a>
                <a href="#services">services</a>
                <a href="#about">about</a>
                <a href="#portfolio">portfolio</a>
                <a href="#pricing">pricing</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
            </nav>

            <div 
                onClick={() => {
                    setToggle(!toggle)
                    handleClick()
                }}
                id="menu-btn" 
                className={times}
            >
            </div>

        </header>
    )
}

export default Header;