import React from 'react'
import { Card } from "antd";
import {Link} from 'react-router-dom'
import { EyeOutlined } from "@ant-design/icons";
import laptop from '../../images/laptop.png'

const { Meta } = Card;

const ProjectCard = ({project}) =>{
    const { image, name, description, author } = project;


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
          <Link to={``}>
            <EyeOutlined className="text-warning" /> <br /> View Project Issue
          </Link>
        ]}
      >
        <Meta
          title={name}
          description={`${description}`}
          author = {author}
        />
      </Card>
    </>
        

        
    )

}

export default ProjectCard