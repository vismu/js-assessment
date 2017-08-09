exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start);

    class Timer {
      constructor() {
        this.timer = setInterval(() => {
          start++;
          if (start <= end) {
            console.log(start);
          } else {
            this.cancel()
          }
        }, 100);

        this.cancel = () => clearInterval(this.timer);
      }
    }

    return new Timer();
  }
};
