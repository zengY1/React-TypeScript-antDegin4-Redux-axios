import Request from '@utils/request'
import Api from '@utils/api'
const { demo } = Api

async function listGetRole(params?: any) {
    const res= await Request({
        url: demo,
        method: "GET",
        data: params
    });
    return res
}
export { listGetRole }