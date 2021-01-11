import ApiClient from './ApiClient'

export const __CreateAnswer = async (formData, userId, postId) => {
  try {
    const res = await ApiClient.post(`/answers/${postId}/user/${userId}`, formData)
    // console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

// export const __GetAnswer = async (postId) => {
//   try{
//     const answ = await ApiClient.get(`/answers/${postId}`)
//   console.log(answ.data)
//   return answ.data
// } catch (error) {
//   throw error
// }
// }

export const __GetAnswers = async () => {
    try{
      const answ = await ApiClient.get(`/answers`)
    console.log(answ, "service answer")
    return answ.data
  } catch (error) {
    throw error
  }
  }


export const UpdateAnswer = async (formData, answerId) => {
  try {
    const res = await ApiClient.put(`/answers/${answerId}`, formData)
    // console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteAnswer = async (postId, answerId) => {
  try {
    const res = await ApiClient
    .delete(`/answers/${postId}/delete/${answerId}`)
    return res
  } catch (error) {
    throw error
  }
}
