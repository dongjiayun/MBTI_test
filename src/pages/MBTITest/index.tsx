import { View} from '@tarojs/components'
import Taro,{ useLoad,useUnload,useReady} from '@tarojs/taro'
import { useMemo, useState} from "react";
import {sectionA, sectionB, sectionC, sectionD} from "@/pages/MBTITest/questrions";
import {Space,Button,Progress,Animate,Dialog} from '@nutui/nutui-react-taro'
import {Checked} from  '@nutui/icons-react-taro'
import {round} from 'lodash'
import {Local} from "@/utils/storage";
import moment from "moment";

import styles from './index.module.scss'


export default function Index() {
    let isFinished = false

    useLoad(() => {
        console.log('Page loaded.')
    })

    useReady(()=>{
        const _answerInit = {}
        for(let i=1;i<94;i++){
            _answerInit[i] = ''
        }
        setAnswers(_answerInit)
        const cache = Local.get('MBTITest')
        if(cache){
            const current = Local.get('MBTITestCurrent')
            Dialog.open('useCache',{
                content:'是否继续上次答题',
                onConfirm:()=>{
                    setAnswers(cache)
                    setCurrentQuestionId(current)
                    setCurrentSectionId(current)
                    sectionHandle(current)
                    clearLocalCache()
                    Dialog.close('useCache')
                },
                onCancel:()=>{
                    clearLocalCache()
                    Dialog.close('useCache')
                }
            })
        }
    })

    useUnload(()=>{
        if(!isFinished&&currentQuestionId>1) {
            Local.set('MBTITest', answers)
            Local.set('MBTITestCurrent', currentQuestionId)
        }
    })

    const clearLocalCache = () =>{
        Local.remove('MBTITest')
        Local.remove('MBTITestCurrent')
    }

    const [currentSectionId, setCurrentSectionId] = useState(0)

    const [currentQuestionId, setCurrentQuestionId] = useState(1)

    const [answers,setAnswers] = useState<{[key:number]:'E'|'I'|'S'|'N'|'T'|'F'|'J'|'P'|''}>({})


    const [isLoading, setIsLoading] = useState(false)

    const questions = [
        sectionA,
        sectionB,
        sectionC,
        sectionD
    ]

    const currentSection = useMemo(()=>{
        return questions[currentSectionId]
    }, [currentSectionId])

    const currentQuestions = useMemo(()=>{
        return currentSection?.questions||[]
    }, [currentSection])

    const currentQuestion = useMemo(()=>{
        const _question = currentQuestions.find(question => question.id === currentQuestionId)
        if(!_question) {
            const _currentQuestions = questions.find(i=>{
                return i.questions.some(j=>j.id===currentQuestionId)
            })
            return  _currentQuestions?.questions.find(question => question.id === currentQuestionId)
        }
        else return _question
    },  [currentQuestionId])

    const percent = useMemo(()=>{
        return round((currentQuestionId) / 93* 100,1)
    }, [currentQuestionId])

    const handleAnswer = (option) => {
        if(isLoading===true)return

        setAnswers( {
            ...answers,
            [currentQuestionId]:option
        })

        setIsLoading(true)

        setTimeout(()=>{
            if (currentQuestionId < 93) {
                setCurrentQuestionId(prevQuestionId=>{
                    const newQuestionId = prevQuestionId + 1
                    sectionHandle(newQuestionId)
                    return newQuestionId
                })
            }
            setIsLoading(false)
        },500)
    }

    const handlePrevious = () =>{
        setCurrentQuestionId(prevQuestionId=>{
            const newQuestionId = prevQuestionId - 1
            sectionHandle(newQuestionId)
            return newQuestionId
        })
    }

    const handleNext = () =>{
        setCurrentQuestionId(prevQuestionId=>{
            const newQuestionId = prevQuestionId + 1
            sectionHandle(newQuestionId)
            return newQuestionId
        })
    }

    const sectionHandle = (questionId) => {
        const sectionId = questions.findIndex(section=>{
            return section.questions.some(question=>{
                return question.id === Number(questionId)
            })
        })
        setCurrentSectionId(sectionId)
    }

    const handleResult = () =>{
        if(Object.keys(answers).length!==93||Object.values(answers).some(i=>!i)){
            Taro.showToast({
                title:'请完成所有题目',
                icon:'none'
            })
            const firstEmptyAnswer = Object.keys(answers).find(i=>answers[i]==='')||1
            console.log('firstEmptyAnswer',firstEmptyAnswer,answers)
            setCurrentQuestionId(Number(firstEmptyAnswer))
            sectionHandle(firstEmptyAnswer)
            return
        }
        const charaterMap = {
            E:0,
            I:0,
            S:0,
            N:0,
            T:0,
            F:0,
            J:0,
            P:0
        }
        Object.values(answers).map(i=>{
            charaterMap[i]++
        })
        const characters:Array<"E"|"I"|"S"|"N"|"T"|"F"|"J"|"P"> = []
        if(charaterMap.E>charaterMap.I){
            characters.push('E')
        }else{
            characters.push('I')
        }
        if(charaterMap.S>charaterMap.N){
            characters.push('S')
        } else{
            characters.push('N')
        }
        if(charaterMap.T>charaterMap.F){
            characters.push('T')
        } else{
            characters.push('F')
        }
        if(charaterMap.J>charaterMap.P){
            characters.push('J')
        } else{
            characters.push('P')
        }
        isFinished = true
        const result = {
            answers,
            characters,
            date: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        Local.set('MBTITestResult', result)
        Taro.navigateTo({
            url: `/pages/MBTITest/result`
        })
    }

    return (
        <>
            <View className={styles.jbbMbtiTest}>
                <View style={{padding:'20px'}}>
                    <Progress percent={percent} showText></Progress>
                </View>
                <View className={styles.jbbMbtiTestHeader}>
                    {currentSection.title}
                </View>
                <View className={styles.jbbMbtiTestBody}>
                    <Animate type='float' loop>
                        <View className={styles.jbbMbtiTestBodyTitle}>{currentQuestion?.title}</View>
                    </Animate>
                    <Space direction='vertical' wrap>
                        <View className={styles.jbbMbtiTestBodyOption}>
                            <Button size='large' onClick={(()=>handleAnswer(currentQuestion?.optionACharacter))} type='primary'>{currentQuestion?.optionA}</Button>
                            {answers[currentQuestionId]===currentQuestion?.optionACharacter?
                                <Checked className={styles.jbbMbtiTestBodyOptionChecked} color='#409EFF' width='16px' height='16px' />:
                                ''}
                        </View>
                        <View className={styles.jbbMbtiTestBodyOption}>
                            <Button size='large' onClick={(()=>handleAnswer(currentQuestion?.optionBCharacter))} type='primary'>{currentQuestion?.optionB}</Button>
                            {answers[currentQuestionId]===currentQuestion?.optionBCharacter?
                                <Checked className={styles.jbbMbtiTestBodyOptionChecked} color='#409EFF' width='16px' height='16px' />:
                                ''}
                        </View>
                    </Space>
                    {/*<View>{JSON.stringify(currentQuestion)}</View>*/}
                </View>
                <View className={styles.jbbMbtiTestFooter}>
                    <Space direction='vertical'>
                        {currentQuestionId > 1?<Button onClick={handlePrevious} size='large' block type='primary'>上一题</Button>:''}
                        {currentQuestionId !==93?<Button onClick={handleNext} size='large' block type='primary'>下一题</Button>:''}
                        {currentQuestionId === 93 ?<Button onClick={handleResult} size='large' block type='primary' fill='outline'>查看结果</Button>:''}
                    </Space>
                </View>
            </View>
            <Dialog id='useCache' />
        </>
    )
}
