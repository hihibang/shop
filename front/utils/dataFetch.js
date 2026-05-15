import axios from 'axios';

/**
 * 배열을 n개씩 묶어 2차원 배열로 반환
 */
export const groupByRows = (array, number) => {
  return (array ?? []).reduce((acc, cur, idx) => {
    if (idx % number === 0) acc.push([cur]);
    else acc[acc.length - 1].push(cur);
    return acc;
  }, []);
};

/**
 * public/data 폴더의 JSON 파일을 fetch
 */
export const axiosData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

/*
  서버 연동을 위한 HTTP CORD 메서드 정의
  get, post, put, delete
*/
export const axiosGet = async(path)=>{ // 서버 연동 요청
  const url = `http://localhost:9000${path}`
  const res = await axios.get(url);
  return res.data;
}