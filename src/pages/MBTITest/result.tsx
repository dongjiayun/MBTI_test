import { View ,Text} from '@tarojs/components'
import {Local} from "@/utils/storage";
import {useState, useMemo, useLayoutEffect} from "react";
import {useLoad, useShareAppMessage} from "@tarojs/taro";
import {Divider,Cell,Progress,Button} from '@nutui/nutui-react-taro'

import styles from './result.module.scss'
import {characters as charactersData,character} from './characters'

export default function Result() {
    const [answers, setAnswers] = useState<{[key:number]:'E'|'I'|'S'|'N'|'T'|'F'|'J'|'P'}>({})
    const [result,setResult] = useState<{
        answers:{[key:number]:'E'|'I'|'S'|'N'|'T'|'F'|'J'|'P'},
        characters:[],
        date:string
    }>({
        answers:{},
        characters:[],
        date:''
    })

    const [characterData, setCharacterData] = useState<character>()

    useLoad(()=>{
        const localResult = Local.get('MBTITestResult')
        setAnswers(localResult.answers)
        setResult(localResult)
    })

    useShareAppMessage(()=>{
        return {
            title: '最专业的MBTI测试',
            path: '/pages/index/index',
            imageUrl:'https://res.ipetapi.com/upload/test/test_logo.jpg'
        }
    })

    useLayoutEffect(()=>{
        setCharacterData(charactersData.find(i=>i.name===characterName))
    })

    const characters = useMemo(()=>{
        const charactersCount = {
            'E':0,
            'I':0,
            'S':0,
            'N':0,
            'T':0,
            'F':0,
            'J':0,
            'P':0
        }
        Object.values(answers).forEach(i=>{
            charactersCount[i]++
        })
        return charactersCount
    },[answers])

    const characterName = useMemo(()=>{
        return result.characters?.join('')
    },[result])

    return (
        <View className={styles.jbbMbti}>
            <View className={styles.jbbMbtiDate}>测试时间: {result.date}</View>
            <View>
                <View>我的MBTI:
                    <Text style={{marginRight:'20px'}}  className={styles.jbbMbtiCharacterName}>{characterName}</Text>
                    人群中丰度:<Text  className={styles.jbbMbtiCharacterName}>{characterData?.percent}</Text>
                </View>
                <Cell align='center' className={styles.jbbMbtiCharacter}>
                    <Text style={{color:'#FF7F50'}} className={styles.jbbMbtiCharacterLabel}>E: {characters.E}</Text>
                    <Progress color='#FF7F50' percent={(characters.E/19)*100}></Progress>
                </Cell>
                <Cell align='center' className={styles.jbbMbtiCharacter}>
                    <Text style={{ color: '#4682B4'}} className={styles.jbbMbtiCharacterLabel}>I: {characters.I}</Text>
                    <Progress color='#4682B4' percent={(characters.I/19)*100}></Progress>
                </Cell>
                <Cell align='center' className={styles.jbbMbtiCharacter}>
                    <Text style={{ color: '#FFD700'}} className={styles.jbbMbtiCharacterLabel}>S: {characters.S}</Text>
                    <Progress color='#FFD700' percent={(characters.S/19)*100}></Progress>
                </Cell>
                <Cell align='center' className={styles.jbbMbtiCharacter}>
                    <Text style={{ color: '#8A2BE2' }} className={styles.jbbMbtiCharacterLabel}>N: {characters.N}</Text>
                    <Progress color='#8A2BE2' percent={(characters.N/19)*100}></Progress>
                </Cell>
                <Cell align='center' className={styles.jbbMbtiCharacter}>
                    <Text style={{ color: '#32CD32'}} className={styles.jbbMbtiCharacterLabel}>T: {characters.T}</Text>
                    <Progress color='#32CD32' percent={(characters.T/19)*100}></Progress>
                </Cell>
                <Cell align='center' className={styles.jbbMbtiCharacter}>
                    <Text style={{ color: '#FF69B4'}} className={styles.jbbMbtiCharacterLabel}>F: {characters.F}</Text>
                    <Progress color='#FF69B4' percent={(characters.F/19)*100}></Progress>
                </Cell>
                <Cell align='center' className={styles.jbbMbtiCharacter}>
                    <Text style={{ color: '#1E90FF'}} className={styles.jbbMbtiCharacterLabel}>J: {characters.J}</Text>
                    <Progress color='#1E90FF' percent={(characters.J/19)*100}></Progress>
                </Cell>
                <Cell align='center' className={styles.jbbMbtiCharacter}>
                    <Text style={{ color: '#FF4500'}} className={styles.jbbMbtiCharacterLabel}>P: {characters.P}</Text>
                    <Progress color='#FF4500' percent={(characters.P/19)*100}></Progress>
                </Cell>
            </View>
            <View style={{marginTop:'40px'}}>
                <Button  size='large' block type='primary'>分享给好友</Button>
            </View>
            <Divider>{characterData?.subtitle}</Divider>
            <View className={styles.jbbMbtiTitle}>性格描述</View>
            <View className={styles.jbbMbtiSection}>
                {characterData?.description}
            </View>
            <View className={styles.jbbMbtiTitle}>性格解析</View>
            <View className={styles.jbbMbtiSection}>
                {characterData?.interpretation}
            </View>
            <View className={styles.jbbMbtiTitle}>适合行业</View>
            <View className={styles.jbbMbtiSection}>
                {characterData?.industries}
            </View>
            <Divider>参考资料</Divider>
            <View className={styles.jbbMbtiTitle}>MBTI 性格理论</View>
            <View className={styles.jbbMbtiSection}>
        性格(personality) 源于拉丁语Persona，也叫个性。心理学中，性格指一个人在一定情况下所作行为反应的特质，即人们在生活、工作中独特的行为表现，包括思考方式、决策方式等。世界上关于性格理论的划分有很多种，本测评采用目前国际上最流行、在企业中应用最广泛的MBTI理论。
            </View>
            <View className={styles.jbbMbtiSection}>
        MBTI 全名 Myers Briggs Type Indicator. 是人类性格的外在状态模式。
            </View>
            <View className={styles.jbbMbtiSection}>
        MBTI 的人格类型分为四个维度，每个维度有两个方向，共计八个方面，即共有八种人格特点，具体如下：
            </View>
            <View className={styles.jbbMbtiSubsection}>
        态度倾向 (我们与世界相互作用方式):
            </View>
            <View className={styles.jbbMbtiDimension}>
        外向 Extraversion (E) <Text className={styles.arrow}>---</Text> 内向 Introversion (I)
            </View>
            <View className={styles.jbbMbtiSubsection}>
        接受信息 (我们获取信息的主要方式):
            </View>
            <View className={styles.jbbMbtiDimension}>
        感觉 Sensing (S) <Text className={styles.arrow}>---</Text> 直觉 iNtuition (N)
            </View>
            <View className={styles.jbbMbtiSubsection}>
        处理信息 (我们的决策方式):
            </View>
            <View className={styles.jbbMbtiDimension}>
        思考 Thinking (T) <Text className={styles.arrow}>---</Text> 情感 Feeling (F)
            </View>
            <View className={styles.jbbMbtiSubsection}>
        行动方式 (我们的做事方式):
            </View>
            <View className={styles.jbbMbtiDimension}>
        判断 Judging (J) <Text className={styles.arrow}>---</Text> 知觉 Perceiving (P)
            </View>
            <View className={styles.jbbMbtiSection}>
        在以上四个维度上，每个人都会有自己天生就具有的倾向性，也就是说，处在两个方向分界点的这边或那边，我们称之为“偏好”。例如：如果你落在外向的那边，称为“你具有外向的偏好”；如果你落在内向的那边，称为“你具有内向的偏好”。
            </View>
            <View className={styles.jbbMbtiSection}>
        在现实生活中，每个维度的两个方面你都会用到，只是其中的一个方面你用的更频繁、更舒适，就好像每个人都会用到左手和右手，习惯用左手的人是左撇子，习惯用右手的人是右撇子。同样，在四个维度上你用的最频繁、最熟练的那种方式就是你在这个维度上的偏好，而这四个偏好加以组合，就形成了你的人格类型，它反映了你在一系列心理过程和行为方式上的特点。
            </View>
            <View className={styles.jbbMbtiTitle}>
        维度解释：
            </View>
            <View className={styles.jbbMbtiSection}>
        我们与世界的相互作用方式
            </View>
            <View className={styles.jbbMbtiSubsection}>
        E 外向 关注自己如何影响外部环境：将心理能量和注意力聚集于外部世界和与他人的交往上。
            </View>
            <View className={styles.jbbMbtiExample}>
        例如：聚会、讨论、聊天
            </View>
            <View className={styles.jbbMbtiSubsection}>
        I 内向 关注外部环境的变化对自己的影响：将心理能量和注意力聚集于内部世界，注重自己的内心体验。
            </View>
            <View className={styles.jbbMbtiExample}>
        例如：独立思考，看书，避免成为注意的中心，听的比说的多
            </View>
            <View className={styles.jbbMbtiSection}>
        我们获取信息的主要方式
            </View>
            <View className={styles.jbbMbtiSubsection}>
        S 感觉 关注由感觉器官获取的具体信息：看到的、听到的、闻到的、尝到的、触摸到的事物.
            </View>
            <View className={styles.jbbMbtiExample}>
        例如：关注细节、喜欢描述、喜欢使用和琢磨已知的技能
            </View>
            <View className={styles.jbbMbtiSubsection}>
        N 直觉 关注事物的整体和发展变化趋势：灵感、预测、暗示，重视推理
            </View>
            <View className={styles.jbbMbtiExample}>
        例如：重视想象力和独创力，喜欢学习新技能，但容易厌倦、喜欢使用比喻，跳跃性地展现事实
            </View>
            <View className={styles.jbbMbtiSection}>
        我们的决策方式
            </View>
            <View className={styles.jbbMbtiSubsection}>
        T 思考 重视事物之间的逻辑关系，喜欢通过客观分析作决定评价。
            </View>
            <View className={styles.jbbMbtiExample}>
        例如：理智、客观、公正、认为圆通比坦率更重要
            </View>
            <View className={styles.jbbMbtiSubsection}>
        F 情感 以自己和他人的感受为重，将价值观作为判定标准
            </View>
            <View className={styles.jbbMbtiExample}>
        例如：有同情心、善良、和睦、善解人意，考虑行为对他人情感的影响，认为圆通和坦率同样重要
            </View>
            <View className={styles.jbbMbtiSection}>
        我们的做事方式
            </View>
            <View className={styles.jbbMbtiSubsection}>
        J 判断 喜欢做计划和决定，愿意进行管理和控制，希望生活井然有序
            </View>
            <View className={styles.jbbMbtiExample}>
        例如：重视结果(重点在于完成任务)、按部就班、有条理、尊重时间期限、喜欢做决定
            </View>
            <View className={styles.jbbMbtiSubsection}>
        P 知觉 灵活、试图去理解、适应环境、倾向于留有余地，喜欢宽松自由的生活方式
            </View>
            <View className={styles.jbbMbtiExample}>
        例如：重视过程、随信息的变化不断调整目标，喜欢有多种选择。
            </View>
            <View className={styles.jbbMbtiSection}>
        将人们在四个维度上的偏好加以组合，排列组合一共可以组成2的4次方(2*2*2*2)16种人格类型(外在状态模式)，这16种模式包括了人类的性格行为，16类型包括：
            </View>
            <View className={styles.jbbMbtiList}>
        1) ESTJ 大男人型　　2) ESTP 挑战型　　3) ESFJ 主人型　　4) ESFP 表演型<br />
        5) ENTJ 将军型　　　6) ENTP 发明家　　7) ENFJ 教育家　　8) ENFP 记者型<br />
        9) ISTJ 公务型　　　10) ISTP 冒险家　　11) ISFJ 照顾型　　12) ISFP 艺术家<br />
        13) INTJ 专家型　　 14) INTP 学者型　　15) INFJ 作家型　　16) INFP 哲学家
            </View>
        </View>
    )
}
