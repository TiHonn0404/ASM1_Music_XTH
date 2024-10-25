import { cs_arr, nentang_arr, baihat_arr } from './data.js';
const hien1BaiHat = (bai) => {
    return `<div>
     <h4>Tên Bài hát: ${bai.tenBaiHat} </h4>
     <p>Ngày ra mắt: ${bai.ngayRaMat}</p>
     
    </div>`;
};
export const showlistbaihat = () => {
    const html_arr = baihat_arr.map(hien1BaiHat);
    return html_arr.join("");
};
const phaicuacs = (phai) => {
    if (typeof phai == 'boolean') {
        if (phai == true)
            return "Nữ";
        else
            return "Nam";
    }
    else
        return phai;
};
const hien1CS = (cs) => {
    return `<div>
     <h4>Họ tên: ${cs.ten} </h4>
     <p>Giới tính: ${phaicuacs(cs.phai)}</p>
     <p>Bài hát: ${cs.tenBaiHat}</p>
     <p>Ngày ra mắt: ${cs.ngayRaMat}</p>
    </div>`;
};
export const showlistcasi = () => {
    const html_arr = cs_arr.map(hien1CS);
    return html_arr.join("");
};
const hien1NenTang = (coso) => {
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
    </div>`;
};
export const showlistnentang = () => {
    const html_arr = nentang_arr.map(hien1NenTang);
    return html_arr.join("");
};
const show1TopTrending = (th) => {
    return `<div>
            <img src="${th.hinh}">
          </div>`;
};
export const showlistTopTrending = async () => {
    let toptrend_arr = await fetch("http://localhost:3000/Artist")
        .then(res => res.json())
        .then(data => { return data; });
    let str = ``;
    toptrend_arr.forEach(th => str += show1TopTrending(th));
    return str;
};
