import request from "@/utils/request";
import type { HospitalResponseData,HospitalLevelAndRegionResponseData,HospitalInfo } from "./type";

enum API {
    //医院接口地址
    HOSPITAL_URL = '/hosp/hospital/',
    //获取医院的等级与地区接口
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/',
    //根据关键字返回医院的数据
    HOSPITALINFO_URL = '/hosp/hospital/findByHosname/'
}
//获取医院的数据
export const reqHospital = (page:number,limit:number,hostype='',districtCode:'')=>request<any,HospitalResponseData>({
    url: API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`,
    method:'get'
})

//获取医院等级和地区
export const reqHospitalLevelAndRegion = (dictCode:string)=>request<any,HospitalLevelAndRegionResponseData>({
    url:API.HOSPITALLEVELANDREGION_URL + dictCode,
    method:'get'
})

//根据关键字返回医院的数据
export const reqHospitalInfo = (hosname:string)=>request<any,HospitalInfo>({
    url:API.HOSPITALINFO_URL + hosname,
    method:'get'
})
