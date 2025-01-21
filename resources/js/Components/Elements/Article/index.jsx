import React from 'react'
import Content from './Content'
import Cover from './Cover'
import ButtonNavigate from '../ButtonNavigate'

const ArticleCard = (props) => {
  const { covers, titles, dates, childrens, id } = props;
  return (
    <div>
      <Cover cover={covers} />
      <div className="py-2 px-2">
        <div>
          <Content
            title={titles}
            date={dates}
            children={childrens} />
        </div>
        <div className="flex justify-center mt-10 ssm:mt-0">
          <ButtonNavigate
            navigateTo={`/artikel/${ id }`}
            variant="bg-white shadow-xl py-1 rounded-full flex justify-center text-[15px] ssm:text-[10px] w-[50%]"
          >
            Selengkapnya
          </ButtonNavigate>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard