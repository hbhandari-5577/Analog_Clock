setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2 + stime/120; // rotation made by hour hand
    mrotation = 6*mtime + stime/10; // rotation made by minute hand
    srotation = 6*stime; // ratation made by second hand

    // display actual rotations
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},)