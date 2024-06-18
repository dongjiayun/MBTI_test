import { View,Text} from '@tarojs/components'
import Taro, { useLoad ,useShareAppMessage} from '@tarojs/taro'
import {Button,Space} from '@nutui/nutui-react-taro'
import {Local} from "@/utils/storage";

import styles from './index.module.scss'

export default function Index() {

    useLoad(() => {
        console.log('Page loaded.')
    })

    useShareAppMessage(()=>{
        return {
            title: '最专业的MBTI测试',
            path: '/pages/index/index',
            imageUrl:'https://res.ipetapi.com/upload/test/test_logo.jpg'
        }
    })

    const handleStartTest = () => {
        Taro.navigateTo({
            url: '/pages/MBTITest/index'
        })
    }

    const result = Local.get('MBTITestResult')

    const hasResult = !!result

    const handleViewResult = () => {
        Taro.navigateTo({
            url: '/pages/MBTITest/result'
        })
    }

    return (
        <View className={styles.jbbHome}>
            <View className={styles.jbbHomeBody}>
                <View>
                    <Text className={styles.jbbHomeBodyTitle}>MBTI性格测试</Text>
                </View>
                <Space direction='vertical'>
                    <Button size='xlarge' block type='primary' onClick={handleStartTest}>{hasResult?'重新测试':'开始测试'}</Button>
                    {hasResult?<Button size='xlarge' block type='primary' fill='outline' onClick={handleViewResult}>查看测试报告</Button>:''}
                </Space>
                <View className={styles.jbbHomeBodyInfo}>
                    本测试不收集任何个人信息
                </View>
            </View>
            <View className={styles.jbbHomeFooter}></View>
        </View>
    )
}
