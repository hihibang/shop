import express from 'express'
import * as controller from '../controller/kakao.js'

const router = express.Router()

router.post('/ready', controller.getReady) // 프론트에서 결제하기 눌렀을 때 이쪽으로 옴
router.get('/approve', controller.getApprove) // 카카오에서 리다이렉트로 접속


export default router