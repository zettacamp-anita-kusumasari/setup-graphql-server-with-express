const DataLoader = require('dataloader');
const School = require('../models/School');

const schoolLoader = new DataLoader(async (schoolIds) => {
  const schools = await School.find({ _id: { $in: schoolIds }, deleted: false });
  const schoolMap = {};
  schools.forEach((school) => {
    schoolMap[school._id] = school;
  });
  return schoolIds.map((id) => schoolMap[id]);
});

module.exports = schoolLoader;
