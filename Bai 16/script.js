async function myPromise(lat, lng) {
  try {
    const res = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const data = await res.json();
    console.log(`Dữ liệu của (${lat},${lng}))`);
    console.log(data);
    throw new Error("Đã lỗi rồi");
    console.log("ok");
  } catch (error) {
    console.log(error);
  }
}

myPromise(52.508, 13.381);

///
