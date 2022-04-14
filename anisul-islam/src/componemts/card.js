const dateData = new Date();
const date = dateData.getDate();
const month = dateData.getMonth();
const year = dateData.getFullYear();
const time = dateData.getHours() + ":" + dateData.getMinutes()+":"+ dateData.getSeconds();


function Card(AppData){
    const {titleText, descriptionText} = AppData;
    return <div className='card'>
    <h3 className='title'>{titleText}</h3>
    <h3 className='todaysDate'>{descriptionText}</h3>
    <p className='dateAndTime'>{date + " / " + month + " / " +year +" - "+ time}</p>
    </div>
}
export default Card; 