import {defineStore} from 'pinia'
import {reqHospitalDetail} from '@/api/hospital'

const useDetailStore = defineStore('Detail',{
    state:():any=>{
        return {
            hospitalInfo:{}
        }
    },
    actions:{
        //获取医院详情的方法
        async getHospital(hoscode:string){
            let result:any = await reqHospitalDetail(hoscode)
            if(result.code == 200){
                this.hospitalInfo = result.data
            }else{
                Promise.reject(new Error('获取医院数据失败'))
            }
        }
    },
    getters:{

    }
})

export default useDetailStore

