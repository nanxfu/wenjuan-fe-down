import { FC, useState } from "react";
import styles from './List.module.scss'
import QuestionCard from "../../components/QuestionComponents/QuestionCard";

const rawQuestionList = [
    {
      _id: "q1",
      title: "问卷1",
      isPublished: true,
      isStar: false,
      answerCount: 10,
      createdAt: "2021-09-03",
    },
    {
      _id: "q2",
      title: "问卷2",
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createdAt: "2021-09-04",
    },
    {
      _id: "q3",
      title: "问卷3",
      isPublished: false,
      isStar: false,
      answerCount: 10,
      createdAt: "2021-09-05",
    },
  ]
const List: FC = () => {
    const [questionList, setQuestionList] = useState(rawQuestionList);
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <h3>我的问卷</h3>
                </div>
                <div className={styles.right}>
                    <h3>搜索</h3>
                </div>
            </div>
            <div className={styles.content}>
              {questionList.map(q => {
                const {_id} = q

                return <QuestionCard key={_id} {...q}></QuestionCard>
              })}
            </div>
            <div className={styles.footer}>foter</div>
        </>
    )
  };
  
  export default List;