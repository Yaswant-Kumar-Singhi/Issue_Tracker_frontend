import React from 'react'
import { Card } from "antd";
import {Link} from 'react-router-dom'
import { EyeOutlined , EditOutlined} from "@ant-design/icons";
import laptop from '../../images/laptop.png'

const { Meta } = Card;

const ProjectCard = ({project}) =>{
    const { image, name, description, author , slug} = project;


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
          <EditOutlined className="text-danger" /> <br /> Add Issue
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