function changeBackground(weather){

if(weather == "Clear"){
document.body.style.background = "skyblue";
}

else if(weather == "Clouds"){
document.body.style.background = "lightgray";
}

else if(weather == "Rain"){
document.body.style.background = "darkblue";
}

else if(weather == "Snow"){
document.body.style.background = "white";
}

else if(weather == "Thunderstorm"){
document.body.style.background = "purple";
}

else if(weather == "Mist"){
document.body.style.background = "silver";
}

else{
document.body.style.background = "lightyellow";
}

}
