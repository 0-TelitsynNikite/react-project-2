import './about.css'
import Title from '../UI/title/Title';
import Btn from '../UI/btn/Btn'

const About = () => {
    return (
        <section className="about" id="about">

            <Title title={'about'} text={'us'}/>

            <div className="row">

                <div className="image">
                    <img src="https://images.unsplash.com/photo-1635910162005-4a295b1bcca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"></img>
                </div>

                <div className="content">
                    <h3 className="title">big project start with big dreams</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, inventore doloribus? Mollitia, consectetur, corporis harum voluptas, iure eos neque dolore ratione error expedita nostrum? Beatae assumenda dignissimos hic quas totam?</p>
                    <Btn text={'learn more'}/>
                    <div className="icons-container">
                        <div className="icons">
                            <i className="fas fa-award"></i>
                            <h3>14 award won</h3>
                        </div>
                        <div className="icons">
                            <i className="fas fa-user"></i>
                            <h3>250 satisfield clients</h3>
                        </div>
                        <div className="icons">
                            <i className="fas fa-project-diagram"></i>
                            <h3>200 project completed</h3>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About;