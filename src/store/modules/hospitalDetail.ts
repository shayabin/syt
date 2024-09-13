import {defineStore} from 'pinia'
import {reqHospitalDepartment, reqHospitalDetail} from '@/api/hospital'

const useDetailStore = defineStore('Detail',{
    state:():any=>{
        return {
            //医院详情的数据
            hospitalInfo:{},
            //存储医院科室的数据
            departmentArr:[]
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
        },
        async getDepartment(hoscode:string){
            let result:any = await reqHospitalDepartment(hoscode)
            if(result.code == 200){
                this.departmentArr = result.data
            }else{
                console.log(666);
                
            }
        }
    },
    getters:{

    }
})

export default useDetailStore

