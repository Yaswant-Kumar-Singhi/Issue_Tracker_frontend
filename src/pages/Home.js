import React from 'react'
import {Layout , Menu} from 'antd' 
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'


const {Header , Content , Footer} = Layout

const Home = () =>{



    return(
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">
                        <Link to="/"> Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/create" style={{"float":"right"}}>
                        <Link to="">Create Project</Link>
                    </Menu.Item>
                </Menu>
            </Header>

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