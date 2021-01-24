import {Layout,Menu} from 'antd' 
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'

const {Header} = Layout;

const HeaderComponent = () => {

    return(
        
    

    <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">
                        <Link to="/"> Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/create" style={{"float":"right"}}>
                        <Link to="/project/create">Create Project</Link>
                    </Menu.Item>
                </Menu>
    </Header>
    )
}

export default HeaderComponent