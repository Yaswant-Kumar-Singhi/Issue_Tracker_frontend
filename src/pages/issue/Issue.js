import React from 'react'
import IssueCreateForm from '../../components/forms/IssueCreateForm'
import HeaderComponent from '../../components/card/HeaderComponent'

const Issue = () => {

    return(
        <div>
            <HeaderComponent />
            I am in add issue page
            <br />
            <IssueCreateForm />
        </div>
    )

}

export default Issue