// 'use client'

// // TODO: Hook 생성 완료. product-id, search merge하고 전체 찜 로직 통합하기
// import { useAddHeartsMutation, useDeleteHeartsMutation } from '../services/product/productApiSlice'

// export const useProductHeartHandler = () => {
//   const [addHearts] = useAddHeartsMutation()
//   const [deleteHearts] = useDeleteHeartsMutation()

//   async function setter(prodId: number, heartFlag: boolean, setHeartFlag: (heartFlag: boolean) => void) {
//     if (heartFlag === true) {
//       await deleteHearts(prodId)
//         .unwrap()
//         .then((result) => {
//           if (result.statusCode === 200) {
//             setHeartFlag(false)
//           }
//           if (result.statusCode === 401) {
//             // TODO: SEARCH 하고 merge 하고 RECENT ROUTE 추가
//           }
//         })
//     } else {
//       await addHearts(prodId)
//         .unwrap()
//         .then((result) => {
//           if (result.statusCode === 200) {
//             setHeartFlag(true)
//           }
//           if (result.statusCode === 401) {
//             // TODO: SEARCH 하고 merge 하고 RECENT ROUTE 추가
//           }
//         })
//     }
//   }
//   return setter
// }
