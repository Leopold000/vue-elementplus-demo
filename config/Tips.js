//公用的弹窗
import { ElMessage } from 'element-plus';

const tips = class{
    constructor(message,type="success"){
        this.message = message
        this.type = type
    }

    //ELMessage 提示
    mess_age(){
        ElMessage({
            message: this.message,
            type: this.type,
            duration:1500
        })
    }
}

export default tips