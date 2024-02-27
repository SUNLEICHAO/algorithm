const PAGE = {
  init() {
    const d = new Date(" Fri Feb 2 00:30:54 2024 +0800 (中国标准时间)");
    const resDate =
      d.getFullYear() +
      "-" +
      this.p(d.getMonth() + 1) +
      "-" +
      this.p(d.getDate());
    const resTime =
      this.p(d.getHours()) +
      ":" +
      this.p(d.getMinutes()) +
      ":" +
      this.p(d.getSeconds());
    console.log(resDate);
  },
  p(s) {
    return s < 10 ? "0" + s : s;
  },
};

PAGE.init();
