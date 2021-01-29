let arr=['fmmsdkrwmunrkfsmvk','mrk'];

function createMap(str){
    let m=new Map();
    str.split('').forEach((c)=>{
        if(m.has(c)) m.set(c, m.get(c)+1);
        else m.set(c, 1);
    });
    return m;
}

function cmp(m1,m2){
    // console.log(m1,m2);
    let found=true;
    m1.forEach((v,k)=>{
        if(!m2.has(k) || m2.get(k)<v){
            found=false;
            return;
        }
    });
    return found;
}

function cmp2(s1, s2){
    let i,j=0;
    for(i=0;i<s1.length;i++){
        while(j<s2.length && s1[i]!==s2[j]) j++;
        if(j>=s2.length) return false;
        j++;
    }
    return (i>=s1.length);
}

let l=arr[1].length;
let m1=createMap(arr[1]);

let found=false;
while(l<arr[0].length && !found){
    for(let i=0;i<arr[0].length-l;i++){
        let curr=arr[0].substr(i,l);
        let m2=createMap(curr);
        if(cmp(m1,m2)){
            found=true;
            console.log(curr);
            break;
        }
    }
    l++;
}
