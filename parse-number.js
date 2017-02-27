function parseNumber(number, maxDecimals) {
    maxDecimals = maxDecimals || 2;
    var opts = [parseFloat(number), parseInt(number)];
    if(!isNaN(opts[0])) {
      if(is.decimal(opts[0])) {
        return parseFloat(opts[0].toFixed(maxDecimals));
      } else {
        return opts[1];
      }
    } else {
      return 0;
    }
  }
