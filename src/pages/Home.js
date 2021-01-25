import React,{useEffect , useState} from 'react'
import {Layout , Menu} from 'antd' 
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'
import Jumbotron from '../components/card/Jumbotron'

//Local imports
import HeaderComponent from '../components/card/HeaderComponent'
import {getProjects} from '../functions/project_function'
import ProductCard from '../components/card/ProjectCard'


const {Content , Footer} = Layout



const Home = () =>{

    const [projects , setProjects] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        loadAllProjects();
    },[])

    const loadAllProjects = () =>{
        setLoading(true)
        getProjects().then((res)=>{
            setProjects(res.data)
            setLoading(false)
        })
    }



    return(
        <Layout>
            
            <HeaderComponent />
            <Content style={{"padding":"25px 50px","minHeight":"550px"}}>
                
                <div className="jumbotron text-danger h1 font-weight-bold text-center">
                    <Jumbotron text={["Issue Tracker","Bug Tracker"]} />
                </div>

                {loading ? <h4>Loading...</h4> : <h4><Jumbotron text = {["All Projects" , "Click on View tab to add issue"]} /></h4>}
                
                <div className="container">
                    <div className="row">
                        {projects.map((project)=>(
                            <div key={project._id} className="col-md-4 pb-3">                    
                                <ProductCard project={project} />
                            </div>))}
                    </div>
                </div>


            </Content>
            <Footer style={{"textAlign":"center"}}>
                <p>@Made with Love</p>
            </Footer>
        </Layout>
    )

}

export default Home;