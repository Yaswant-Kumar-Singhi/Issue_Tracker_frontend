import React from 'react'
import { Card } from "antd";
import {Link} from 'react-router-dom'
import { EyeOutlined , DeleteOutlined} from "@ant-design/icons";
import laptop from '../../images/laptop.png'

const { Meta } = Card;

const IssueCard = ({issue}) =>{
    const { title, description, author } = issue;


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
          <Link to={`/issue`}>
            <EyeOutlined className="text-warning" /> <br /> View 
          </Link>,
          <>
          <Link to={`/issue`}>
          <DeleteOutlined className="text-danger" /> <br /> Delete Project
          </Link>
        </>,
        ]}
      >
        <Meta
          title={`${title} - ${author}`}
          description={`${description}`}
        />
      </Card>
    </>
        

        
    )

}

export default IssueCard