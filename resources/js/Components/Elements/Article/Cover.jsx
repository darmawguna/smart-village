import React from 'react'

const Cover = (props) => {
  const {cover} = props;
    return <img src={cover} alt="coverArticle" className='w-full h-[180px] ssm:h-[100px]'/>
}

export default Cover