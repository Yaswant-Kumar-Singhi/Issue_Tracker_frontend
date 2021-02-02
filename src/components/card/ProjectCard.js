import React from 'react'
import { Card } from "antd";
import {Link} from 'react-router-dom'
import { EyeOutlined , DeleteOutlined} from "@ant-design/icons";
import laptop from '../../images/laptop.png'

const { Meta } = Card;

const ProjectCard = ({project}) =>{
    const { name, description, author , slug, _id} = project;


    return(
        <>
        
        <Card
        cover={
          <img
            src={laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/project/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View 
          </Link>,
          <>
          <Link to={`/project/${slug}/delete`}>
          <DeleteOutlined className="text-danger" /> <br /> Delete Project
          </Link>
        </>,
        ]}
      >
        <Meta
          title={`${name} - ${author}`}
          description={`${description}`}
        />
      </Card>
    </>
        

        
    )

}

export default ProjectCard