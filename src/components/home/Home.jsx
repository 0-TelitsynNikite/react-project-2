import './home.css'
import Btn from '../UI/btn/Btn';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="content">
                <h3>grow your business with us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam, blanditiis reprehenderit fugit qui in!</p>
                <Btn text={'try for free'}/>
            </div>

            <div className="image">
                <img className="images" src="https://images.unsplash.com/photo-1596741964346-791466b552b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"/>
            </div>

            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>

        </section>
    )
}

export default Home;