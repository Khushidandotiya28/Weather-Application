const cityName = document.getElementById(`cityName`);
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');



    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=39f1a34c0397ef7236db71d9a6859b42`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        

        if(tempMood == 'Clear'){
            temp_status.innerHTML = "<ion-icon name='sunny'></ion-icon>";
        } else if(tempMood == 'Clouds'){
            temp_status.innerHTML = "<ion-icon name='cloud'></ion-icon>";
        } else if(tempMood == 'Rain'){
            temp_status.innerHTML = "<ion-icon name='rainy'></ion-icon>";
        } else {
            temp_status.innerHTML = "<ion-icon name='sunny></ion-icon>";
        }

        datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `Plz write the name before search`;
            datahide.classList.add('data_hide');

        }
    }
}

submitBtn.addEventListener('click', getInfo);