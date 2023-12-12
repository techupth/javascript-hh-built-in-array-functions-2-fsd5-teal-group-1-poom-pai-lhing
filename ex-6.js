const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  const isInArray = carCollection.includes(carBrand);
  if (!isInArray) {
    carCollection.push(carBrand);
    return `new car collection is : ${carCollection}.`;
  }
  return `${carBrand} has already existed in the ${
    carCollection.indexOf(carBrand) + 1
  } position of car collection.`;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
