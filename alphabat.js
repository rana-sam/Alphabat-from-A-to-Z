let num=parseInt(prompt("Press'1'for small Alphabats    Press '2' for capital Alphabats"))
switch (num) {
    case 1:
        for(var i=97;i<123;i++)
{
    let res = String.fromCharCode(i);
    console.log(res);
}
        break;
    case 2:
        for(var i=65;i<91;i++)
{
    let res = String.fromCharCode(i);
    console.log(res);
}
        break;

    default:
        break;
}


