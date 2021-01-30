import {Layout,Menu} from 'antd' 
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'

const {Header} = Layout;
const {SubMenu} = Menu

const HeaderComponent = () => {

    return(
        
    

    <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">
                        <Link to="/"> Home</Link>
                    </Menu.Item>
                    <SubMenu title="Create" style={{"float":"right"}}>
                    <Menu.Item key="/createProject" style={{"float":"right"}}>
                        <Link to="/project/create">Create Project</Link>
                    </Menu.Item>
                    <Menu.Item key="/createIssue" style={{"float":"right"}}>
                        <Link to="/issue">Create Issue</Link>
                    </Menu.Item>
                    </SubMenu>
                </Menu>
    </Header>
    )
}

export default HeaderComponent