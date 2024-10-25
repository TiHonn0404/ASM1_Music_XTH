type TCaSi = { id:number; ten:string; phai:TGioiTinh}
type TGioiTinh = string | boolean;
type TBaiHat = { id:number; tenBaiHat: string; ngayRaMat: string}
type TMusic = TCaSi & TBaiHat; 
type TNenTang = { id:number;  ten:string; hinh:string; }
const baihat_arr:TBaiHat[] = [
    {id:1, tenBaiHat:"Nghe như tình yêu", ngayRaMat:"2022-04"},
    {id:2, tenBaiHat:"Buồn hay vui", ngayRaMat:"2022-09"},
    {id:3, tenBaiHat:"Ngoại lệ của em", ngayRaMat:"2023-01"},
    {id:4, tenBaiHat:"Đừng làm trái tim anh đau", ngayRaMat:"2023-04"},
    {id:5, tenBaiHat:"Phóng zìn zìn", ngayRaMat:"2023-09"},
    {id:6, tenBaiHat:"No days off", ngayRaMat:"2024-01"},
 ];
let cs_arr:TMusic[] = [
    {id:1, ten:"HIEUTHUHAI", phai:"Nam", tenBaiHat:"Nghe như tình yêu", ngayRaMat:"2022-04"},
    {id:2, ten:"VSOUL", phai:"Nam", tenBaiHat:"Buồn hay vui", ngayRaMat:"2022-04"},
    {id:3, ten:"Phương Ly", phai:"Nữ", tenBaiHat:"Ngoại lệ của em", ngayRaMat:"2022-04"},
    {id:4, ten:"Sơn Tùng MTP", phai:"Nam",tenBaiHat:"Đừng làm trái tim anh đau", ngayRaMat:"2022-04"},
    {id:5, ten:"Low G & Tlinh", phai:"Nam",tenBaiHat:"Phóng zìn zìn", ngayRaMat:"2022-04"},
    {id:6, ten:"Wrxdie", phai:"Nam",tenBaiHat:"No days off", ngayRaMat:"2022-04"},
];
const nentang_arr:TNenTang[] = [
    { id:1, ten:"Youtube", "hinh": "images/Youtube.png"},
    { id:2, ten:"Spotify", "hinh": "images/Spotify.jpg"},
    { id:3, ten:"Youtube Music", "hinh": "images/YtbMusic.png"},
    { id:4, ten:"Zing Mp3", "hinh": "images/ZingMp3.jpg"},
    { id:5, ten:"NhacCuaTui", "hinh": "images/NhacCuaTui.jpg"},
    { id:6, ten:"Apple Music", "hinh": "images/AM.jpg"}
];
export { TNenTang, TMusic, TCaSi, TBaiHat, TGioiTinh}
export { cs_arr, nentang_arr, baihat_arr}
  