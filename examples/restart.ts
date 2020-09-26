import VodafoneBox from "../src";

const pass = process.env.STATION_PWD;

(async () => {
  try {
    const vodafoneBox = new VodafoneBox("192.168.0.1");
    await vodafoneBox.login("admin", pass);
    const result = await vodafoneBox.restart();
    await vodafoneBox.logout();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
