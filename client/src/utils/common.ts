import { AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

export const requestReturn = (res: AxiosResponse) => {
  const { code, msg, data } = res.data
  if (code) {
    ElMessage.error(msg)
    return 
  }
  if (msg) {
    ElMessage.success(msg)
    return data
  }
}
