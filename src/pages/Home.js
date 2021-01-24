import React from 'react'
import {Layout , Menu} from 'antd' 
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'

//Local imports
import HeaderComponent from '../components/card/HeaderComponent'


const {Content , Footer} = Layout



const Home = () =>{



    return(
        <Layout>
            
            <HeaderComponent />
            <Content style={{"padding":"25px 50px","minHeight":"550px"}}>
                Project card
            </Content>
            <Footer style={{"textAlign":"center"}}>
                <p>@Made with Love</p>
            </Footer>
        </Layout>
    )

}

export default Home;