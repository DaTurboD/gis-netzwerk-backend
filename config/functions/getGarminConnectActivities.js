const axios = require('axios');
const { GarminConnect } = require('garmin-connect');
const GCClient = new GarminConnect();


const getExistingActivities = async () => {
  const existingActivityIds = []
  const activities = await axios.get(`https://api.mxd.codes/activities`)
  activities.data.map((activity) => {
    existingActivityIds.push(activity.activityId)
  })
  return existingActivityIds
}

const createEntry = async (activity) => {
  const details = await GCClient.getActivity({ activityId: activity.activityId });
  await strapi.query('activity').create({
    activityId: activity.activityId,
    activityName: activity.activityName,
    beginTimestamp: activity.beginTimestamp,
    activityType: activity.activityType,
    distance: activity.distance,
    duration: activity.duration,
    elapsedDuration:  activity.elapsedDuration,
    movingDuration: activity.movingDuration,
    elevationGain: activity.elevationGain,
    elevationLoss: activity.elevationLoss,
    minElevation: activity.minElevation,
    maxElevation: activity.minElevation,
    sportTypeId: activity.sportTypeId,
    averageSpeed: (activity.distance/1000) / (activity.movingDuration/3600),
    maxSpeed: activity.maxSpeed * 3.6,
    startLatitude: activity.startLatitude,
    startLongitude: activity.startLongitude,
    endLatitude: activity.endLatitude,
    endLongitude: activity.endLongitude,
    flow: activity.avgFlow,
    grit: activity.grit,
    jumpCount: activity.jumpCount,
    caloriesEstimated: activity.caloriesEstimated,
    caloriesConsumed: activity.caloriesConsumed,
    waterEstimated: activity.waterEstimated,
    waterConsumed:activity.waterConsumed,
    details: details
  })
}

module.exports = async () => {
  await GCClient.login(process.env.GARMIN_USERNAME, process.env.GARMIN_PWD)
  const activities = await GCClient.getActivities()
  const exisitingActivities = await getExistingActivities()
  activities ? activities.map((activity) => {
    const isExisting = exisitingActivities.includes(activity.activityId)
    isExisting ? console.log(activity.activityId + " already exists") : createEntry(activity)
  })
  : console.log("no activities found")
  
}