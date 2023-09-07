function sum_avg (s1,s2,s3) {
    let sum1 = s1+s2+s3;
    let avg1 = sum1 / 3;
    document.querySelector("#kor").innerHTML = s1;
    document.querySelector("#eng").innerHTML = s2;
    document.querySelector("#math").innerHTML = s3;
    document.querySelector("#sum").innerHTML = sum1;
    document.querySelector("#avg").innerHTML = avg1;
}
