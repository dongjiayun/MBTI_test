import { PropsWithChildren } from 'react'
import { useLaunch,useDidShow } from '@tarojs/taro'
import '@nutui/nutui-react-taro/dist/style.css'

import './app.scss'

function App({ children }: PropsWithChildren<any>) {

    useLaunch(() => {
        console.log('App launched.')
    })

    useDidShow(()=>{
        const updateManager = Taro.getUpdateManager()
        updateManager.onUpdateReady(function () {
            Taro.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function (res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate()
                    }
                }
            })
        })
    })

    // children 是将要会渲染的页面
    return children
}

export default App
