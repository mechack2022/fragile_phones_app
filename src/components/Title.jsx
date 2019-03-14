import React, {Fragment} from 'react'

const Title = ({name,title}) => {
  return (
    <Fragment>>
            <div className="row my-2 mx-auto text-center">
                <div className="col-10 text-title">
                    <h1 className="font-weight-bold text-capitalize">
                      {name} <strong className="text-blue">{title}</strong>
                    </h1>               
                </div>
            </div>
    </Fragment>
  )
}

export default Title
