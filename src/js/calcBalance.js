// --------------- For ChartMonth & PieChart--------------------

// Returns an array of month's revenues balance
const getDataByEirad = (propData, id) => {
    const object = propData.find((item) => item.year_id === id);
    return object ? object.dataE : [];
  };

  // Returns an array of month's expenses balance
  const getDataByMasrof = (propData, id) => {
    const object = propData.find((item) => item.year_id === id);
    return object ? object.dataM : [];
  };

  // Calculate the total balance (the summation of the array elements)
  const sumArrays = (arr) => {
    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  };


  //------------------ For ChartMonth -----------------
  const getDataByEiradName = (propData, id) => {
    const name = propData.find((item) => item.year_id === id);
    return name ? name.nameE : "";
  };

  const getDataByMasrofName = (propData, id) => {
    const name = propData.find((item) => item.year_id === id);
    return name ? name.nameM : "";
  };

  export {getDataByEirad, getDataByMasrof,sumArrays,getDataByEiradName,getDataByMasrofName}