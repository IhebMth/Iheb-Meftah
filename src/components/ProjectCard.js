import { Col } from 'react-bootstrap'
import '../css/Projects.css'
export const ProjectCard = ({title, description, imgUrl, githubLink }) =>

(
    <>
    <Col>

        <div className="proj-imgbx ">
        <div className="image-overlay" />
            <img src={imgUrl} className='' alt="" />
            <div className="proj-txtx">
                <h4 className='text-white'>{title}</h4>
                <span className='text-white'>{description}</span>
            </div>
            <div className="proj-links d-flex gap-10 mt-40 justify-content-center">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className=' button button2 text-white'>Github Link</a>
                {/* <a href="" className='button text-white'>Close</a> */}

            </div>
            <div className="background-image"></div>

        </div>

    </Col>
 
    </>
)