import request from "@/utils/request";
import type {HosPitalDetail} from "./type"
 
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/'
}

//获取医院详情的接口
export const reqHospitalDetail = (hoscode:string)=>request<any,HosPitalDetail>({
    url:API.HOSPITALDETAIL_URL + hoscode,
    method:'get'
})